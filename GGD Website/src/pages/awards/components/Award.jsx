import React from "react"
import zeloopcertificate from "../assets/zeloopcertificate.png"
import newsarticle from "../assets/newsarticle.png"
import diaaward from "../assets/diaaward.jpeg"
import youthday from "../assets/youthday.jpeg"
import WorldEnvironmentDayCertificate from "../assets/WEDcertificate.png"
import greenClimateAward from "../assets/greenClimateAward.jpg"
import hundredArticle from "../assets/hundredArticle.png"

export default function Award(props) {

    let image

    switch (props.img) {
        case "1":
            image = zeloopcertificate
            break;
        
        case "2":
            image = newsarticle
            break;

        case "3":
            image = diaaward
            break;

        case "4":
            image = youthday
            break;

        case "5":
            image = WorldEnvironmentDayCertificate
            break;
        
        case "6":
            image = greenClimateAward
            break;

        case "7":
            image = hundredArticle
            break;
    
        default:
            break;
    }

    return(
        <div className="award">
            <img src={image} alt="" />
            <br />
            <h3>{props.title}</h3>
        </div>
    )
}