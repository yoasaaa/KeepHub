import Resource from '../models/ResourceModel.js';
import { StatusCodes } from 'http-status-codes';
import mongoose from 'mongoose';
import day from 'dayjs';

export const getAllResources = async (req, res) => {
  const { search, resourceType, resourceStatus, sort, tag } = req.query;

  const queryObject = {
    createdBy: req.user.userId,
  };

  if (search) {
    queryObject.$or = [
      { title: { $regex: search, $options: 'i' } },
      { platform: { $regex: search, $options: 'i' } },
      { tags: { $in: [new RegExp(search, 'i')] } },
    ];
  }

  if (tag && tag !== 'all') {
    queryObject.tags = { $in: [tag] };
  }

  if (resourceType && resourceType !== 'all') {
    queryObject.resourceType = resourceType;
  }

  if (resourceStatus && resourceStatus !== 'all') {
    queryObject.resourceStatus = resourceStatus;
  }

  const sortOptions = {
    newest: '-createdAt',
    oldest: 'createdAt',
    'a-z': 'title',
    'z-a': '-title',
  };

  const sortKey = sortOptions[sort] || sortOptions.newest;

  // setup pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const resources = await Resource.find(queryObject)
    .sort(sortKey)
    .skip(skip)
    .limit(limit);

  const totalResources = await Resource.countDocuments(queryObject);
  const numPages = Math.ceil(totalResources / limit);

  res.status(StatusCodes.OK).json({
    totalResources,
    numPages,
    currentPage: page,
    resources,
  });
};

export const getAllTags = async (req, res) => {
  const tags = await Resource.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    { $unwind: '$tags' },
    { $group: { _id: '$tags', count: { $sum: 1 } } },
    { $sort: { _id: 1 } }
  ]);

  const tagList = tags.map(tag => tag._id);
  res.status(StatusCodes.OK).json({ tags: tagList });
};

export const createResource = async (req, res) => {
  req.body.createdBy = req.user.userId;
  
  // Process tags: convert comma-separated string to array
  if (req.body.tags && typeof req.body.tags === 'string') {
    req.body.tags = req.body.tags
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);
  }
  
  const resource = await Resource.create(req.body);
  res.status(StatusCodes.CREATED).json({ resource });
};

export const getResource = async (req, res) => {
  const resource = await Resource.findById(req.params.id);
  res.status(StatusCodes.OK).json({ resource });
};

export const updateResource = async (req, res) => {
  // Process tags: convert comma-separated string to array
  if (req.body.tags && typeof req.body.tags === 'string') {
    req.body.tags = req.body.tags
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);
  }
  
  const updatedResource = await Resource.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(StatusCodes.OK).json({ resource: updatedResource });
};

export const deleteResource = async (req, res) => {
  const removedResource = await Resource.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ resource: removedResource });
};

export const showStats = async (req, res) => {
  // Resource Status Stats
  let stats = await Resource.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: '$resourceStatus', count: { $sum: 1 } } },
  ]);

  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  const defaultStats = {
    'to read': stats['to read'] || 0,
    'in progress': stats['in progress'] || 0,
    completed: stats.completed || 0,
    reference: stats.reference || 0,
  };

  // Resource Type Distribution
  let typeStats = await Resource.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: '$resourceType', count: { $sum: 1 } } },
  ]);

  const resourceTypeStats = typeStats.map((item) => ({
    type: item._id,
    count: item.count,
  }));

  // Monthly Additions
  let monthlyAdditions = await Resource.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } },
        count: { $sum: 1 },
      },
    },
    { $sort: { '_id.year': -1, '_id.month': -1 } },
    { $limit: 6 },
  ]);

  monthlyAdditions = monthlyAdditions
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;

      const date = day()
        .month(month - 1)
        .year(year)
        .format('MMM YY');

      return { date, count };
    })
    .reverse();

  // Tag Statistics
  let tagStats = await Resource.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    { $unwind: '$tags' },
    { $group: { _id: '$tags', count: { $sum: 1 } } },
    { $sort: { count: -1 } },
    { $limit: 15 }
  ]);

  const popularTags = tagStats.map((item) => ({
    tag: item._id,
    count: item.count,
  }));

  res.status(StatusCodes.OK).json({ 
    defaultStats, 
    monthlyAdditions,
    resourceTypeStats,
    popularTags
  });
}; 