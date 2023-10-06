import express from "express";
import { UserValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";
import { UserController } from "../controllers/index.js";

const router = express.Router();

router.get("/", UserController.getAll); //get all user
router.post("/registration", UserController.add); //register a user
router.post("/login", UserController.loginUser); //login
router.get("/:id", UserController.getById); //get user by id

router.get("/:id/streams", UserController.add); //get all streams of a user by using id
router.get("/:id/streams/:streamId", UserController.add); //get stream of a use by using id and stream id
router.patch("/:id", UserController.add); //update user by id
router.delete("/:id", UserController.add); //delete user by id
router.delete("/:id/stream/:streamId", UserController.add); //delete stream of a user by using id and stream id

// router.get("/", authenticate, UserController.getAll);
// router.post("/", validate(UserValidationSchema.add), UserController.add);

export default router;
