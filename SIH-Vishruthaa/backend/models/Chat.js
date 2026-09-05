const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "user_id is required"],
      index: true,
    },
    question: {
      type: String,
      required: [true, "Question is required"],
      trim: true,
    },
    response: {
      type: String,
      required: [true, "Response is required"],
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: { createdAt: false, updatedAt: "updated_at" },
    collection: "ai_tutor_chats",
  }
);

// Compound index for user history lookup sorted by creation date
chatSchema.index({ user_id: 1, created_at: -1 });

const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;
