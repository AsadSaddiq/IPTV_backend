import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    season_id: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    thumbnail_id: { type: Number, required: true },
  },
  { timestamps: true }
);
export const EpisodeModel = mongoose.model("Episode", schema);
