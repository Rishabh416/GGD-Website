import React from "react";
import image1 from "./campaign5/image1.jpeg";
import image2 from "./campaign5/image2.jpeg";
import image3 from "./campaign5/image3.jpeg";
import bg from "../assets/heroBG.png";

export default function Campaign5() {
  return (
    <div className="campaignPage">
      <img src={bg} alt="" className="bg" />
      <h2 className="campaignPage-heading">
        Paper Recycling Campaign for Sustainable Change in Dubai
      </h2>
      <p className="campaignPage-paragraph">
        In the ongoing journey towards a sustainable future, Going Green Dubai
        has partnered with Enviroserve to launch a remarkable paper recycling
        campaign. The community's unwavering commitment to sustainability
        showcases that a lot can be achieved when we come together for a common
        cause.{" "}
      </p>
      <p className="campaignPage-paragraph">
        From discarded paper, magazines and notebooks sourced from households,
        schools and businesses, our paper recycling campaign has created a
        profound impact, reducing waste and conserving precious resources.
        Raising awareness and educating the community on the necessities of
        paper recycling is crucial to ensure the long term success of our
        mission.{" "}
      </p>
      <p className="campaignPage-paragraph">
        We invite everyone to be a part of this inspiring journey towards a
        greener, more sustainable world. Together we can make a significant
        impact.{" "}
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
