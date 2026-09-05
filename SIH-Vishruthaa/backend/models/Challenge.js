const mongoose = require("mongoose");

const challengeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    difficulty: {
      type: String,
      required: [true, "Difficulty is required"],
      enum: ["Beginner", "Intermediate", "Advanced"],
      index: true,
    },
    question: {
      type: String,
      required: [true, "Question is required"],
    },
    expected_output: {
      type: String,
      required: [true, "Expected output is required"],
    },
  },
  {
    timestamps: true,
    collection: "coding_challenges",
  }
);

const Challenge = mongoose.model("Challenge", challengeSchema);
module.exports = Challenge;
