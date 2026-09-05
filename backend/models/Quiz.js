const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema(
  {
    module_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Module",
      required: [true, "module_id is required"],
      index: true,
    },
    question: {
      type: String,
      required: [true, "Question is required"],
      trim: true,
    },
    option_a: {
      type: String,
      required: [true, "Option A is required"],
      trim: true,
    },
    option_b: {
      type: String,
      required: [true, "Option B is required"],
      trim: true,
    },
    option_c: {
      type: String,
      required: [true, "Option C is required"],
      trim: true,
    },
    option_d: {
      type: String,
      required: [true, "Option D is required"],
      trim: true,
    },
    correct_answer: {
      type: String,
      required: [true, "Correct answer is required"],
      enum: ["A", "B", "C", "D"],
      select: false, // Excludes correct_answer by default from query results
    },
  },
  {
    timestamps: true,
    collection: "quizzes",
  }
);

// Ensure correct_answer is excluded in JSON transformations
quizSchema.set("toJSON", {
  transform: (doc, ret) => {
    delete ret.correct_answer;
    delete ret.__v;
    return ret;
  },
});

const Quiz = mongoose.model("Quiz", quizSchema);
module.exports = Quiz;
