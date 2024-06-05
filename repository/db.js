import axios from "axios";

const url = "http://192.168.1.6:3000";

export default {
  async getBooks() {
    const result = await axios.get(`${url}/books`);
    return result.data;
  },

  async getBooksById(id) {
    const result = await axios.get(`${url}/books/${id}`);
    return result.data;
  },

  async postBook(bookDetails) {
    const result = await axios.post(`${url}/books`, bookDetails);
    return result.data;
  },

  async updateBook(id, bookDetails) {
    const result = await axios.put(`${url}/books/${id}`, bookDetails);
    return result.data;
  },

  async deleteBook(id) {
    const result = await axios.delete(`${url}/books/${id}`);
    return result.data;
  },
};
