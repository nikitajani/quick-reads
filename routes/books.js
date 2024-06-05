import express from "express";

import bookServiceFactory from "../service/bookService.js";

function booksRouterFactory(deps) {
  const bookService = bookServiceFactory(deps);

  const booksRouter = express.Router();

  booksRouter.get("/", async function (req, res) {
    const books = await bookService.getBooks();

    if (!books || !books.length) {
      res.status(200).json({
        body: {
          booksCount: 0,
          books: [],
        },
      });
      return;
    }

    res.json({
      body: {
        books,
        booksCount: books.length,
      },
    });
  });

  booksRouter.post("/", async function (req, res) {
    const book = await bookService.postBook(req.body);

    res.status(200).send(book);
  });

  booksRouter.put("/:id", async function (req, res) {
    const book = await bookService.updateBook(req.params.id, req.body);

    res.send(book);
  });

  booksRouter.get("/:id", async function (req, res) {
    const book = await bookService.getBooksById(req.params.id);

    res.status(200).send(book);
  });

  booksRouter.delete("/:id", async function (req, res) {
    const book = await bookService.deleteBook(req.params.id);
    res.send(book);
  });

  return booksRouter;
}

export default booksRouterFactory;
