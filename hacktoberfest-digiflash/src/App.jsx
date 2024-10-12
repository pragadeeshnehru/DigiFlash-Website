import "./App.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <header className="flex flex-wrap justify-between items-center py-4 px-4 black">
        <div className="w-full md:w-auto text-2xl font-bold text-white text-center md:text-left">
          DigiFlash
        </div>
        <nav className="w-full md:w-auto mt-4 md:mt-0">
          <ul className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 items-center">
            <li>
              <Link to="/" className="text-white hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/legacy" className="text-white hover:text-gray-400">
                Legacy
              </Link>
            </li>
            <li>
              <Link
                to="/hacktoberfest"
                className="text-white hover:text-gray-400"
              >
                Hacktoberfest 24
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gray-400">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="px-4">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
