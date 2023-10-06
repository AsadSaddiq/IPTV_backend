import mongoose from "mongoose";
const schema = mongoose.Schema({
  genre_id: { type: Number, required: true },
  series_id: { type: Number, required: true },
});
export const GenreSeriesModel = mongoose.model("GenreSeries", schema);
