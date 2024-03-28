import { useContext, useEffect, useState } from "react";
import ReadBookCard from "../ReadBookCard/ReadBookCard";
import { getStoredReadBooks } from "../LocalStorage/localstorage";
import { useLoaderData } from "react-router-dom";
import { FilterContext } from "../Listed Books/ListedBooks";

const ReadBooks = () => {
  const books = useLoaderData();
  const [readBook, setReadBook] = useState([]);
  const [displayReadBook, setDisplayReadBook] = useState([]);
  const filter = useContext(FilterContext);

  useEffect(() => {
    const sortBooksByDescending = (books, typeOfDescending) => {
      return books.sort((a, b) => b[typeOfDescending] - a[typeOfDescending]);
    };
    const handleBookFilter = (filter) => {
      if (filter === "default") {
        const sortedBooks = sortBooksByDescending([...readBook]);
        setDisplayReadBook(sortedBooks);
      } else if (filter === "rating") {
        const sortedBooks = sortBooksByDescending([...readBook], "rating");
        setDisplayReadBook(sortedBooks);
      } else if (filter === "numberofpages") {
        const sortedBooks = sortBooksByDescending([...readBook], "totalPages");
        setDisplayReadBook(sortedBooks);
      }
      if (filter === "published year") {
        const sortedBooks = sortBooksByDescending(
          [...readBook],
          "yearOfPublishing"
        );
        setDisplayReadBook(sortedBooks);
      }
    };
    handleBookFilter(filter);
  }, [filter]);

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
      setDisplayReadBook(bookread);
    }
  }, [books]);

  return (
    <div className="flex flex-col gap-6 my-2 mx-3 md:my-8">
      {displayReadBook.map((book) => (
        <ReadBookCard key={book.bookId} book={book}></ReadBookCard>
      ))}
    </div>
  );
};

export default ReadBooks;
