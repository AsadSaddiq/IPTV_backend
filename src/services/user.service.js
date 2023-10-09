import { UserModel } from "../models/index.js";
import { StreamModel } from "../models/index.js";
import mongoose from "mongoose";

export const UserService = {
  getAll: async () => {
    return UserModel.find();
  },
  getById: async (id) => {
    return UserModel.findById(id);
  },

  add: async (body) => {
    return UserModel.create({ ...body });
  },

  delete: async (id) => {
    return UserModel.findByIdAndDelete(id);
  },

  login: async (body) => {
    try {
      return UserModel.findOne({ email: body.email });
    } catch (error) {
      return "no user exist";
    }
  },
  userStream: async (id) => {
    return StreamModel.find({ user_id: id }).populate("user_id");
  },

  getUSid: async (userId, streamId) => {
    console.log(userId);

    return StreamModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(streamId),
        },
      },
      {
        $match: {
          user_id: new mongoose.Types.ObjectId(userId),
        },
      },
    ]);
  },

  deleteUSid: async (userId, streamId) => {
    return StreamModel.findOneAndDelete({ _id: streamId, user_id: userId });
  },
};
