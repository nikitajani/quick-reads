import express from "express";

// repositories
import db from "./repository/db.js";

import booksRouterFactory from "./routes/books.js";
import remarksRouter from "./routes/remarks.js";
import usersRouter from "./routes/users.js";
import wishlistRouter from "./routes/wishlist.js";

const app = express();
app.use(express.json());

const deps = {};
deps.db = db;

app.get("/", (req, res) => {
  console.log("Server is listening at 3000");
});

app.use("/books", booksRouterFactory(deps));
app.use("/remarks", remarksRouter);
app.use("/users", usersRouter);
app.use("/wishlist", wishlistRouter);

app.listen(3000, () => {
  console.log(`App listening on PORT-3000`);
});
