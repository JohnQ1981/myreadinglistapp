import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/books";

function BookList({ books, onDelete, onEdit }) {
  const {count, incrementCount} = useContext(BooksContext);

  const renderedBooks = books.map((book) => {
    return (
      <BookShow onDelete={onDelete} onEdit={onEdit} key={book.id} book={book} />
    );
  });

  return (
    <div className="book-list">
      <h3>{count}<button onClick ={incrementCount}>Click Me</button></h3>
      {renderedBooks}
    </div>
  );
}
export default BookList;
