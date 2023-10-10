import { GenreSeriesModel } from "../models/index.js";
import mongoose from "mongoose";

export const genresSeries = {
  add: async (data) => {
    return GenreSeriesModel.create(data);
  },
  getAll: async () => {
    return GenreSeriesModel.find();
  },
  // getOne: async (id) => {
  //   return GenreSeriesModel.findById(id);
  // },
  getOne: async (id) => {
    return GenreSeriesModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(id),
        },
      },
    ]);
  },
  update: async (id, data) => {
    return GenreSeriesModel.findByIdAndUpdate(id, data, { new: true });
  },
  delete: async (id) => {
    return GenreSeriesModel.findByIdAndDelete(id);
  },
};
