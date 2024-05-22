import React from "react"
import Award from "./components/Award"
import bg from "./assets/heroBG.png"

export default function Awards() {
    return(
        <div id="Awards">
            <img src={bg} alt="" className="bg"/>
            <Award img="6" title='Recognized as "Green Climate Ambassador" for Enviroserve UAE'/>
            <Award img="5" title="Certificate of Recognition for World Environment Day - Collected and Recycled 1,007 Kgs of E-waste"/>
            <Award img="3" title="Dubai International Academy, Emirates Hills - End Of Year Recognition Award for Sustainability"/>
            <Award img="2" title="Coverage in The National News, on how a sustainable lifestyle can help grow your wealth"/>
            <Award img="4" title='Recognized as a "ZeLoop Ambassador" on International Youth Day' />
            <Award img="1" title="Recognized for valued participation and collecting 41+ kgs of plastic"/>
        </div>
    )
}