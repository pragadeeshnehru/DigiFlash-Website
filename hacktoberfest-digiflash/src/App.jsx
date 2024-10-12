import "./App.css";
import { useEffect } from "react";
import Header from "./components/ui/header";
import HeroSection from "./components/sections/HeroSection";
import DigiFlash from "./components/sections/DigiFlash";
import Footer from "./components/sections/Footer";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="font-display dark:bg-black dark:text-white ">
      <Header />
      <div className="relative z-10">
        <HeroSection/>
      </div>
      <div className="py-5 relative z-20 px-4 md:px-[52px] flex flex-col gap-8 md:gap-[100px] bg-[#0c0c0c]">
        <DigiFlash />
      </div>
      <Footer />
    </div>
  );
}

export default App;
