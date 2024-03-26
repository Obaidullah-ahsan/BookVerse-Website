import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero min-h-[500px] rounded-2xl bg-base-200">
      <div className="hero-content gap-20">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold mb-12">
            Books to freshen up your bookshelf
          </h1>
          <Link to="/listedbooks">
            <button className="btn bg-[#23BE0A] text-white font-bold">
              View The List
            </button>
          </Link>
        </div>
        <div>
          <img
            className="max-h-[500px] py-12"
            src={`https://i.ibb.co/s2LTs0w/dating-book.png`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;