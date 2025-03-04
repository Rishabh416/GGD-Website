import React from "react";
import image1 from "./campaign6/image1.jpeg";
import image2 from "./campaign6/image2.jpg";
import image3 from "./campaign6/image3.jpg";
import bg from "../assets/heroBG.png";

export default function Campaign6() {
  return (
    <div className="campaignPage">
      <img src={bg} alt="" className="bg" />
      <h2 className="campaignPage-heading">
        E-waste Recycling Campaign for Campus Sustainability Month
      </h2>
      <p className="campaignPage-paragraph">
        A collaborative campaign for Campus Sustainability Month, was initiated
        across 11 Innoventures Education schools and Early Childhood Centers
        (ECCs). It involved more than 9000 students along with teachers, parents
        and staff from Dubai International Academy Emirates Hills, Dubai
        International Academy Al Barsha, Raffles World Academy, Raffles
        International School, ECC Marina, ECC Lakes 1, ECC Lakes 2, ECC Springs,
        ECC Arabian Ranches, ECC Meadows and Raffles Starters.
      </p>
      <p className="campaignPage-paragraph">
        The campaign surpassed the goal of collecting 1,500kgs of E-waste and
        was a success with an outstanding collection of 2030.3 kgs, collected
        from all 11 campuses. This highlights the need for E-waste recycling
        with the increasing advancements in technology and electronics. E-waste
        recycling bins were placed at all campuses by Enviroserve, our recycling
        partner and all E-waste collected was responsibly recycled at their
        facility. Certificates were issued to each campus for their active
        participation in the E-waste recycling campaign. The campus
        contributions have made a positive impact on the global environment!{" "}
      </p>
      <p className="campaignPage-paragraph">
        A special thanks to Ms. Poonam Bhojani, CEO of Innoventures Education
        who supported and gave an opportunity to Going Green Dubai to initiate
        an E-waste recycling campaign for Campus Sustainability Month across all
        Innoventures Education Campuses.{" "}
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
