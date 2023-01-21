import "./App.css";
import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from 'axios';

function App() {
  const editBookById =(id, newTitle)=>{
    const updatedBooks = books.map((book)=>{
      if(book.id ===id){
        return{...book, title:newTitle };
        }
        return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updateBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updateBooks);
  };

  //var id = Math.round(Math.random() * 1000);

  const [books, setBooks] = useState([]);
  const createBook = async (title) => {
    const response =await axios.post('http://localhost:3003/books',{
      title,
    });
    //console.log(response);
    //console.log("Need to add book with: ", title);
    //const updatedBooks = [...books, { id: id, title: title }];
    const updatedBooks = [...books, response.data,];
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
