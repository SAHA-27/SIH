const mongoose = require("mongoose");

const lessonProgressSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "user_id is required"],
    },
    module_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Module",
      required: [true, "module_id is required"],
    },
    lesson_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "lesson_id is required"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
    completed_at: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    collection: "lesson_progress",
  }
);

// Compound unique index on user_id + module_id + lesson_id
lessonProgressSchema.index(
  { user_id: 1, module_id: 1, lesson_id: 1 },
  { unique: true }
);

const LessonProgress = mongoose.model("LessonProgress", lessonProgressSchema);
module.exports = LessonProgress;
