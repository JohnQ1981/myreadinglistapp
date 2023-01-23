import { createContext, useState } from "react";
import axios from "axios";
const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);
  
  const fetchBooks = async () => {
    const allBooks = await axios.get("http://localhost:3003/books");
    setBooks(allBooks.data);
  };

  const editBookById = async (id, newTitle) => {
    const editBook = await axios.put(`http://localhost:3003/books/${id}`, {
      title: newTitle,
    });
    console.log(editBook);

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...editBook.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3003/books/${id}`);
    const updateBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updateBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3003/books", {
      title,
    });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const valueToShare = {
    books: books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks,
  };
  return (
    <BooksContext.Provider value={{ valueToShare }}>
      {children}
    </BooksContext.Provider>
  );
}
export { Provider };
export default BooksContext;
