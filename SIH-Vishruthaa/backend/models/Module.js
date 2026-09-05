const mongoose = require("mongoose");

const moduleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      index: true,
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
    content: {
      type: mongoose.Schema.Types.Mixed,
      required: [true, "Content is required"],
    },
    video_url: {
      type: String,
      default: "",
    },
    duration: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
    collection: "learning_modules",
  }
);

const Module = mongoose.model("Module", moduleSchema);
module.exports = Module;
