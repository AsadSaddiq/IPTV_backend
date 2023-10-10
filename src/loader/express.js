import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import { authenticate } from "../middleware/index.js";
import { unProtectedRouter } from "../routes/index.js";

async function expressLoader(app) {
  app.use(bodyParser.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(helmet());
  app.use(cors());

  // app.get("/", (req, res) => {
  //   res.send("response");
  // });
  app.use("/", unProtectedRouter);
  // app.use("/", authenticate, protectedRouter);
}

export default expressLoader;
