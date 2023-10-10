import { UserModel } from "../models/index.js";
import { StreamModel } from "../models/index.js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import config from "../config/index.js";

export const UserService = {
  getAll: async () => {
    return UserModel.find();
  },
  // getById: async (id) => {
  //   return UserModel.findById(id);
  // },

  getById: async (id) => {
    return UserModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(id),
        },
      },
    ]);
  },

  add: async (body) => {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(body.password, salt);
    body.password = passwordHash;
    return UserModel.create({ ...body });
  },

  delete: async (id) => {
    return UserModel.findByIdAndDelete(id);
  },

  login: async (body) => {
    const user = UserModel.findOne({ email: body.email });
    if (!user) {
      return "enter correct email";
    }
    const check = await bcrypt.compare(body.password, user.password);
    if (check) {
      const accessToken = jwt.sign({ user: user }, config.env.jwtSecret);
      return accessToken;
    } else {
      return "enter correct password";
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
