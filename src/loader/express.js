import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";

async function expressLoader(app) {
  app.use(bodyParser.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(helmet());
  app.use(cors());

  app.get("/", (req, res) => {
    res.send("response from server 😎");
  });
}

export default expressLoader;
