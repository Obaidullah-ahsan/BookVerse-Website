import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("../../../public/jsondata.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mx-auto mt-20 mb-9">
        Books
      </h1>
      <div className="grid grid-cols-3 gap-6 mb-10">
        {books.map((book) => (
          <BookCard key={book.bookId} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default Books;
