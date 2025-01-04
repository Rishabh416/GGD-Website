import React from "react"
import image1 from "./campaign7/image1.jpg"
import image2 from "./campaign7/image2.jpg"
import image3 from "./campaign7/image3.jpg"
import bg from "../assets/heroBG.png"

export default function Campaign7() {
    return (
        <div className="campaignPage">
            <img src={bg} alt="" className="bg"/>
            <h2 className="campaignPage-heading">E-waste Recycling Campaign at Innoventures Education Campuses</h2>
            <p className="campaignPage-paragraph">A successful campaign was once again initiated from 15th November to 15th December across 12 Innoventures Education schools and Early Childhood Centers (ECCs). The collaborative efforts of parents, students, staff and community members from Dubai International Academy Emirates Hills, Dubai International Academy Al Barsha, Raffles World Academy, Raffles International School, Collegiate International School, ECC Marina, ECC Lakes 1, ECC Lakes 2, ECC Springs, ECC Arabian Ranches, ECC Meadows and Raffles Starters led to an amazing collection of 141.5 Kgs of E-waste. </p>
            <p className="campaignPage-paragraph">This campaign once again highlights the need for awareness on recycling electrical waste which is generated in houses and schools. Our initiative prevents E-waste from ending up in landfills and benefits the environment. Special thanks to Ms. Poonam Bhojani , CEO of Innoventures Education , who has always supported sustainable initiatives and gave us an opportunity to run this campaign. </p>
            <p className="campaignPage-paragraph">"The future isn't something that happens to us, it's something we make."</p>
            <br />
            <div className="campaignPage-imageGallery">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
            </div>
        </div>
    )
}