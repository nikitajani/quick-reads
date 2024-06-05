import express from "express";

import booksRouter from "./routes/books.js";
import remarksRouter from "./routes/remarks.js";
import usersRouter from "./routes/users.js";
import wishlistRouter from "./routes/wishlist.js";

const app = express();

app.get("/", (req, res) => {
  console.log("Server is listening at 3000");
});

app.use("/books", booksRouter);
app.use("/remarks", remarksRouter);
app.use("/users", usersRouter);
app.use("/wishlist", wishlistRouter);

app.listen(3000);
