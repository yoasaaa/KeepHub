import mongoose from 'mongoose'

const AnalysisSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    success: { type: Boolean, required: true },
    aiAnalysis: {
      suggestedTitle: String,
      suggestedPlatform: String,
      suggestedType: {
        type: String,
        enum: [
          'video',
          'article',
          'tool',
          'course',
          'book',
          'podcast',
          'other',
        ],
      },
      suggestedTags: [String],
      generatedSummary: String,
    },
    applied: { type: Boolean, default: false },
  },
  { timestamps: true }
)

// Indexes for caching and user queries
AnalysisSchema.index({ userId: 1, createdAt: -1 })
AnalysisSchema.index({ url: 1, userId: 1 })

export default mongoose.model('Analysis', AnalysisSchema)
