import React from "react";


// things to consider for the navbar taken from another website. 
/*
tabs in list 
about-find location-shop-services-community outreach-contact us



*/
const Navbar = () => {
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-white">Chester Clippers</h1>
          </div>
          <div className="flex">
            <div className="hidden sm:block sm:ml-6">
              {/* make sure to add a anchor tag link to each when nearing the end of this project */}
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="text-white hover:text-gray-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300">
                    Location
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="-mr-2 flex sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* mobile menu below.  */}
      <div className="sm:hidden" id="mobile-menu">
        <ul className="px-2 pt-2 pb-3 space-y-1">
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
