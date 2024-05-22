import React from "react"
import image1 from "./campaign2/image1.jpeg"
import image2 from "./campaign2/image2.jpeg"
import image3 from "./campaign2/image3.jpeg"
import bg from "../assets/heroBG.png"

export default function Campaign2() {
    return (
        <div className="campaignPage">
            <img src={bg} alt="" className="bg"/>
            <h2 className="campaignPage-heading">E-waste Recycling Campaign at Dubai International Academy - Emirates Hills for World Environment Day</h2>
            <p className="campaignPage-paragraph">Thrilled to share the success story of Going Green Dubai's collaboration with Dubai International Academy - Emirates Hills showcasing environmental awareness and sustainable practices. </p>
            <p className="campaignPage-paragraph">Our E-waste recycling campaign was made possible through the dedicated participation of not only the students and teachers at DIAEH but also the enthusiastic involvement of parents and neighboring residents. With the placement of Enviroserve E-waste recycling bins at DIAEH, we continued our path of responsibly disposing E-waste, showing our commitment to safeguarding our environment. The collaborative support of over 5,000 DIAEH community members, resulted in surpassing our goal of collecting 1,000 kgs of E-waste. </p>
            <p className="campaignPage-paragraph">Through our recycling partner, Enviroserve, each device was given a new life and all E-waste was transformed into valuable resources. Our E-waste recycling initiatives is a constant reminder that every little action can make a big difference!</p>
            <br />
            <div className="campaignPage-imageGallery">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
            </div>
        </div>
    )
}