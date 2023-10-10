import { SeasonModel, EpisodeModel } from "../models/index.js";
import mongoose from "mongoose";

export const seasonServices = {
  add: async (data) => {
    return SeasonModel.create(data);
  },
  getAll: async () => {
    return SeasonModel.find();
  },
  // getOne: async (id) => {
  //   return SeasonModel.findById(id);
  // },
  getOne: async (id) => {
    return SeasonModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(id),
        },
      },
    ]);
  },
  update: async (id, data) => {
    return SeasonModel.findByIdAndUpdate(id, data, { new: true });
  },
  delete: async (id) => {
    return SeasonModel.findByIdAndDelete(id);
  },
  // getSeasonEpi: async (id) => {
  //   return EpisodeModel.find({ season_id: id });
  // },
  getSeasonEpi: async (id) => {
    return EpisodeModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(id),
        },
      },
    ]);
  },
};
