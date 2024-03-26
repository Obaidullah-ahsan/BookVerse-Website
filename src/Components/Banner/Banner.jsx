import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero md:min-h-[500px] rounded-2xl bg-base-200">
      <div className="hero-content gap-6 md:gap-20">
        <div className="max-w-xl md:max-w-lg">
          <h1 className="text-3xl md:text-5xl font-bold mb-5 md:mb-12">
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
            className="max-h-[500px] md:py-12"
            src={`https://i.ibb.co/s2LTs0w/dating-book.png`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
