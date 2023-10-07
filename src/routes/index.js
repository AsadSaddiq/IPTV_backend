import express from "express";
import userRoute from "./user.routes.js";
import genresRoute from "./genres.routes.js";
import seriesRoute from "./series.routes.js";
import seasonRoute from "./season.routes.js";

// const protectedRouter = express.Router();
const unProtectedRouter = express.Router();

unProtectedRouter.use("/user", userRoute);
unProtectedRouter.use("/genres", genresRoute);
unProtectedRouter.use("/series", seriesRoute);
unProtectedRouter.use("/seasons", seasonRoute);

export { unProtectedRouter };
