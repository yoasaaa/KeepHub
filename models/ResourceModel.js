import mongoose from 'mongoose';
import { RESOURCE_STATUS, RESOURCE_TYPE } from '../utils/constants.js';

const ResourceSchema = new mongoose.Schema(
  {
    title: String,
    platform: String,
    url: String,
    resourceType: {
      type: String,
      enum: Object.values(RESOURCE_TYPE),
      default: RESOURCE_TYPE.ARTICLE,
    },
    resourceStatus: {
      type: String,
      enum: Object.values(RESOURCE_STATUS),
      default: RESOURCE_STATUS.TO_READ,
    },
    tags: [String],
    notes: String,
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Resource', ResourceSchema); 