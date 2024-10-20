import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed font-display w-full z-20 flex flex-wrap justify-between items-center py-1 px-6 md:py-4 md:px-8 transition-all duration-300 ${
        scrollY > 0 ? "bg-black" : "bg-transparent"
      } text-white`}
    >
      {/* Logo on the left */}
      <div className="text-3xl md:text-4xl font-bold text-center md:text-left bg-gradient-to-r bg-clip-text from-[#ffaa2b] to-[#02c222] text-transparent">
        DigiFlash
      </div>

      {/* Hamburger Button aligned right */}
      <button
        onClick={toggleMenu}
        className="md:hidden z-20 block focus:outline-none ml-auto"
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

      {/* Navigation */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } w-full md:w-auto mt-6 md:mt-0 z-20 md:flex md:items-center`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0 items-center">
          <li>
            <Link
              to="/about"
              className="text-lg md:text-xl hover:text-gray-600 transition"
            >
              About
            </Link>
          </li>
          {/* Add more items as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
