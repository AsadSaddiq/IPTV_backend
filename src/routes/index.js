import express from "express";
import userRoute from "./user.routes.js";
import genresRoute from "./genres.routes.js";

// const protectedRouter = express.Router();
const unProtectedRouter = express.Router();

unProtectedRouter.use("/user", userRoute);
unProtectedRouter.use("/genres", genresRoute);

export { unProtectedRouter };
