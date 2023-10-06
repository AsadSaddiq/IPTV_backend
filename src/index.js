import express from "express";

function startServer() {
  const port = 3000;
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.get("/", (req, res) => {
    res.send("response from server");
  });

  app.listen(port, () => {
    console.log(`app is running on http://localhost:${port} 😎`);
  });
}
startServer();
