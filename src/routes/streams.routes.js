import express from "express";
import { streamController } from "../controllers/index.js";
import { validate } from "../middleware/index.js";
import { StreamSchema } from "../validations/index.js";
const route = express.Router();

route.post("/", validate(StreamSchema.add), streamController.add); // => Create a new stream
route.get("/", streamController.getAll); // => Get all streams
route.get("/:id", streamController.getOne); // => Get a stream by id
route.patch("/:id", streamController.update); // => Update a stream by id
route.delete("/:id", streamController.delete); // => Delete a stream by

export default route;

// GET /streams/:id/episode - Get the episode of a stream by stream id
// GET /streams/:id/user - Get the user of a stream by stream id
// GET /streams/:id/episode/season - Get the season of an episode of a stream by stream id
// GET /streams/:id/episode/season/series - Get the series of a season of an episode of a stream by stream id
// GET /streams/:id/episode/season/series/genre - Get the genre of a series of a season of an episode of a stream by stream id
