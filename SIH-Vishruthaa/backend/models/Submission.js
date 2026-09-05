const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "user_id is required"],
      index: true,
    },
    challenge_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Challenge",
      required: [true, "challenge_id is required"],
      index: true,
    },
    code: {
      type: String,
      required: [true, "Code is required"],
    },
    result: {
      type: mongoose.Schema.Types.Mixed,
      required: [true, "Result is required"],
    },
    submitted_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: { createdAt: false, updatedAt: "updated_at" },
    collection: "submissions",
  }
);

// Compound index for finding user submissions per challenge
submissionSchema.index({ user_id: 1, challenge_id: 1 });

const Submission = mongoose.model("Submission", submissionSchema);
module.exports = Submission;
