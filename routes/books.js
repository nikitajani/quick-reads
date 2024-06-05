import express from "express";

const booksRouter = express.Router();

booksRouter.get("/", function (req, res) {
  res.send(`${req.originalUrl}`);
});

booksRouter.post("/", function (req, res) {
  res.send(`${req.originalUrl}`);
});

booksRouter.put("/:id", function (req, res) {
  res.send(`${req.originalUrl}`);
});

booksRouter.get("/:id", function (req, res) {
  res.send(`${req.originalUrl}`);
});

booksRouter.delete("/:id", function (req, res) {
  res.send(`${req.originalUrl}`);
});

export default booksRouter;
