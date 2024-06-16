import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <nav className=" mb-8 fixed w-full  z-50 top-0 bg-[#97BC62FF] ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
          <div className="flex items-center">
            <Link to="/" className="my-3 text-3xl font-semibold text=[#2C5F2D]">
              Daily
            </Link>
            <Link
              to="/"
              className="my-3 text-3xl font-semibold text-white"
            >
              Glimpse
            </Link>
          </div>


          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer"
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"


            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto focus:text-[#97BC62FF]" id="navbar-default ">
            <ul className={`${isOpen?"hidden":"block"} font-medium flex flex-col py-2 px-4 md:p-0 mt-2 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 focus:text-[#97BC62FF]`}>
              <li>
                <Link
                  to="/"
                  className=" py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0  md:hover:text-[#96ae75] md:hover:text-[3.2vh] text-lg focus:text-white focus:font-bold focus:underline focus:underline-offset-8 focus:decoration-4 focus:text-[#97BC62FF] "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/business"
                  className=" py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0  md:hover:text-[#96ae75] md:hover:text-[3.2vh] text-lg focus:text-white focus:font-bold focus:underline focus:underline-offset-8 focus:decoration-4 focus:text-[#97BC62FF]"
                   aria-current="page"
                >
                  Business
                </Link>
              </li>
              <li>
                <Link
                  to="/entertainment"
                  className=" py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0  md:hover:text-[#96ae75] md:hover:text-[3.2vh] text-lg focus:text-white focus:font-bold focus:underline focus:underline-offset-8 focus:decoration-4"
                   aria-current="page"
                >
                  Entertainment
                </Link>
              </li>
              <li>
                <Link
                  to="/health"
                  className=" py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 md:hover:text-[#96ae75] md:hover:text-[3.2vh] text-lg focus:text-white focus:font-bold focus:underline focus:underline-offset-8 focus:decoration-4"
                   aria-current="page"
                >
                  Health
                </Link>
              </li>
              <li>
                <Link
                  to="/science"
                  className=" py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0  md:hover:text-[#96ae75] md:hover:text-[3.2vh] text-lg focus:text-white focus:font-bold focus:underline focus:underline-offset-8 focus:decoration-4"
                   aria-current="page"
                >
                  Science
                </Link>
              </li>
              <li>
                <Link
                  to="/sports"
                  className=" py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0  md:hover:text-[#96ae75] md:hover:text-[3.2vh] text-lg focus:text-white focus:font-bold focus:underline focus:underline-offset-8 focus:decoration-4"
                   aria-current="page"
                >
                  Sports
                </Link>
              </li>
              <li>
                <Link
                  to="/technology"
                  className=" py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0  md:hover:text-[#96ae75] md:hover:text-[3.2vh] text-lg focus:text-white focus:font-bold focus:underline focus:underline-offset-8 focus:decoration-4"
                   aria-current="page"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className=" py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0  md:hover:text-[#96ae75] md:hover:text-[3.2vh] text-lg focus:text-white focus:font-bold focus:underline focus:underline-offset-8 focus:decoration-4"
                   aria-current="page"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

