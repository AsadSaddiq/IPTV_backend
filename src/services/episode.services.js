import { EpisodeModel, SeasonModel, StreamModel } from "../models/index.js";
import mongoose from "mongoose";

export const episodeServices = {
  add: async (data) => {
    return EpisodeModel.create(data);
  },
  getAll: async () => {
    return EpisodeModel.find();
  },
  // getOne: async (id) => {
  //   return EpisodeModel.findById(id);
  // },

  getOne: async (id) => {
    return EpisodeModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(id),
        },
      },
    ]);
  },

  update: async (id, data) => {
    return EpisodeModel.findByIdAndUpdate(id, data, { new: true });
  },
  delete: async (id) => {
    return EpisodeModel.findByIdAndDelete(id);
  },
  // getAllEStream: async (id) => {
  //   return StreamModel.find({ episode_id: id });
  // },
  getAllEStream: async (id) => {
    return StreamModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(id),
        },
      },
    ]);
  },
};
