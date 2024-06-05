import express from "express";

const wishlistRouter = express.Router();

wishlistRouter.get("/", function (req, res) {
  // TODO
  // Implement this route

  res.send(`${req.originalUrl}`);
});

wishlistRouter.post("/", function (req, res) {
  // TODO
  // Implement this route

  res.send(`${req.originalUrl}`);
});

wishlistRouter.delete("/:bookId", function (req, res) {
  // TODO
  // Implement this route

  res.send(`${req.originalUrl}`);
});

export default wishlistRouter;
