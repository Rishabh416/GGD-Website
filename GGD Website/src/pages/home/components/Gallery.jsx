import React from "react";
import image1 from "../assets/gallery/image1.webp";
import image2 from "../assets/gallery/image2.webp";
import image3 from "../assets/gallery/image3.webp";
import image4 from "../assets/gallery/image4.webp";
import image5 from "../assets/gallery/image5.webp";
import image6 from "../assets/gallery/image6.webp";
import image7 from "../assets/gallery/image7.webp";
import image8 from "../assets/gallery/image8.webp";
import image9 from "../assets/gallery/image9.webp";
import image10 from "../assets/gallery/image10.webp";

export default function Gallery() {
  return (
    <div className="gallery">
      <div className="imageContainer">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
        <img src={image5} alt="" />
        <img src={image6} alt="" />
        <img src={image7} alt="" />
        <img src={image8} alt="" />
        <img src={image9} alt="" />
        <img src={image10} alt="" />
        <img src={image1} alt="" />
      </div>
    </div>
  );
}
