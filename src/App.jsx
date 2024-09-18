import React, { useEffect, useState } from "react";

import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Cryptocurrency from "./services/Cryptocurrency";
import ForexScam from "./services/ForexScam";
import NFTScam from "./services/NFTScam";
import Ponzi from "./services/Ponzi";
import RomanceScam from "./services/RomanceScam";
import TaxFraud from "./services/TaxFraud";
import InternetScam from "./services/InternetScam";
import SocialMediaScam from "./services/SocialMediaScam";
import Blog2 from "./services/Blog2";
import { use } from "react";

import FormPopup from "./components/FormPopup";
import BlogStory from "./pages/BlogStory";

const App = () => {
  const [closeModal, setCloseModal] = useState(true);
  const onclick = () => {
    setCloseModal(true);
  };
  useEffect(() => {
    setTimeout(() => {
      setCloseModal(false);
    }, 3000);
  }, []);
  return (
    <div className="bg-bitcoin2 bg-cover bg-transparent ">
      <Nav />
      {/* {!closeModal && <PopUpModal close={onclick} />} */}

      {!closeModal &&  <FormPopup close={onclick}/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog2 />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/services/cryptocurrency-scam-recovery"
          element={<Cryptocurrency />}
        />
        <Route path="/services/forex-scam" element={<ForexScam />} />
        <Route path="/services/nft-scam" element={<NFTScam />} />
        <Route path="/services/ponzi-schemes" element={<Ponzi />} />
        <Route path="/services/romance-scam" element={<RomanceScam />} />
        <Route
          path="/services/tax-fraud-investigation"
          element={<TaxFraud />}
        />
        <Route path="/services/internet-scam" element={<InternetScam />} />
        <Route
          path="/services/social-media-scam"
          element={<SocialMediaScam />}
        />
        <Route path="/blogStory" element={<BlogStory/>}/>
      </Routes>
    </div>
  );
};

export default App;
