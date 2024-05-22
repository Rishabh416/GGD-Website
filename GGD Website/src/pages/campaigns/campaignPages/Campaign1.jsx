import React from "react"
import image1 from "./campaign1/image1.jpeg"
import image2 from "./campaign1/image2.jpeg"
import image3 from "./campaign1/image3.jpeg"
import bg from "../assets/heroBG.png"

export default function Campaign1() {
    return (
        <div className="campaignPage">
            <img src={bg} alt="" className="bg"/>
            <h2 className="campaignPage-heading">E-waste Recycling Campaign for World Recycling Day</h2>
            <p className="campaignPage-paragraph">Impactful campaign in honor of World Recycling Day, spanning across an engaging 14 day period. Involved together more than 50 families from the Executive Towers community along with workplaces like Al Kabeer Food and Green Castle Trading in Dubai. </p>
            <p className="campaignPage-paragraph">The campaign was a success with an incredible outcome of 210 kgs of E-waste gathered. This highlights the positive changes that can be accomplished when everyone unites and works towards sustainability. Every bit of E-waste collected was sent for recycling with our esteemed recycling partner, Enviroserve UAE. An authorized "green certificate" was issued to ensure that they have completely recycled and destroyed everything. </p>
            <p className="campaignPage-paragraph">A heartfelt gratitude to every member who participated in this campaign towards a cleaner and greener future! A special thanks to the Enviroserve team who ensured the timely pickup of E-waste from various locations across Dubai.</p>
            <br />
            <div className="campaignPage-imageGallery">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
            </div>
        </div>
    )
}