import { MacbookScroll } from "../ui/macbook-scroll";
import digiLogo from "../../assets/linear.jpg";

export default function HeroSection() {
  return (
    <div className=" bg-[#07311d] inner-shadow-div">
      <MacbookScroll
        title={
          <h1 className="text-6xl bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 text-transparent bg-clip-text">
            DigiFlash CSE
          </h1>
        }
        src={digiLogo}
      />
    </div>
  );
}
