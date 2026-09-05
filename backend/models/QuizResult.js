const mongoose = require("mongoose");

const quizResultSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "user_id is required"],
      index: true,
    },
    quiz_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz",
      required: [true, "quiz_id is required"],
      index: true,
    },
    score: {
      type: Number,
      required: [true, "Score is required"],
      min: [0, "Score cannot be negative"],
    },
    total_questions: {
      type: Number,
      required: [true, "Total questions is required"],
      min: [1, "Total questions must be at least 1"],
    },
    completed_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: { createdAt: false, updatedAt: "updated_at" },
    collection: "quiz_results",
  }
);

// Compound index for querying user quiz history efficiently
quizResultSchema.index({ user_id: 1, quiz_id: 1 });

const QuizResult = mongoose.model("QuizResult", quizResultSchema);
module.exports = QuizResult;
