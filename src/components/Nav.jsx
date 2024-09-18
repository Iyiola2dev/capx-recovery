import { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  const handleServicesClick = () => {
    setIsServicesOpen(!isServicesOpen);
    setIsBlogOpen(false); // Close the blog dropdown if open
  };

  const handleBlogClick = () => {
    setIsBlogOpen(!isBlogOpen);
    setIsServicesOpen(false); // Close the services dropdown if open
  };

  const closeAllDropdowns = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsBlogOpen(false);
  };

  return (
    <nav>
      <div className="flex justify-between items-center text-white py-6 px-5 bg-green-300/35 border-b-white border-b relative">
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
              <Link to="/" onClick={closeAllDropdowns}>Home</Link>
            </li>
            <li className="p-3 hover:border-b-2 cursor-pointer transition">
              <Link to="/about" onClick={closeAllDropdowns}>About</Link>
            </li>
            <li
              className="relative p-3 cursor-pointer transition"
              onClick={handleServicesClick}
            >
              <span className="hover:border-b-2 flex items-center">
                <p>Our Services</p>
                <IoMdArrowDropdown />
              </span>
              {isServicesOpen && (
                <ul className="absolute top-full left-0 mt-[1.2rem] bg-green-900 z-20 text-white shadow-lg w-48">
                  <li className="p-2 hover:bg-black">
                    <Link to="/services/cryptocurrency-scam-recovery" onClick={closeAllDropdowns}>
                      Cryptocurrency Scam Recovery
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-black">
                    <Link to="/services/forex-scam" onClick={closeAllDropdowns}>Forex Scam</Link>
                  </li>
                  <li className="p-2 hover:bg-black">
                    <Link to="/services/nft-scam" onClick={closeAllDropdowns}>NFT Scam</Link>
                  </li>
                  <li className="p-2 hover:bg-black">
                    <Link to="/services/ponzi-schemes" onClick={closeAllDropdowns}>Ponzi Schemes</Link>
                  </li>
                  <li className="p-2 hover:bg-black">
                    <Link to="/services/romance-scam" onClick={closeAllDropdowns}>Romance Scam</Link>
                  </li>
                  <li className="p-2 hover:bg-black">
                    <Link to="/services/tax-fraud-investigation" onClick={closeAllDropdowns}>
                      Tax Fraud Investigation
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-black">
                    <Link to="/services/internet-scam" onClick={closeAllDropdowns}>Internet Scam</Link>
                  </li>
                  <li className="p-2 hover:bg-black">
                    <Link to="/services/social-media-scam" onClick={closeAllDropdowns}>
                      Social Media Scam
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="relative p-3 cursor-pointer transition"
              onClick={handleBlogClick}
            >
              <span className="hover:border-b-2 flex items-center gap-2">
                <p>Blog</p>
                <IoMdArrowDropdown />
              </span>
              {isBlogOpen && (
                <ul className="absolute top-full left-0 mt-[1.2rem] bg-green-900 z-20 text-white shadow-lg w-48">
                  <li className="p-2 hover:bg-black">
                    <Link to="/blog" onClick={closeAllDropdowns}>Blog</Link>
                  </li>
                  <li className="p-2 hover:bg-black">
                    <Link to="/blogStory" onClick={closeAllDropdowns}>Blog Story</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="p-3 hover:border-b-2 cursor-pointer transition">
              <Link to="/contact" onClick={closeAllDropdowns}>Contact</Link>
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
          className={`absolute xl:hidden top-0 w-[70%] h-screen right-0 flex flex-col justify-center items-center bg-gray-500/20 shadow-lg backdrop-blur-lg text-white gap-2 font-semibold text-lg transform transition-transform ${
            isMenuOpen ? "flex" : "hidden"
          }`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
        >
          <div
            onClick={() => {
              closeAllDropdowns();
              setIsMenuOpen(false);
            }}
            className="w-full text-left p-4 hover:bg-gray-400 hover:text-white transition-all cursor-pointer"
          >
            <Link to="/">Home</Link>
          </div>
          <div
            onClick={() => {
              closeAllDropdowns();
              setIsMenuOpen(false);
            }}
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
                <Link
                  onClick={closeAllDropdowns}
                  to="/services/cryptocurrency-scam-recovery"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  Cryptocurrency Scam Recovery
                </Link>
                <Link
                  onClick={closeAllDropdowns}
                  to="/services/forex-scam"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  Forex Scam
                </Link>
                <Link
                  onClick={closeAllDropdowns}
                  to="/services/nft-scam"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  NFT Scam
                </Link>
                <Link
                  onClick={closeAllDropdowns}
                  to="/services/ponzi-schemes"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  Ponzi Schemes
                </Link>
                <Link
                  onClick={closeAllDropdowns}
                  to="/services/romance-scam"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  Romance Scam
                </Link>
                <Link
                  onClick={closeAllDropdowns}
                  to="/services/tax-fraud-investigation"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  Tax Fraud Investigation
                </Link>
                <Link
                  onClick={closeAllDropdowns}
                  to="/services/internet-scam"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  Internet Scam
                </Link>
                <Link
                  onClick={closeAllDropdowns}
                  to="/services/social-media-scam"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  Social Media Scam
                </Link>
              </div>
            )}
          </div>
          <div
            onClick={() => setIsBlogOpen(!isBlogOpen)}
            className="w-full text-left p-4 hover:bg-gray-400 hover:text-white transition-all cursor-pointer relative"
          >
            <span>Blog</span>
            {isBlogOpen && (
              <div className="absolute top-full left-0 w-full bg-gray-800 text-white border border-gray-700 shadow-lg">
                <Link
                  onClick={closeAllDropdowns}
                  to="/blog"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  Blog
                </Link>
                <Link
                  onClick={closeAllDropdowns}
                  to="/blogStory"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  Blog Story
                </Link>
              </div>
            )}
          </div>
          <div
            onClick={() => {
              closeAllDropdowns();
              setIsMenuOpen(false);
            }}
            className="w-full text-left p-4 hover:bg-gray-400 hover:text-white transition-all cursor-pointer"
          >
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
