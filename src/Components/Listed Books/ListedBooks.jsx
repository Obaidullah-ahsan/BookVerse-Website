import { IoIosArrowDropdown } from "react-icons/io";
import Tabs from "../Tabs/Tabs";
import { Outlet } from "react-router-dom";
import { createContext, useState } from "react";

export const FilterContext = createContext();

const ListedBooks = () => {
  const [filter, setFilter] = useState();

  const handleFilter = (filter) => {
    if (filter === "default") {
      setFilter(filter);
    } else if (filter === "rating") {
      setFilter(filter);
    } else if (filter === "numberofpages") {
      setFilter(filter);
    } else if (filter === "published year") {
      setFilter(filter);
    }
  };

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
            Sort By <IoIosArrowDropdown size={20}></IoIosArrowDropdown>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => handleFilter("default")}>
              <a>Default</a>
            </li>
            <li onClick={() => handleFilter("rating")}>
              <a>Rating</a>
            </li>
            <li onClick={() => handleFilter("numberofpages")}>
              <a>Number of pages</a>
            </li>
            <li onClick={() => handleFilter("published year")}>
              <a>Published year</a>
            </li>
          </ul>
        </div>
      </div>
      <Tabs></Tabs>
      <FilterContext.Provider value={filter}>
        <Outlet></Outlet>
      </FilterContext.Provider>
    </div>
  );
};

export default ListedBooks;
