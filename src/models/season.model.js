import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    series_id: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String },
  },
  { timestamps: true }
);
export const SeasonModel = mongoose.model("Season", schema);
