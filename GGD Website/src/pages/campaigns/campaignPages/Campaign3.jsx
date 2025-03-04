import React from "react";
import image1 from "./campaign3/image1.jpeg";
import image2 from "./campaign3/image2.png";
import image3 from "./campaign3/image3.jpeg";
import bg from "../assets/heroBG.png";

export default function Campaign3() {
  return (
    <div className="campaignPage">
      <img src={bg} alt="" className="bg" />
      <h2 className="campaignPage-heading">
        Plastic Bottle Contribution to Reborn Creations' Recycled Contemporary
        Artwork
      </h2>
      <p className="campaignPage-paragraph">
        In Going Green Dubai's pursuit of innovative solutions and commitment to
        sustainability, we have achieved something exceptional! A consistent
        contribution of 100+ plastic bottles every week for 2 months to Reborn
        Creation's contemporary artwork.{" "}
      </p>
      <p className="campaignPage-paragraph">
        The process of turning plastic bottles to works of art is a journey of
        hand-crafted work by Ericka, founder of Reborn Creations. She saw the
        creative potential of repurposing these bottles into art pieces and
        raise awareness about plastic pollution. Reborn Creations shows us how
        amazing things can come from stuff we usually throw away and it teaches
        us to be creative, determined, and care about the environment.
      </p>
      <p className="campaignPage-paragraph">
        As each plastic bottle finds its way into our recycling initiatives,
        this motivates us to work towards reducing our environmental impact and
        fostering a more sustainable way of living. We are immensely happy with
        these initiatives coming our way and are even more excited about the
        journey ahead!
      </p>
      <br />
      <div className="campaignPage-imageGallery">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
      </div>
    </div>
  );
}
