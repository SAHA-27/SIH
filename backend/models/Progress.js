const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "user_id is required"],
      unique: true,
      index: true,
    },
    overall_progress: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
    completed_modules: {
      type: Number,
      default: 0,
      min: 0,
    },
    completed_lessons: {
      type: Number,
      default: 0,
      min: 0,
    },
    quiz_score: {
      type: Number,
      default: 0,
      min: 0,
    },
    streak: {
      type: Number,
      default: 0,
      min: 0,
    },
    total_points: {
      type: Number,
      default: 0,
      min: 0,
    },
    badges: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    collection: "student_progress",
  }
);

const Progress = mongoose.model("Progress", progressSchema);
module.exports = Progress;
