import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Legacy from "./components/sections/Legacy.jsx";
import Hacktoberfest from "./components/sections/Hacktoberfest.jsx";
import About from "./components/sections/About.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<App />} /> */}
        {/* <Route path="/legacy" element={<Legacy />} /> */}
        <Route index element={<Hacktoberfest />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
