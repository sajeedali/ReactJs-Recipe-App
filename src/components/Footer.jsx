import React from "react";

const Footer = () => {
  return (
    <div className="footer container">
      <div className="footer-section">
        <p className="title">RecipeHub.com</p>
        <p>
          RecipeHub: Your go-to destination for mouthwatering recipes from
          around the world, all available for free!
        </p>
        <p>&copy; 2024 | All Rights Reserved</p>
      </div>
      <div className="footer-section">
        <p className="title">Contact Us</p>
        <p>recipehub@gmail.com</p>
        <p>+342-5324-9454</p>
        <p>2393 Street NYC</p>
      </div>
      <div className="footer-section">
        <p className="title">Socials</p>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
      </div>
    </div>
  );
};

export default Footer;
