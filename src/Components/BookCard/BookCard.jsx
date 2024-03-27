import { FaRegStar } from "react-icons/fa";
import Tag from "../Tag/Tag";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { bookId, tags, author, category, rating, bookName, image } = book;
  return (
    <Link to={`/blog/${bookId}`}>
      <div className="card py-4 bg-base-100 shadow-xl border">
        <figure className="bg-[#F3F3F3] mx-4 rounded-2xl py-4">
          <img className="max-h-44" src={image} alt="Shoes" />
        </figure>
        <div className="flex gap-4 pl-7 pt-3">
          {tags.map((tag, idx) => (
            <Tag key={idx} tag={tag}></Tag>
          ))}
        </div>
        <div className="card-body pt-4">
          <h2 className="card-title font-[playfair-display]">{bookName}</h2>
          <p>By : {author}</p>
          <div className="flex justify-around items-center border-t-2 border-dashed mt-4 pt-4">
            <p>{category}</p>
            <p className="flex gap-2 items-center justify-end">
              {rating}
              <FaRegStar></FaRegStar>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
