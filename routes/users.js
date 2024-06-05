import express from "express";

const usersRouter = express.Router();

usersRouter.post("/login", function (req, res) {
  res.send(`${req.originalUrl}`);
});

usersRouter.post("/signUp", function (req, res) {
  res.send(`${req.originalUrl}`);
});

usersRouter.get("/logout", function (req, res) {
  res.send(`${req.originalUrl}`);
});

export default usersRouter;
