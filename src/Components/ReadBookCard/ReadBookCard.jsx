import { Link } from "react-router-dom";
import Tag from "../Tag/Tag";
import { MdDateRange } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";

const ReadBookCard = ({ book }) => {
  const {
    bookId,
    tags,
    author,
    category,
    rating,
    bookName,
    image,
    yearOfPublishing,
    publisher,
    totalPages,
  } = book;
  return (
    <div className="card flex flex-row py-4 bg-base-100 shadow-xl border">
      <div className="bg-[#F3F3F3] mx-4 rounded-2xl py-8 px-14">
        <img className="max-h-52 rounded-lg" src={image} alt="Shoes" />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-3">{bookName}</h2>
        <p className="my-4">By : {author}</p>
        <div className="flex gap-4 items-center my-3">
          <span className="font-bold">Tag: </span>
          {tags.map((tag, idx) => (
            <Tag key={idx} tag={tag}></Tag>
          ))}
          <span className="flex items-center gap-2">
            <MdDateRange></MdDateRange>Year of Publishing: {yearOfPublishing}
          </span>
        </div>
        <div className="flex gap-6 my-4">
          <p className="flex gap-2 items-center"><IoPersonOutline></IoPersonOutline>Publisher : {publisher}</p>
          <p className="flex gap-2 items-center"><RiPagesLine></RiPagesLine>Page : {totalPages}</p>
        </div>
        <div className="flex gap-4 items-center border-t pt-4">
          <p className="bg-[#328EFF26] px-5 py-[6px] rounded-full text-[#328EFF]">
            Category : {category}
          </p>
          <p className="bg-[#FFAC3326] px-5 py-[6px] rounded-full text-[#FFAC33]">
            Rating : {rating}
          </p>
          <Link to={`/blog/${bookId}`}>
            <button className="btn bg-[#23BE0A] text-white font-semibold rounded-full min-h-10 h-10">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadBookCard;
