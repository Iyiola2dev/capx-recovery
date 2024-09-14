import { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center text-white py-6 px-5 bg-green-300/35 border-b-white border-b relative">
      <div className="flex justify-between items-center text-white px-10">
        <div>
          <img
            className="h-10"
            src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1726142267/Bitcoin/capx-logo-180x55-1_edgd0i.png"
            alt="Logo"
          />
        </div>
        <ul className="hidden md:flex items-center justify-center md:gap-3 lg:gap-7 absolute py-6 lg:p-10 px-3 right-0 font-semibold text-white text-lg lg:text-xl">
          <li className="p-3 hover:border-b-2 cursor-pointer transition">
            <Link to="/">Home</Link>
          </li>
          <li className="p-3 hover:border-b-2 cursor-pointer transition">
            <Link to="/about">About</Link>
          </li>
          <li
            className="relative p-3 cursor-pointer transition"
            onClick={() => setIsServicesOpen(!isServicesOpen)}
          >
            <span className="hover:border-b-2">Our Services</span>
            {isServicesOpen && (
              <ul className="absolute top-full left-0 mt-[1.2rem] bg-green-900 z-20 text-black  shadow-lg w-48">
                <li className="p-2 hover:bg-gray-100">
                  <Link to="/cryptocurrency-scam-recovery">Cryptocurrency Scam Recovery</Link>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <Link to="/forex-scam">Forex Scam</Link>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <Link to="/nft-scam">NFT Scam</Link>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <Link to="/ponzi-schemes">Ponzi Schemes</Link>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <Link to="/romance-scam">Romance Scam</Link>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <Link to="/tax-fraud-investigation">Tax Fraud Investigation</Link>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <Link to="/internet-scam">Internet Scam</Link>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <Link to="/social-media-scam">Social Media Scam</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="p-3 hover:border-b-2 cursor-pointer transition">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="p-3 hover:border-b-2 cursor-pointer transition">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <span
        className="z-30 md:hidden text-white text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <IoClose className="block text-2xl cursor-pointer" />
        ) : (
          <RxHamburgerMenu />
        )}
      </span>

      <div
        className={`absolute xl:hidden top-0 w-[70%] h-screen right-0 flex flex-col justify-center items-center bg-gray-500/20 shadow-lg backdrop-blur-lg text-white gap-2 font-semibold text-lg transform transition-transform ${isMenuOpen ? "flex" : "hidden"}`}
        style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
      >
        <div
          onClick={() => setIsMenuOpen(false)}
          className="w-full text-left p-4 hover:bg-gray-400 hover:text-white transition-all cursor-pointer"
        >
          <Link to="/">Home</Link>
        </div>
        <div
          onClick={() => setIsMenuOpen(false)}
          className="w-full text-left p-4 hover:bg-gray-400 hover:text-white transition-all cursor-pointer"
        >
          <Link to="/about">About</Link>
        </div>
        <div
          onClick={() => setIsServicesOpen(!isServicesOpen)}
          className="w-full text-left p-4 hover:bg-gray-400 hover:text-white transition-all cursor-pointer relative"
        >
          <span>Our Services</span>
          {isServicesOpen && (
            <div className="absolute top-full left-0 w-full bg-gray-800 text-white border border-gray-700 shadow-lg">
              <Link to="/cryptocurrency-scam-recovery" className="block px-4 py-2 hover:bg-gray-600">Cryptocurrency Scam Recovery</Link>
              <Link to="/forex-scam" className="block px-4 py-2 hover:bg-gray-600">Forex Scam</Link>
              <Link to="/nft-scam" className="block px-4 py-2 hover:bg-gray-600">NFT Scam</Link>
              <Link to="/ponzi-schemes" className="block px-4 py-2 hover:bg-gray-600">Ponzi Schemes</Link>
              <Link to="/romance-scam" className="block px-4 py-2 hover:bg-gray-600">Romance Scam</Link>
              <Link to="/tax-fraud-investigation" className="block px-4 py-2 hover:bg-gray-600">Tax Fraud Investigation</Link>
              <Link to="/internet-scam" className="block px-4 py-2 hover:bg-gray-600">Internet Scam</Link>
              <Link to="/social-media-scam" className="block px-4 py-2 hover:bg-gray-600">Social Media Scam</Link>
            </div>
          )}
        </div>
        <div
          onClick={() => setIsMenuOpen(false)}
          className="w-full text-left p-4 hover:bg-gray-400 hover:text-white transition-all cursor-pointer"
        >
          <Link to="/blog">Blog</Link>
        </div>
        <div
          onClick={() => setIsMenuOpen(false)}
          className="w-full text-left p-4 hover:bg-gray-400 hover:text-white transition-all cursor-pointer"
        >
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
