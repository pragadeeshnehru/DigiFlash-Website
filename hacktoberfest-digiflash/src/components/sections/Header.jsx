import { Link } from "react-router-dom";

export default function Header() {
  return (
      <header className="font-display w-full z-20 flex flex-wrap justify-between items-center py-6 px-6 md:py-8 md:px-12 bg-[rgb(0,0,0)] text-white">
        <div className="w-full md:w-auto text-3xl md:text-4xl font-bold text-center md:text-left text-[#ffba60]">
          DigiFlash
        </div>
        <nav className="w-full md:w-auto mt-6 md:mt-0">
          <ul className="flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0 items-center">
            {/* <li>
              <Link
                to="/"
                className="text-lg md:text-xl hover:text-gray-600 transition"
              >
                Home
              </Link>
            </li> */}
            {/* <li>
              <Link
                to="/legacy"
                className="text-lg md:text-xl hover:text-gray-600 transition"
              >
                Legacy
              </Link>
            </li> */}
            {/* <li>
              <Link
                to="/hacktoberfest"
                className="text-lg md:text-xl hover:text-gray-600 transition"
              >
                Hacktoberfest 24
              </Link>
            </li> */}
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
}
