import { Router } from 'express'
import {
  analyzeContent,
  updateUsage,
} from '../controllers/aiAnalysisController.js'
import { authenticateUser } from '../middleware/authMiddleware.js'

const router = Router()

// All routes require authentication
router.use(authenticateUser)

// POST /api/v1/ai-analysis/analyze - Analyze content from URL
router.post('/analyze', analyzeContent)

// PUT /api/v1/ai-analysis/:analysisId/usage - Update analysis usage tracking
router.put('/:analysisId/usage', updateUsage)

export default router