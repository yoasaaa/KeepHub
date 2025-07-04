import { StatusCodes } from 'http-status-codes'
import { AIContentAnalyzer } from '../utils/aiContentAnalyzer.js'
import AnalysisModel from '../models/AnalysisModel.js'
import { BadRequestError, NotFoundError } from '../errors/customErrors.js'

const aiAnalyzer = new AIContentAnalyzer()

/**
 * Analyze content from URL
 * POST /api/v1/ai-analysis/analyze
 */
export const analyzeContent = async (req, res) => {
  const { url } = req.body
  const userId = req.user.userId

  if (!url) {
    throw new BadRequestError('URL is required')
  }

  // Check for existing successful analysis within 24 hours
  const existingAnalysis = await AnalysisModel.findOne({
    url,
    userId,
    success: true,
    createdAt: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000) },
  }).sort({ createdAt: -1 })

  if (existingAnalysis && existingAnalysis.aiAnalysis) {
    return res.status(StatusCodes.OK).json({
      success: true,
      cached: true,
      analysisId: existingAnalysis._id,
      aiAnalysis: existingAnalysis.aiAnalysis,
      processingTime: 0,
    })
  }

  // Perform new analysis
  const result = await aiAnalyzer.analyzeContent(url, userId)
  res.status(StatusCodes.OK).json(result)
}

/**
 * Update analysis usage tracking
 * PUT /api/v1/ai-analysis/:analysisId/usage
 */
export const updateUsage = async (req, res) => {
  const { analysisId } = req.params
  const userId = req.user.userId

  const analysis = await AnalysisModel.findOne({
    _id: analysisId,
    userId,
  })

  if (!analysis) {
    throw new NotFoundError('Analysis not found')
  }

  const updatedAnalysis = await aiAnalyzer.updateAnalysisUsage(analysisId)
  res.status(StatusCodes.OK).json({ analysis: updatedAnalysis })
}
