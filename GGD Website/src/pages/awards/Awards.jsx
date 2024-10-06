import React from "react"
import Award from "./components/Award"
import bg from "./assets/heroBG.png"

export default function Awards() {
    return(
        <div id="Awards">
            <img src={bg} alt="" className="bg"/>
            <Award img="10" title={<a href="https://www.khaleejtimes.com/uae/education/dubai-academy-named-finalist-for-worlds-best-schools-with-its-environment-initiatives">Featured on Khaleej Times for a standout initiative that gained widespread support from the community</a>}/>
            <Award img="8" title={<a href="https://open.spotify.com/episode/4OM56nZA83DXQHgnOUR2CB?si=1bZm4763SUWZnw189HaInQ&nd=1&dlsi=24e414e9a0024583">Featured on World Environment Day for creating a sustainable future by EarthWise podcast</a>}/>
            <Award img="7" title={<a href="https://hundred.org/en/articles/these-youth-led-social-impact-projects-will-inspire-you">Featured by HundrED, a global mission-driven organization, for Inspirational Youth-led Social Impact Projects</a>}/>
            <Award img="6" title='Recognized as "Green Climate Ambassador" for Enviroserve UAE'/>
            <Award img="9" title={<a href="https://www.linkedin.com/posts/richabansal13_ecobee-diacop28-diadubai-activity-7120717473552736256-V1_c?utm_source=share&utm_medium=member_desktop">Featured by ecobee.ae for commitment to sustainable initiatives</a>}/>
            <Award img="5" title="Certificate of Recognition for World Environment Day - Collected and Recycled 1,007 Kgs of E-waste"/>
            <Award img="3" title="Dubai International Academy, Emirates Hills - End Of Year Recognition Award for Sustainability"/>
            <Award img="2" title={<a href="https://www.thenationalnews.com/weekend/2022/02/11/how-a-sustainable-lifestyle-can-help-grow-your-wealth/">Coverage in The National News, on how a sustainable lifestyle can help grow your wealth</a>}/>
            <Award img="4" title='Recognized as a "ZeLoop Ambassador" on International Youth Day' />
            <Award img="1" title="Recognized for valued participation and collecting 41+ kgs of plastic"/>
        </div>
    )
}