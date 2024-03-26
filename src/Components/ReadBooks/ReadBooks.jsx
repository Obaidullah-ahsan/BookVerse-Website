import { useEffect, useState } from "react";
import ReadBookCard from "../ReadBookCard/ReadBookCard";
import { getStoredReadBooks } from "../LocalStorage/localstorage";
import { useLoaderData } from "react-router-dom";


const ReadBooks = () => {
  const books = useLoaderData();
  const [readBook, setReadBook] = useState([]);
  useEffect(() => {
    const storedReadBooksId = getStoredReadBooks();
    if (books.length > 0) {
      const bookread = [];
      for (const id of storedReadBooksId) {
        const book = books.find((book) => book.bookId === id);
        if (book) {
          bookread.push(book);
        }
      }
      setReadBook(bookread);
    }
  }, [books]);

  return (
    <div className="flex flex-col gap-6 my-8">
      {readBook.map((book) => (
        <ReadBookCard key={book.bookId} book={book}></ReadBookCard>
      ))}
    </div>
  );
};

export default ReadBooks;
