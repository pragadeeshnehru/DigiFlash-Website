import { MacbookScroll } from "../ui/macbook-scroll";
import digiLogo from "../../assets/linear.jpg";

export default function HeroSection() {
  return (
    <div className="bg-[url('/bg.jpg')]  bg-cover bg-center inner-shadow-div">
      <MacbookScroll
        title={
          <h1 className="text-6xl bg-gradient-to-r from-[#19c035] via-[#ff00f2] to-[#ff8800] text-transparent bg-clip-text py-1">
            DigiFlash CSE
          </h1>
        }
        src={digiLogo}
      />
    </div>
  );
}
