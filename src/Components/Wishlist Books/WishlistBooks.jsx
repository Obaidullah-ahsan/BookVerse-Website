import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishlistBooks } from "../LocalStorage/localstorage";
import ReadBookCard from "../ReadBookCard/ReadBookCard";
import { FilterContext } from "../Listed Books/ListedBooks";

const WishlistBooks = () => {
  const books = useLoaderData();
  const [wishlistBooks, setWishlistBooks] = useState([]);
  const [displaywishlistBooks, setDisplayWishlistBooks] = useState([]);
  const filter = useContext(FilterContext);
  


  useEffect(() => {
    const storedWishlistBooksIds = getStoredWishlistBooks();
    if (books.length > 0) {
      const wishlist = [];
      for (const id of storedWishlistBooksIds) {
        const book = books.find((book) => book.bookId === id);
        if (book) {
          wishlist.push(book);
        }
      }
      setWishlistBooks(wishlist);
      setDisplayWishlistBooks(wishlist);
    }
  }, [books]);

  return (
    <div className="flex flex-col gap-6 my-2 mx-3 md:my-8">
      {displaywishlistBooks.map((book) => (
        <ReadBookCard key={book.bookId} book={book}></ReadBookCard>
      ))}
    </div>
  );
};

export default WishlistBooks;
