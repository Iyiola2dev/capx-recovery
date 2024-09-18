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
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center justify-center md:gap-3 lg:gap-7 absolute py-6 lg:p-10 px-3 right-0 font-semibold text-white text-lg lg:text-xl">
            <li className="p-3 hover:border-b-2 cursor-pointer transition">
              <Link to="/" onClick={closeAllDropdowns}>
                Home
              </Link>
            </li>
            <li className="p-3 hover:border-b-2 cursor-pointer transition">
              <Link to="/about" onClick={closeAllDropdowns}>
                About
              </Link>
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
                  {/* Services Links */}
                  <li className="p-2 hover:bg-black">
                    <Link
                      to="/services/cryptocurrency-scam-recovery"
                      onClick={closeAllDropdowns}
                    >
                      Cryptocurrency Scam Recovery
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-black">
                    <Link to="/services/forex-scam" onClick={closeAllDropdowns}>
                      Forex Scam
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-black">
                    <Link to="/services/nft-scam" onClick={closeAllDropdowns}>
                      NFT Scam
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-black">
                    <Link to="/services/ponzi-schemes" onClick={closeAllDropdowns}>
                      Ponzi Schemes
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-black">
                    <Link to="/services/romance-scam" onClick={closeAllDropdowns}>
                      Romance Scam
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-black">
                    <Link
                      to="/services/tax-fraud-investigation"
                      onClick={closeAllDropdowns}
                    >
                      Tax Fraud Investigation
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-black">
                    <Link to="/services/internet-scam" onClick={closeAllDropdowns}>
                      Internet Scam
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-black">
                    <Link
                      to="/services/social-media-scam"
                      onClick={closeAllDropdowns}
                    >
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
                    <Link to="/blog" onClick={closeAllDropdowns}>
                      Blog
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-black">
                    <Link to="/blogStory" onClick={closeAllDropdowns}>
                      Blog Story
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="p-3 hover:border-b-2 cursor-pointer transition">
              <Link to="/contact" onClick={closeAllDropdowns}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* Hamburger Menu for Small Screens */}
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
        {/* Mobile Menu */}
        <div
          className={`absolute xl:hidden top-0 w-[70%] py-[10rem] right-0 flex flex-col justify-center items-center bg-gray-500/20 shadow-lg backdrop-blur-lg text-white gap-2 font-semibold text-lg transform transition-transform ${
            isMenuOpen ? "flex" : "hidden"
          }`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
        >
          {/* Home Link */}
          <div
            onClick={() => {
              closeAllDropdowns();
              setIsMenuOpen(false);
            }}
            className="w-full text-left p-4 hover:bg-gray-400 hover:text-white transition-all cursor-pointer"
          >
            <Link to="/">Home</Link>
          </div>

          {/* About Link */}
          <div
            onClick={() => {
              closeAllDropdowns();
              setIsMenuOpen(false);
            }}
            className="w-full text-left p-4 hover:bg-gray-400 hover:text-white transition-all cursor-pointer"
          >
            <Link to="/about">About</Link>
          </div>

          {/* Our Services Dropdown for Mobile */}
          <div className="w-full">
            <div
              onClick={() => {
                setIsServicesOpen(!isServicesOpen);
                setIsBlogOpen(false); // Ensure Blog dropdown closes when Services is opened
              }}
              className="w-full text-left p-4 hover:bg-gray-400 hover:text-white transition-all cursor-pointer"
            >
              <span>Our Services</span>
            </div>
            {isServicesOpen && (
              <div className="w-full bg-gray-800 text-white border border-gray-700 shadow-lg">
                <Link
                  onClick={() => {
                    closeAllDropdowns();
                    setIsMenuOpen(false);
                  }}
                  to="/services/cryptocurrency-scam-recovery"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  Cryptocurrency Scam Recovery
                </Link>
                <Link
                  onClick={() => {
                    closeAllDropdowns();
                    setIsMenuOpen(false);
                  }}
                  to="/services/forex-scam"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  Forex Scam
                </Link>
                <Link
                  onClick={() => {
                    closeAllDropdowns();
                    setIsMenuOpen(false);
                  }}
                  to="/services/nft-scam"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  NFT Scam
                </Link>
                <Link
                  onClick={() => {
                    closeAllDropdowns();
                    setIsMenuOpen(false);
                  }}
                  to="/services/ponzi-schemes"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  Ponzi Schemes
                </Link>
                <Link
                  onClick={() => {
                    closeAllDropdowns();
                    setIsMenuOpen(false);
                  }}
                  to="/services/romance-scam"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  Romance Scam
                </Link>
                <Link
                  onClick={() => {
                    closeAllDropdowns();
                    setIsMenuOpen(false);
                  }}
                  to="/services/tax-fraud-investigation"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  Tax Fraud Investigation
                </Link>
                <Link
                  onClick={() => {
                    closeAllDropdowns();
                    setIsMenuOpen(false);
                  }}
                  to="/services/internet-scam"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  Internet Scam
                </Link>
                <Link
                  onClick={() => {
                    closeAllDropdowns();
                    setIsMenuOpen(false);
                  }}
                  to="/services/social-media-scam"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  Social Media Scam
                </Link>
              </div>
            )}
          </div>

          {/* Blog Dropdown for Mobile */}
          <div className="w-full">
            <div
              onClick={() => {
                setIsBlogOpen(!isBlogOpen);
                setIsServicesOpen(false); // Ensure Services dropdown closes when Blog is opened
              }}
              className="w-full text-left p-4 hover:bg-gray-400 hover:text-white transition-all cursor-pointer"
            >
              <span>Blog</span>
            </div>
            {isBlogOpen && (
              <div className="w-full bg-gray-800 text-white border border-gray-700 shadow-lg">
                <Link
                  onClick={() => {
                    closeAllDropdowns();
                    setIsMenuOpen(false);
                  }}
                  to="/blog"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  Blog
                </Link>
                <Link
                  onClick={() => {
                    closeAllDropdowns();
                    setIsMenuOpen(false);
                  }}
                  to="/blogStory"
                  className="block px-4 py-2 hover:bg-gray-600"
                >
                  Blog Story
                </Link>
              </div>
            )}
          </div>

          {/* Contact Link */}
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
