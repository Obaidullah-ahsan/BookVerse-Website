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
  }
  else{
    toast.error("Already Exist")
  }
};

export { getStoredReadBooks, saveReadBooks };
