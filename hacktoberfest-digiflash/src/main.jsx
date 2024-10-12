import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Legacy from "./components/sections/Legacy.jsx";
import Hacktoberfest from "./components/sections/Hacktoberfest.jsx";
import About from "./components/sections/About.jsx";
import Home from "./components/sections/Home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="legacy" element={<Legacy />} />
          <Route path="hacktoberfest" element={<Hacktoberfest />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
