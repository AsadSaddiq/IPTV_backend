import { GenreModel, GenreSeriesModel } from "../models/index.js";
import mongoose from "mongoose";

export const genresServices = {
  add: async (data) => {
    return GenreModel.create(data);
  },
  getAll: async () => {
    return GenreModel.find();
  },
  // getOne: async (id) => {
  //   return GenreModel.findById(id);
  // },

  getOne: async (id) => {
    return GenreModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(id),
        },
      },
    ]);
  },

  update: async (id, data) => {
    return GenreModel.findByIdAndUpdate(id, data, { new: true });
  },
  delete: async (id) => {
    return GenreModel.findByIdAndDelete(id);
  },
  getSeriesByGenreId: async (genre_id) => {
    return GenreSeriesModel.find({ genre_id })
      .populate("genre_id")
      .populate("series_id");
  },
};
