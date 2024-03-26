import { IoIosArrowDropdown } from "react-icons/io";
import Tabs from "../Tabs/Tabs";

const ListedBooks = () => {
  return (
    <div>
      <h2 className="text-3xl text-center mx-auto font-bold py-6 mt-3 rounded-2xl bg-[#1313130D]">
        Books
      </h2>
      <div className="flex justify-center mt-3 mb-8">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 px-6 bg-[#23BE0A] text-white font-bold"
          >
            Sort By <IoIosArrowDropdown></IoIosArrowDropdown>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of pages</a>
            </li>
            <li>
              <a>Publisher year</a>
            </li>
          </ul>
        </div>
      </div>
      <Tabs></Tabs>
    </div>
  );
};

export default ListedBooks;
