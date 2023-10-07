import { SeasonModel } from "../models/index.js";

export const seasonServices = {
  add: async (data) => {
    return SeasonModel.create(data);
  },
  getAll: async () => {
    return SeasonModel.find();
  },
  getOne: async (id) => {
    return SeasonModel.findById(id);
  },
  update: async (id, data) => {
    return SeasonModel.findByIdAndUpdate(id, data, { new: true });
  },
  delete: async (id) => {
    return SeasonModel.findByIdAndDelete(id);
  },
};
