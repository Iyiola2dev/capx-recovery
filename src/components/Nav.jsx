import { useState } from "react";
import { Link } from "react-router-dom";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center text-white py-6 px-5  bg-green-300/35  border-b-white border-b relative ">
      <div className="flex justify-between items-center text-white px-10 ">
      <div>
        <img className="h-10" src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1726142267/Bitcoin/capx-logo-180x55-1_edgd0i.png" alt="" />
      </div>
      <ul className=" hidden md:flex items-center justify-center md:gap-3 lg:gap-7 absolute py-6 lg:p-10 px-3 right-0 font-semibold  text-white text-lg lg:text-xl">
        {/* <hr className="md:hidden lg:flex w-full border-white" /> */}
        <li className="p-3 hover:border-b-2 cursor-pointer transition">
          <Link to="/">Home</Link>
        </li>
        <li className="p-3 hover:border-b-2 cursor-pointer transition">
          <Link to="/about"> About</Link>
        </li>
        <li className="p-3 hover:border-b-2 cursor-pointer transition">
          <Link to="">Our Services</Link>
        </li>
        <li className="p-3 hover:border-b-2 cursor-pointer transition">
          <Link to="/blog"> Blog</Link>
        </li>
        <li className="p-3 hover:border-b-2 cursor-pointer transition">
          <Link to="/contact"> Contact</Link>
        </li>
      </ul>
      </div>
    
      {/* <div className="relative hidden md:flex items-center justify-center gap-3"></div> */}
      <span
        className="z-30 md:hidden text-white text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <IoClose className=" block text-2xl cursor-pointer" />
        ) : (
          <RxHamburgerMenu />
        )}
      </span>

      <div
        className={`absolute xl:hidden top-0 w-[70%] h-screen 
         right-0 flex flex-col justify-center items-center navBar bg-gray-500/20 shadow-lg backdrop-blur-lg text-white gap-2 font-semibold text-lg transform transition-transform ${
           isMenuOpen ? "flex" : "hidden"
         } `}
        style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
      >
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-full text-left p-4 hover:bg-gray-400 hover:text-white transition-all cursor-pointer"
        >
          <Link to="/">Home</Link>
        </div>
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-full text-left p-4 hover:bg-gray-400 hover:text-white transition-all cursor-pointer"
        >
           <Link to="about"> About</Link>
        </div>
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-full text-left p-4 hover:bg-gray-400 hover:text-white transition-all cursor-pointer"
        >
           <Link to="">Our Services</Link>
        </div>
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-full text-left p-4 hover:bg-gray-400 hover:text-white transition-all cursor-pointer"
        >
           <Link to="/blog"> Blog</Link>
        </div>
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-full text-left p-4 hover:bg-gray-400 hover:text-white transition-all cursor-pointer"
        >
           <Link to="/contact"> Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
