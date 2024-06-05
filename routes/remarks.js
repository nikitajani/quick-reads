import express from "express";

const remarksRouter = express.Router();

remarksRouter.get("/", function (req, res) {
  // TODO
  // Implement this route

  res.send(`${req.originalUrl}`);
});

remarksRouter.post("/", function (req, res) {
  res.send(`${req.originalUrl}`);
});

remarksRouter.put("/:id", function (req, res) {
  res.send(`${req.originalUrl}`);
});

remarksRouter.delete("/:id", function (req, res) {
  res.send(`${req.originalUrl}`);
});

export default remarksRouter;
