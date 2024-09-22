import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent text-white px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="#">Apple®️</a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto`}
        >
          <ul className="md:flex md:space-x-6">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded-md hover:bg-gray-700"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded-md hover:bg-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded-md hover:bg-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded-md hover:bg-gray-700"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded-md hover:bg-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
