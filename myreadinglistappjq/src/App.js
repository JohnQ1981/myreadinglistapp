import "./App.css";
import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

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

  var id = Math.round(Math.random() * 1000);

  const [books, setBooks] = useState([]);
  const createBook = (title) => {
    //console.log("Need to add book with: ", title);
    const updatedBooks = [...books, { id: id, title: title }];
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
