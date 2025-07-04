import { GoogleGenerativeAI } from '@google/generative-ai'

export class GeminiAnalyzer {
  constructor() {
    this.apiKey = null
    this.genAI = null
    this.model = null
    this.initialized = false
  }

  initialize() {
    if (this.initialized) {
      return
    }

    this.apiKey = process.env.GEMINI_API_KEY
    
    if (!this.apiKey) {
      throw new Error('GEMINI_API_KEY environment variable is required')
    }

    this.genAI = new GoogleGenerativeAI(this.apiKey)
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
    this.initialized = true
  }

  async analyzeContent(scrapedData, url) {
    const startTime = Date.now()

    try {
      this.initialize()
      
      const prompt = this.buildPrompt(scrapedData, url)
      const result = await this.model.generateContent(prompt)
      const response = await result.response
      const text = response.text()

      return {
        success: true,
        analysis: this.parseResponse(text),
        processingTime: Date.now() - startTime,
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        processingTime: Date.now() - startTime,
      }
    }
  }

  buildPrompt(scrapedData, url) {
    return `
    Analyze the following web content and provide structured information in JSON format:

    URL: ${url}
    Domain: ${scrapedData.domain || 'Unknown'}
    Title: ${scrapedData.title || 'Not found'}
    Description: ${scrapedData.description || 'Not found'}
    Keywords: ${scrapedData.keywords?.join(', ') || 'None'}
    Content Preview: ${scrapedData.content?.substring(0, 1500) || 'Not available'}...
    Author: ${scrapedData.author || 'Unknown'}

    Provide analysis in this format:

    {
      "suggestedTitle": "Use the actual scraped title, clean it up if needed",
      "suggestedPlatform": "Platform name from domain (${scrapedData.domain})",
      "suggestedType": "One of: video, article, tool, course, book, podcast, other",
      "suggestedTags": ["tag1", "tag2", "tag3"],
      "generatedSummary": "CONCISE summary (1-2 sentences max)"
    }

    Guidelines:
    - Use the ACTUAL scraped title
    - Platform should match the domain
    - Generate 3 specific tags from content
    - Summary: 1-2 sentences, focus on what user will learn/get/achieve

    Return only the JSON object, no additional text.
    `
  }

  parseResponse(responseText) {
    try {
      const cleanText = responseText.trim()
      let jsonStart = cleanText.indexOf('{')
      let jsonEnd = cleanText.lastIndexOf('}')

      if (jsonStart === -1 || jsonEnd === -1) {
        throw new Error('No valid JSON found')
      }

      const jsonText = cleanText.substring(jsonStart, jsonEnd + 1)
      const parsed = JSON.parse(jsonText)

      return {
        suggestedTitle: this.sanitize(parsed.suggestedTitle) || '',
        suggestedPlatform: this.sanitize(parsed.suggestedPlatform) || '',
        suggestedType: this.validateType(parsed.suggestedType) || 'other',
        suggestedTags: this.validateTags(parsed.suggestedTags) || [],
        generatedSummary: this.sanitize(parsed.generatedSummary) || '',
      }
    } catch (error) {
      return {
        suggestedTitle: '',
        suggestedPlatform: '',
        suggestedType: 'other',
        suggestedTags: [],
        generatedSummary: '',
      }
    }
  }

  sanitize(str) {
    if (typeof str !== 'string') return ''
    return str.trim().substring(0, 500)
  }

  validateType(type) {
    const validTypes = [
      'video', 'article', 'tool', 'course', 'book', 'podcast', 'other'
    ]
    return validTypes.includes(type) ? type : 'other'
  }

  validateTags(tags) {
    if (!Array.isArray(tags)) return []

    return tags
      .filter((tag) => typeof tag === 'string' && tag.trim())
      .map((tag) => tag.trim().toLowerCase())
      .slice(0, 3)
  }
}
