import axios from 'axios'
import * as cheerio from 'cheerio'

export class ContentScraper {
  constructor() {
    this.timeout = 10000
    this.maxContentLength = 3000
    this.retryAttempts = 2
  }

  async scrapeContent(url) {
    const startTime = Date.now()

    try {
      if (!this.isValidUrl(url)) {
        throw new Error('Invalid URL provided')
      }

      const html = await this.fetchWithRetry(url)
      const $ = cheerio.load(html)

      return {
        title: this.extractFromSelectors($, [
          'meta[property="og:title"]',
          'meta[name="twitter:title"]',
          'title',
          'h1'
        ]),
        description: this.extractFromSelectors($, [
          'meta[name="description"]',
          'meta[property="og:description"]',
          'meta[name="twitter:description"]'
        ]),
        content: this.extractMainContent($),
        domain: new URL(url).hostname,
        author: this.extractFromSelectors($, [
          'meta[name="author"]',
          'meta[property="article:author"]',
          '.author',
          '[rel="author"]'
        ]),
        keywords: this.extractKeywords($),
        success: true,
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

  async fetchWithRetry(url) {
    for (let attempt = 1; attempt <= this.retryAttempts; attempt++) {
      try {
        const response = await axios.get(url, {
          timeout: this.timeout,
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          },
        })
        return response.data
      } catch (error) {
        if (attempt === this.retryAttempts) {
          throw new Error(`Failed to fetch after ${this.retryAttempts} attempts: ${error.message}`)
        }

        await this.delay(attempt * 1000)
      }
    }
  }

  extractFromSelectors($, selectors) {
    for (const selector of selectors) {
      const element = $(selector).first()
      if (element.length) {
        const content = element.attr('content') || element.text()
        if (content && content.trim()) {
          return content.trim()
        }
      }
    }
    return ''
  }

  extractMainContent($) {
    const contentSelectors = [
      'article',
      '.content',
      '.post-content',
      '.entry-content',
      '.main-content',
      'main',
      '#content'
    ]

    for (const selector of contentSelectors) {
      const element = $(selector).first()
      if (element.length) {
        const content = element.text().trim()
        if (content) {
          return content.substring(0, this.maxContentLength)
        }
      }
    }

    // Fallback: extract from body, excluding nav and footer
    $('nav, footer, header, script, style, noscript').remove()
    const bodyContent = $('body').text().trim()

    return bodyContent.substring(0, this.maxContentLength)
  }

  extractKeywords($) {
    const keywords = []
    const metaKeywords = $('meta[name="keywords"]').attr('content')
    if (metaKeywords) {
      keywords.push(...metaKeywords.split(',').map((k) => k.trim()))
    }

    return [...new Set(keywords)] // Remove duplicates
  }

  isValidUrl(url) {
    try {
      new URL(url)
      return true
    } catch (error) {
      return false
    }
  }

  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
}
