import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="font-display w-full z-50 flex flex-wrap justify-between items-center py-4 px-6 md:py-4 md:px-8 transition-all duration-300 bg-transparent text-white">
      <div className="flex items-center space-x-4">
        <img
          className="w-8 sm:w-12 md:w-16 lg:w-20"
          src="/logo.png"
          alt="Logo"
        />
        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r bg-clip-text from-[#ffdd1d] to-[#02c222] text-transparent">
          DIGIFLASH
        </div>
      </div>

      <button
        onClick={toggleMenu}
        className="md:hidden z-30 block focus:outline-none ml-auto"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Full-screen overlay and menu for Mobile */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-10 transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden"
        } md:hidden flex flex-col justify-center items-center`}
      >
        <nav className="text-center">
          <ul className="flex flex-col space-y-6">
            <li>
              <Link
                to="/"
                className="text-2xl text-white hover:text-gray-400 transition"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-2xl text-white hover:text-gray-400 transition"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex md:items-center md:w-auto space-x-10 ml-auto">
        <ul className="flex space-x-10 items-center">
          <li>
            <Link
              to="/"
              className="text-lg md:text-xl hover:text-gray-600 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-lg md:text-xl hover:text-gray-600 transition"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
