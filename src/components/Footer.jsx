import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-3">
      <footer className="bg-green-900 text-white py-10">
        <div className="container mx-auto px-6">
          {/* Upper Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-5">
            {/* Left Section */}
            <div className="mb-8 md:mb-0">
              <img
                src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1726142267/Bitcoin/capx-logo-180x55-1_edgd0i.png"
                alt="Capx Recovery Logo"
                className="w-32 mb-4"
              />
              <p className="max-w-xs  ">
                We’re a Trusted and Reliable Fund Recovery Company, and we’re
                mastered at the core of what we do, “scam recovery.” A gigantic
                field that includes recovery from frozen or disabled crypto
                wallets, capital gain tax frauds, fake crypto wallets and apps,
                broker scams, phishing scams, celebrity imposter crypto scams,
                and fake ICOs, among many other frauds and schemes.
              </p>
            </div>
            {/* Right Section */}
            <div className="flex flex-col md:flex-row w-full md:w-auto justify-between gap-8">
              {/* Services Section */}
              <div>
                <h3 className="font-bold mb-4">Our Services</h3>
                <ul>
                  <li>
                    <Link to="/services/cryptocurrency-scam-recovery"> Cryptocurrency Scam Recovery</Link>
                  </li>
                  <li>
                    <Link to="/services/forex-scam"> Forex Scam</Link>
                  </li>
                  <li>
                    <Link to="/services/nft-scam">NFT Scam</Link>
                  </li>
                  <li>
                    <Link to="/services/ponzi-schemes">Ponzi Schemes</Link>
                  </li>
                  <li>
                    <Link to="/services/romance-scam">Romance Scam</Link>
                  </li>
                  <li>
                    <Link to="/services/tax-fraud-investigation">Tax Fraud Investigation</Link>
                  </li>
                  <li>
                    
                    <Link to="/services/internet-scam">Internet Scam</Link>
                  </li>
                  <li>
                    
                    <Link to="/services/social-media-scam">Social Media Scam</Link>
                  </li>
                </ul>
              </div>

              {/* Quick Links Section */}
              <div>
                <h3 className="font-bold mb-4">Quick Links</h3>
                <ul>
                  <li>Privacy Policy</li>
                  <li>Terms and Conditions</li>
                  <li>Disclaimer</li>
                  <li>Contact Us</li>
                </ul>
              </div>

              {/* Contact Section */}
              <div>
                <h3 className="font-bold mb-4">Contact Us</h3>
                <p>
                  Address: 5551, Shaw RD, Apt no 16/188, <br /> Jackson, MS -
                  39209
                </p>
                <p>Contact Number: +1-601-689-3502</p>
                <p>Email: info@capxrecovery.com</p>

                {/* Icons */}
                <div className="flex gap-4 mt-4">
                  <img
                    src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1726148225/Bitcoin/Group_922-removebg-preview-300x125_a4nfqu.webp"
                    alt="Money Back Guarantee"
                    className="h-[5rem]"
                  />
                  
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-white-300 pt-6 text-center md:text-left flex justify-center items-center">
            <p>© 2024 Capx Recovery • All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
