import { useEffect } from "react";
import DigiFlash from "./components/sections/DigiFlash";
import Footer from "./components/sections/Footer";
import HeroSection from "./components/sections/HeroSection";
import Header from "./components/sections/Header";

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="absolute">
      <Header />
      <div className="font-display dark:bg-black dark:text-white ">
        <div className="relative z-10">
          <HeroSection />
        </div>
        <div className="py-5 relative z-20 px-4 md:px-[52px] flex flex-col gap-6 md:gap-[100px] bg-[#0c0c0c]">
          <DigiFlash />
          <Footer />
        </div>
      </div>
    </div>
  );
}
