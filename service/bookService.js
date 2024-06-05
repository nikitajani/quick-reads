const bookServiceFactory = function (deps) {
  const bookService = {
    getBooks: async function (options) {
      // TODO
      // fetch all books
      const db = deps.db;
      const result = await db.getBooks();
      return result;
    },

    getBooksById: async function (id) {
      const db = deps.db;
      const result = await db.getBooksById(id);
      return result;
    },

    postBook: async function (bookDetails) {
      const db = deps.db;
      const result = await db.postBook(bookDetails);
      return result;
    },

    updateBook: async function (id, bookDetails) {
      const db = deps.db;
      const result = await db.updateBook(id, bookDetails);
      return result;
    },

    deleteBook: async function (id) {
      const db = deps.db;
      const result = await db.deleteBook(id);
      return result;
    },
  };

  return bookService;
};

export default bookServiceFactory;
