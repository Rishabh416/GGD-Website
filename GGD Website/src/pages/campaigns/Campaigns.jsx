import React from "react"
import CampaignCard from "./components/CampaignCard"
import bg from "./assets/heroBG.png"

export default function Campaigns() {

    return(
        <div id="Campaigns">
            <img src={bg} alt="" className="bg"/>
            <CampaignCard img="7" title="E-waste Recycling Campaign at Innoventures Education Campuses" date="November 15th 2024 - December 15th 2024" text="A successful E-waste recycling campaign was initiated across 12 Innoventures Education schools and Early Childhood Centers (ECCs). The united efforts of students, parents, staff and community members resulted in the collection of 141.5 kgs of E-waste. "/>
            <CampaignCard img="6" title="E-waste Recycling Campaign for Campus Sustainability Month" date="October 23rd 2023 - January 12th 2024" text="An impactful awareness campaign on the necessity for E-waste recycling was initiated across 11 Innoventures Education schools. The active participation of all schools resulted in an outstanding collection of 2030.3 kgs of E-waste which was recycled at the Enviroserve Recycling Hub. "/>
            <CampaignCard img="5" title="Paper Recycling Campaign for Sustainable Change in Dubai" date="August 15th 2023 - Present" text="Dedicated collaboration of community members and enthusiastic students resulted in collection of around 300 Kgs of paper, underscoring commitment to sustainability."/>
            <CampaignCard img="3" title="Plastic Bottle Contribution to Reborn Creations' Recycled Contemporary Artwork" date="June 2023 - August 2023" text="Remarkable weekly contribution of more than 100 plastic bottles with the collaborative efforts of community members and students, defining commitment to sustainability and creativity."/>
            <CampaignCard img="2" title="E-waste Recycling Campaign at Dubai International Academy - Emirates Hills for World Environment Day" date="May 1st 2023 -  June 23rd 2023" text="E-waste recycling bins placed at Dubai International Academy - Emirates Hills. Collaborative effort of the DIA students, teachers, parents and neighboring residents resulting in surpassing the goal of 1,000 kgs of E-waste being collected and recycled at Enviroserve Hub, the recycling partner. "/>
            <CampaignCard img="1" title="E-waste Recycling Campaign for World Recycling Day" date="March 14th 2023 - March 31st 2023" text="A collective campaign for E-waste recycling that united community members, friends and workplaces. This effort resulted in an impressive 210 kgs of E-waste collected and responsibly recycled at the Enviroserve Hub, the recycling partner. "/>
            <CampaignCard img="4" title="Weekly collection of plastic bottles at Executive Towers, Dubai" date="August 18th 2021 - Present" text="Weekly collection of more than 150 plastic bottles with the collaborative efforts of community members. This has resulted in a total of over 11,400 plastic bottles collected till date and recycled using the ZeLoop app. "/>
        </div>
    )
}