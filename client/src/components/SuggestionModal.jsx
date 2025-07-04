import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { RESOURCE_TYPE } from '../../../utils/constants'

/**
 * Displays AI analysis results and allows user to accept suggestions
 */
const SuggestionModal = ({
  isOpen,
  onClose,
  aiAnalysis,
  onApplySuggestions,
  processingTime,
}) => {
  const [selectedSuggestions, setSelectedSuggestions] = useState({
    title: true,
    platform: true,
    type: true,
    tags: true,
    summary: true,
  })

  const [editedSuggestions, setEditedSuggestions] = useState({
    title: '',
    platform: '',
    type: '',
    tags: [],
    summary: '',
  })

  // Initialize edited suggestions when modal opens
  useEffect(() => {
    if (isOpen && aiAnalysis) {
      setEditedSuggestions({
        title: aiAnalysis.suggestedTitle || '',
        platform: aiAnalysis.suggestedPlatform || '',
        type: aiAnalysis.suggestedType || '',
        tags: Array.isArray(aiAnalysis.suggestedTags)
          ? aiAnalysis.suggestedTags
          : [],
        summary: aiAnalysis.generatedSummary || '',
      })
    }
  }, [isOpen, aiAnalysis])

  const handleCheckboxChange = (field) => {
    setSelectedSuggestions((prev) => ({
      ...prev,
      [field]: !prev[field],
    }))
  }

  const handleInputChange = (field, value) => {
    setEditedSuggestions((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleTagsChange = (value) => {
    const tags = value
      .split(',')
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0)
      .slice(0, 3)

    setEditedSuggestions((prev) => ({
      ...prev,
      tags: tags,
    }))
  }

  const handleApply = () => {
    const appliedData = {}
    const appliedFields = []

    Object.keys(selectedSuggestions).forEach((field) => {
      if (selectedSuggestions[field]) {
        appliedData[field] = editedSuggestions[field]
        appliedFields.push(field)
      }
    })

    onApplySuggestions(appliedData, appliedFields)
    onClose()
  }

  if (!isOpen) return null

  const renderSuggestionItem = (field, label, type = 'text', options = null) => (
    <div className="suggestion-item" key={field}>
      <div className="suggestion-header">
        <label className="suggestion-checkbox">
          <input
            type="checkbox"
            checked={selectedSuggestions[field]}
            onChange={() => handleCheckboxChange(field)}
          />
          <span className="checkmark"></span>
          {label}
        </label>
      </div>
      {type === 'textarea' ? (
        <textarea
          value={editedSuggestions[field]}
          onChange={(e) => handleInputChange(field, e.target.value)}
          className="suggestion-textarea"
          placeholder={`AI generated ${label.toLowerCase()}`}
          rows="3"
        />
      ) : type === 'select' ? (
        <select
          value={editedSuggestions[field]}
          onChange={(e) => handleInputChange(field, e.target.value)}
          className="suggestion-input"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </option>
          ))}
        </select>
      ) : (
        <input
          type="text"
          value={field === 'tags' ? editedSuggestions[field].join(', ') : editedSuggestions[field]}
          onChange={(e) => 
            field === 'tags' 
              ? handleTagsChange(e.target.value)
              : handleInputChange(field, e.target.value)
          }
          className="suggestion-input"
          placeholder={
            field === 'tags' 
              ? 'max 3, comma-separated'
              : `${label.toLowerCase()} ${field === 'title' ? 'title' : field === 'platform' ? 'name' : ''}`
          }
        />
      )}
    </div>
  )

  return (
    <div className="modal-overlay">
      <div className="modal-content ai-suggestions-modal">
        <div className="modal-header">
          <div className="modal-title">
            <span className="modal-icon">✨</span>
            <h3>AI Analysis Results</h3>
          </div>
          <button className="modal-close" onClick={onClose}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="modal-body">
          {/* Processing Time */}
          <div className="analysis-meta">
            <span className="processing-time">
              Analysis completed in {processingTime}ms
            </span>
          </div>

          {/* AI Suggestions */}
          <div className="suggestions-container">
            {renderSuggestionItem('title', 'Title')}
            {renderSuggestionItem('platform', 'Platform')}
            {renderSuggestionItem('type', 'Type', 'select', Object.values(RESOURCE_TYPE))}
            {renderSuggestionItem('tags', 'Tags')}
            {renderSuggestionItem('summary', 'Summary', 'textarea')}
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn modal-btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="btn modal-btn-primary" onClick={handleApply}>
            Apply Selected
          </button>
        </div>
      </div>
    </div>
  )
}

SuggestionModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  aiAnalysis: PropTypes.object,
  onApplySuggestions: PropTypes.func.isRequired,
  processingTime: PropTypes.number,
}

export default SuggestionModal
