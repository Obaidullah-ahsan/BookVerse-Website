import { Link, NavLink} from "react-router-dom";

const Navbar = () => {
  const lists = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/listedbooks">Listed Books</NavLink>
      </li>
      <li>
        <NavLink to="/pagesread">Pages to Read</NavLink>
      </li>
      <li>
        <NavLink to="/helpcenter">Help Center</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content font-semibold mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {lists}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-bold">Book Verse</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold gap-3">
          {lists}
        </ul>
      </div>
      <div className="navbar-end flex gap-4">
        <a className="btn bg-[#23BE0A] text-white font-semibold">Sign In</a>
        <a className="btn bg-[#59C6D2] text-white font-semibold">Sign up</a>
      </div>
    </div>
  );
};

export default Navbar;
