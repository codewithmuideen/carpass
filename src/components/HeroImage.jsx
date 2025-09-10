// HeroImage.jsx
import React from "react";
import images from "../constants/images";

const HeroImage = () => {
  return (
    <div className="w-full h-screen m-0 p-0">
      <img
        src={images.heroIllustration}
        alt="Hero Illustration"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default HeroImage;
