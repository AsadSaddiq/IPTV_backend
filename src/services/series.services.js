import { SeriesModel, SeasonModel } from "../models/index.js";

export const seriesServices = {
  add: async (data) => {
    return SeriesModel.create(data);
  },
  getAll: async () => {
    return SeriesModel.find();
  },
  getOne: async (id) => {
    return SeriesModel.findById(id);
  },
  update: async (id, data) => {
    return SeriesModel.findByIdAndUpdate(id, data, { new: true });
  },
  delete: async (id) => {
    return SeriesModel.findByIdAndDelete(id);
  },
  getSeasonSeries: async (id) => {
    return SeasonModel.find({ series_id: id });
  },
};
