import React from "react"
import profile from "../assets/profilePicture.webp"

export default function Instagram() {
    return(
        <div className="instagram">
            <div className="profile">
                <img src={profile} alt="" />
                <div className="info">
                    <div id="row1">
                        <h3>going.greendubai</h3>
                        <a href="https://www.instagram.com/going.greendubai/"><button>Follow</button></a>
                    </div>
                    
                    <div id="row2">
                        <p className="bold">40</p>
                        <p>posts</p>
                        <p className="bold">147</p>
                        <p>followers</p>
                    </div>

                    <div id="row3">
                        <h5>Going Green Dubai (Rishabh Mittal)</h5>
                        <p>Recycling - Step closer to a Greener Planet. Turning my Passion into Reality by my Actions♻️</p>
                    </div>
                </div>
            </div>

            <div className="posts">
                <div id="row1">
                    <embed src="https://www.instagram.com/p/CvU2G26vk0M/embed"/>
                    <embed src="https://www.instagram.com/p/CuccdVdvovB/embed"/>
                    <embed src="https://www.instagram.com/p/CsMPJlWsN_b/embed"/>
                </div>
            </div>
        </div>
    )
}