import { ContentScraper } from './contentScraper.js'
import { GeminiAnalyzer } from './geminiAnalyzer.js'
import AnalysisModel from '../models/AnalysisModel.js'

export class AIContentAnalyzer {
  constructor() {
    this.scraper = new ContentScraper()
    this.geminiAnalyzer = new GeminiAnalyzer()
  }

  async analyzeContent(url, userId) {
    const startTime = Date.now()

    try {
      const scrapedData = await this.scraper.scrapeContent(url)

      if (!scrapedData.success || !this.hasValidContent(scrapedData)) {
        return {
          success: true,
          strategy: 'content-insufficient',
          aiAnalysis: this.getEmptyAnalysis(),
          processingTime: Date.now() - startTime,
        }
      }

      const aiResult = await this.geminiAnalyzer.analyzeContent(scrapedData, url)

      if (!aiResult.success) {
        return {
          success: true,
          strategy: 'ai-failed',
          aiAnalysis: this.getEmptyAnalysis(),
          processingTime: Date.now() - startTime,
        }
      }

      const savedAnalysis = await this.saveAnalysisRecord(url, userId, aiResult.analysis)

      return {
        success: true,
        analysisId: savedAnalysis._id,
        strategy: 'scraper-ai',
        aiAnalysis: aiResult.analysis,
        processingTime: Date.now() - startTime,
      }

    } catch (error) {
      await this.saveFailedAnalysisRecord(url, userId)

      return {
        success: false,
        error: error.message,
        processingTime: Date.now() - startTime,
      }
    }
  }

  hasValidContent(data) {
    if (!data || !data.success) return false

    const { title, description, content } = data
    const errorKeywords = ['error', 'not found', 'forbidden', 'access denied', 'javascript required']
    
    const isValidText = (text, minLength) => {
      if (!text || text.length < minLength) return false
      const lowerText = text.toLowerCase()
      return !errorKeywords.some(keyword => lowerText.includes(keyword))
    }

    return isValidText(title, 5) || isValidText(description, 20) || isValidText(content, 50)
  }

  getEmptyAnalysis() {
    return {
      suggestedTitle: '',
      suggestedPlatform: '',
      suggestedType: 'other',
      suggestedTags: [],
      generatedSummary: '',
    }
  }

  async saveAnalysisRecord(url, userId, aiAnalysis) {
    const analysisRecord = new AnalysisModel({
      url,
      userId,
      success: true,
      aiAnalysis,
      applied: false,
    })

    return await analysisRecord.save()
  }

  async saveFailedAnalysisRecord(url, userId) {
    const analysisRecord = new AnalysisModel({
      url,
      userId,
      success: false,
      aiAnalysis: null,
      applied: false,
    })

    return await analysisRecord.save()
  }

  async updateAnalysisUsage(analysisId) {
    const analysis = await AnalysisModel.findById(analysisId)
    if (!analysis) {
      throw new Error('Analysis record not found')
    }

    analysis.applied = true
    return await analysis.save()
  }
}
