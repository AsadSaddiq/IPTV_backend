import { StreamModel } from "../models/index.js";

export const streamServices = {
  add: async (data) => {
    return StreamModel.create(data);
  },
  getAll: async () => {
    return StreamModel.find();
  },
  getOne: async (id) => {
    return StreamModel.findById(id);
  },
  update: async (id, data) => {
    return StreamModel.findByIdAndUpdate(id, data, { new: true });
  },
  delete: async (id) => {
    return StreamModel.findByIdAndDelete(id);
  },
};
