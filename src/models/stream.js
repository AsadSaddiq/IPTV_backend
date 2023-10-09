import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    episode_id: { type: Number, required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    time: { type: String, required: true },
  },
  { timestamps: true }
);
export const StreamModel = mongoose.model("Stream", schema);
