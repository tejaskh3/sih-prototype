import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";



import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* <ContentWrapper> */}
      <ul className="menuItems">
        <li className="menuItem">Terms Of Use</li>
        <li className="menuItem">Privacy-Policy</li>
        <li className="menuItem">About</li>
        <li className="menuItem">Blog</li>
        <li className="menuItem">FAQ</li>
      </ul>
      <div className="socialIcons">
        <span className="icon">
          <FaFacebookF />
        </span>
        <span className="icon">
          <FaInstagram />
        </span>
        <span className="icon">
          <FaTwitter />
        </span>
        <span className="icon">
          <FaLinkedin />
        </span>
      </div>
      <div className="infoText">
        2023-24 © LegalBazaar Pvt. Ltd. | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
