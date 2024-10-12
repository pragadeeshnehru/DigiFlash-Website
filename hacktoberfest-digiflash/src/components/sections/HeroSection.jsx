import { MacbookScroll } from "../ui/macbook-scroll";
import digiLogo from "../../assets/linear.jpg";

export default function HeroSection() {
  return (
    <div className="">
      <MacbookScroll
        title={<h1 className="text-6xl">DigiFlash CSE</h1>}
        src={digiLogo}
        showGradient={false}
      />
    </div>
  );
}
