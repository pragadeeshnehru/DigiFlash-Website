import { useEffect } from "react";
import Hacktoberfest from "./components/sections/Hacktoberfest";


export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <Hacktoberfest/>
  );
}
