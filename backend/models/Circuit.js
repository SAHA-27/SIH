const mongoose = require("mongoose");

const circuitSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "user_id is required"],
      index: true,
    },
    circuit_name: {
      type: String,
      required: [true, "Circuit name is required"],
      trim: true,
    },
    circuit_data: {
      type: mongoose.Schema.Types.Mixed,
      required: [true, "Circuit data is required"],
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    collection: "circuits",
  }
);

const Circuit = mongoose.model("Circuit", circuitSchema);
module.exports = Circuit;
