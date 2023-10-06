import { UserModel } from "../models/index.js";

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

  login: async (body) => {
    try {
      return UserModel.findOne({ email: body.email });
    } catch (error) {
      return "no user exist";
    }
  },
};
