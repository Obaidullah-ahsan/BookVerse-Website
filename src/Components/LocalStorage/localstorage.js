const getStoredReadBooks = () => {
  const storedReadBooks = localStorage.getItem("read-books");
  if (storedReadBooks) {
    return JSON.parse(storedReadBooks);
  }
  return [];
};

const saveReadBooks = (id, toast) => {
  const storedReadBooks = getStoredReadBooks();
  const isExist = storedReadBooks.find((bookId) => bookId === id);
  if (!isExist) {
    storedReadBooks.push(id);
    localStorage.setItem("read-books", JSON.stringify(storedReadBooks));
    toast("Add to Read");
  } else {
    toast.error("Already Exist");
  }
};

const getStoredWishlistBooks = () => {
  const storedReadBooks = localStorage.getItem("wishlist-books");
  if (storedReadBooks) {
    return JSON.parse(storedReadBooks);
  }
  return [];
};

const saveWishlistBooks = (id,toast) => {
  const storedWishlistBooks = getStoredWishlistBooks();
  const storedReadBooks = getStoredReadBooks();
  const isExist = storedReadBooks.find((bookId) => bookId === id);
  const isExistWish = storedWishlistBooks.find((bookId) => bookId === id);
  if (!isExist && !isExistWish) {
    storedWishlistBooks.push(id);
    localStorage.setItem("wishlist-books", JSON.stringify(storedWishlistBooks));
    toast("Added Wishlist")
  }
  else{
    toast.error("Already Read")
  }
};

export { getStoredReadBooks, saveReadBooks , getStoredWishlistBooks , saveWishlistBooks};
