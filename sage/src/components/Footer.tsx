const today = new Date();

import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["300", "400"], // Specify the weights you need
  subsets: ["latin"], // Specify subsets
  display: "swap",
});

const Footer = () => {
  return (
    <footer className="w-full py-8 mt-auto bg-[#10025c]">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <p className={`${inter.className} text-[12px] text-white text-center`}>
          &copy; Designed & Built by SONICPRESS &nbsp;
          <span className="font-medium">{today.getFullYear()}</span>. <span className="font-light">All Rights Reserved</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
