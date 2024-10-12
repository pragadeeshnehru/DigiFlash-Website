import { useEffect } from "react";
import DigiFlash from "./DigiFlash";
import Footer from "./Footer";
import HeroSection from "./HeroSection";

export default function Home() {
    useEffect(() => {
        document.documentElement.classList.add("dark");
    },[]);

  return (
    <div className="font-display dark:bg-black dark:text-white ">
      <div className="relative z-10">
        <HeroSection />
      </div>
      <div className="py-5 relative z-20 px-4 md:px-[52px] flex flex-col gap-6 md:gap-[100px] bg-[#0c0c0c]">
        <DigiFlash />
        <Footer />
      </div>
      
    </div>
  );
}
