import { useState } from 'react'
import {
  FaMagic,
  FaSpinner,
  FaExclamationTriangle,
  FaInfoCircle,
} from 'react-icons/fa'
import customFetch from '../utils/customFetch'
import { toast } from 'react-toastify'
import PropTypes from 'prop-types'

const SmartAnalyzer = ({ url, onAnalysisComplete, disabled = false }) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [error, setError] = useState(null)
  const [showDetails, setShowDetails] = useState(false)

  const analyzeUrl = async () => {
    if (!url || !url.trim()) {
      toast.error('Please enter a URL first')
      return
    }

    try {
      new URL(url)
    } catch {
      toast.error('Please enter a valid URL')
      return
    }

    setIsAnalyzing(true)
    setError(null)

    try {
      const response = await customFetch.post('/ai-analysis/analyze', {
        url: url.trim(),
      })

      if (response.data.success) {
        toast.success(
          response.data.cached
            ? 'Using cached analysis result'
            : 'Content analyzed successfully!'
        )

        onAnalysisComplete({
          success: true,
          data: response.data,
          cached: response.data.cached,
        })
      } else {
        throw new Error(response.data.error || 'Analysis failed')
      }
    } catch (error) {
      const errorMessage = error.response?.data?.error || error.message || 'Failed to analyze content'
      
      setError(errorMessage)
      toast.error(`Analysis failed: ${errorMessage}`)
      
      onAnalysisComplete({
        success: false,
        error: errorMessage,
      })
    } finally {
      setIsAnalyzing(false)
    }
  }

  return (
    <div className="smart-analyzer">
      <div className="analyzer-header">
        <h4 className="analyzer-title">
          <FaMagic className="analyzer-icon" />
          AI Content Analysis
        </h4>
        <div className="analyzer-subtitle">
          <span>Automatically extract title, tags, and summary</span>
          <button
            type="button"
            className="info-toggle"
            onClick={() => setShowDetails(!showDetails)}
            title="Learn more"
          >
            <FaInfoCircle />
          </button>
        </div>
      </div>

      <div className="analyzer-actions">
        <button
          type="button"
          className={`btn analyzer-btn ${isAnalyzing ? 'analyzing' : ''}`}
          onClick={analyzeUrl}
          disabled={disabled || isAnalyzing || !url}
        >
          {isAnalyzing ? (
            <>
              <FaSpinner className="spinner" />
              Analyzing...
            </>
          ) : (
            <>
              <FaMagic />
              Analyze Content
            </>
          )}
        </button>

        {error && (
          <div className="analyzer-error">
            <FaExclamationTriangle />
            <span>{error}</span>
          </div>
        )}
      </div>

      {showDetails && (
        <div className="analyzer-details">
          <div className="feature-pills">
            <span className="feature-pill">
              <span className="pill-icon">🎯</span>
              Smart Detection
            </span>
            <span className="feature-pill">
              <span className="pill-icon">🏷️</span>
              Auto Tagging
            </span>
            <span className="feature-pill">
              <span className="pill-icon">📝</span>
              Summarization
            </span>
          </div>
          <p className="details-text">
            AI visits the URL and extracts key information to suggest relevant
            content metadata.
          </p>
        </div>
      )}
    </div>
  )
}

SmartAnalyzer.propTypes = {
  url: PropTypes.string.isRequired,
  onAnalysisComplete: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}

export default SmartAnalyzer
