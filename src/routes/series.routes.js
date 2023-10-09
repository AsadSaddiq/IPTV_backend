import express from "express";
import { seriesController } from "../controllers/index.js";
import { validate, authenticate } from "../middleware/index.js";
import { SeriesSchema } from "../validations/index.js";
const route = express.Router();

route.post("/", validate(SeriesSchema.add), seriesController.add); //  => Create a new series
route.get("/", seriesController.getAll); //  => Get all series
route.get("/:id", seriesController.getOne); //  => Get a series by id
route.patch("/:id", validate(SeriesSchema.add), seriesController.update); //  => Update a series by id
route.delete("/:id", seriesController.delete); //  => Delete a series by id
route.get("/:id/season", seriesController.getSeasonSeries); //  => Get all seasons of a series by series id
route.get("/:id/seasons/episodes");

export default route;

// GET /series/:id/seasons/episodes - Get all episodes of a series by series id
