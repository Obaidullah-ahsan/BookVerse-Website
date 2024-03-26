import { useLoaderData, useParams } from "react-router-dom";
import Tag from "../Tag/Tag";

const Book = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const book = books.filter((book) => book.bookId === idInt);
  console.log(book);
  const {
    image,
    author,
    bookName,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book[0];
  return (
    <div className="flex gap-12 m-10">
      <div className="p-14 bg-base-300 rounded-2xl">
        <img className="h-[500px] rounded-md" src={image} alt="" />
      </div>
      <div className="flex-1 space-y-4">
        <h1 className="text-[40px]">{bookName}</h1>
        <p className="text-[18px] font-medium">By : {author}</p>
        <p className="border-y py-3 text-[18px] font-medium">{category}</p>
        <p>
          <span className="font-bold">Review : </span>
          {review}
        </p>
        <div className="flex gap-5 items-center border-b py-6">
          <span className="font-bold">Tag </span>
          <span className="flex gap-2">
            {tags.map((tag, idx) => (
              <Tag key={idx} tag={tag}></Tag>
            ))}
          </span>
        </div>
        <div className="flex gap-14">
          <div className="flex flex-col gap-3">
            <p>Number of Pages : </p>
            <p>Publisher : </p>
            <p>Year of Publishing : </p>
            <p>Rating : </p>
          </div>
          <div className="flex font-semibold flex-col gap-3">
            <p>{totalPages}</p>
            <p>{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p>{rating}</p>
          </div>
        </div>
        <div className="flex gap-4">
            <button className="btn border-[#1313134D]">Read</button>
            <button className="btn bg-[#50B1C9] text-white">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
