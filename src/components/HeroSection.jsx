import React from "react";
import CustomImage from "./Customimage";

const HeroSection = () => {
  const images = [
    "/img/gallery/img_1.jpg",
    "/img/gallery/img_2.jpg",
    "/img/gallery/img_3.jpg",
    "/img/gallery/img_4.jpg",
    "/img/gallery/img_5.jpg",
    "/img/gallery/img_6.jpg",
    "/img/gallery/img_7.jpg",
    "/img/gallery/img_8.jpg",
    "/img/gallery/img_9.jpg",
  ];

  return (
    <div className="section hero">
      <div className="col typography">
        <h1 className="title">What are we About</h1>
        <p className="info">
          RecipeHub is a platform dedicated to satisfying both your culinary
          cravings and soul with an array of delectable recipes spanning various
          cuisines. Our services come at no cost, ensuring that everyone can
          indulge in the joy of cooking without any financial barriers
        </p>
        <button className="btn">Explore now</button>
      </div>
      <div className="col gallery">
        {images.map((src, index) => (
          <CustomImage key={index} imgSrc={src} pt={"90%"} />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
