import React from "react"
import image1 from "./campaign4/image1.jpeg"
import image2 from "./campaign4/image2.png"
import image3 from "./campaign4/image3.jpeg"
import bg from "../assets/heroBG.png"

export default function Campaign4() {
    return (
        <div className="campaignPage">
            <img src={bg} alt="" className="bg"/>
            <h2 className="campaignPage-heading">Weekly collection of plastic bottles at Executive Towers, Dubai</h2>
            <p className="campaignPage-paragraph">A consistent endeavor each week, where dedicated community members unite to work towards a greener planet. Through the collaborative efforts of everyone, Going Green Dubai has achieved a remarkable collection of more than 150 plastic bottles each week. </p>
            <p className="campaignPage-paragraph">This initiative is a true reflection of the community's dedication, reflecting a positive impact on our environment. The impact of this collective effort has led to an inspiring achievement, with over 11,400 plastic bottles diverted from landfills and oceans. </p>
            <p className="campaignPage-paragraph">Our vision to promote sustainability by utilizing the <a href="https://zeloopapp.page.link/Xcok">ZeLoop app</a> for recycling of plastic bottles contributes to a circular economy where bottles are reused and repurposed. ZeLoop is an eco-friendly app that rewards for not littering and each plastic bottle collected and recycled through this platform not only reduces waste but also contributes towards sustainability. </p>
            <p className="campaignPage-paragraph">We believe that efforts can inspire change and with the collective power of the community, we can shape the world towards a greener future. </p>
            <br />
            <div className="campaignPage-imageGallery">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
            </div>
        </div>
    )
}