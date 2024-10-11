import reactLogo from "./assets/react.svg";
import "./App.css";
import { MacbookScroll } from "./components/ui/macbook-scroll";
import { useEffect } from "react";
import Button from "./components/ui/glow-button";
import Header from "./components/ui/header";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  },[]);
  
  return (
    <div className="overflow-visible dark:bg-black dark:text-white">
      <Header />
      <MacbookScroll
        title={<h1 className="text-6xl">Hacktoberfest 2024</h1>}
        src={reactLogo}
        showGradient={false}
      />
      <Button>Hrllo</Button>

    </div>
  );
}

export default App;
