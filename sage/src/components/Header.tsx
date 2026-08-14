import Image from "next/image";
import { Orbitron } from "next/font/google";

const orbit = Orbitron({
  weight: ["800"], // Specify the weights you need
  subsets: ["latin"], // Specify subsets
  display: "swap",
});

const Header = () => {
  return (
    <header>
      <Image src="/images/chess-background.webp" alt="Sister Sage chess background image" width={1376} height={768} className="w-full h-auto" />
      <h1 className={`${orbit.className} text-[#3d0e87] typing`}>The Sister Sage Files</h1>
    </header>
  );
};

export default Header;
