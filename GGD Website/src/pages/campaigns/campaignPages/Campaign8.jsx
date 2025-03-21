import React from "react";
import image1 from "./campaign8/image1.jpg";
import image2 from "./campaign8/image2.jpg";
import image3 from "./campaign8/image3.jpg";
import bg from "../assets/heroBG.png";

export default function Campaign8() {
  return (
    <div className="campaignPage">
      <img src={bg} alt="" className="bg" />
      <h2 className="campaignPage-heading">
        E-waste Recycling Campaign at Emaar Community Malls
      </h2>
      <p className="campaignPage-paragraph">
        An impactful and successful campaign was initiated across Emaar Community Malls to raise awareness on the harmful effects of electronic waste ending up in landfills. E-waste recycling bins were placed at The Spring Souk, Meadows Village and Meadows Town Center to provide easy access for community members to responsibly recycle their electronic waste. The community disposed their old, used and broken electronics such as mobile phones, chargers, laptops, batteries and household appliances resulting in an incredible collection of 470 kgs of E-waste. 
      </p>

      <p className="campaignPage-paragraph">
        Additionally, our Sustainability Ambassadors Begüm Güntan, Aarav Modi and Hiya Parwani got an opportunity to interact with community members at the 53rd Eid Al Etihad event at Emaar and The Springs Souk Winter Market to spread awareness on the need to recycle electronic waste. 
      </p>

      <p className="campaignPage-paragraph">
        E-waste is one of the fastest-growing waste streams globally. By recycling responsibly, we can prevent harmful substances from entering our environment and recover valuable materials for reuse. Together, we can reduce landfill waste and contribute to a more sustainable future.
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
