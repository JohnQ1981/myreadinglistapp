import "./App.css";
import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks =async ()=>{
    const allBooks = await axios.get('http://localhost:3003/books');
    setBooks(allBooks.data);
  }

  useEffect(()=>{
    fetchBooks();
  }, []);

  const editBookById = async(id, newTitle) => {
    const editBook=await axios.put(`http://localhost:3003/books/${id}`,{
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


  const deleteBookById = async(id) => {
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

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />

      <BookCreate onCreate={createBook} />

      {/* <div>{books.length}{" "}{'Random Rumber is: '}{" "}{id}</div> */}
    </div>
  );
}

export default App;
