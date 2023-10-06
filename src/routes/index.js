import express from "express";

import userRoute from "./user.routes.js";

// const protectedRouter = express.Router();
const unProtectedRouter = express.Router();

unProtectedRouter.use("/user", userRoute);
// unProtectedRouter.use("/user", userRoute);

export { unProtectedRouter };
