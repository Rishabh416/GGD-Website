import React from "react"
import plastic from "../assets/plastic.webp"
import ewaste from "../assets/e-waste.webp"
import co2 from "../assets/co2.webp"
import paper from "../assets/paper.webp"

export default function Statistic(props) {
    let imagePath
    switch (props.image) {
        case "source 1":
            imagePath = plastic
            break;
        case "source 2":
            imagePath = ewaste
            break;
        case "source 3":
            imagePath = co2
            break;
        case "source 4":
            imagePath = paper
            break;
    }
 
    return(
        <div className="statistic">
            <img src={imagePath} alt={props.title} />
            <h3>{props.title}</h3>
            <div><h4>{props.value}</h4></div>
        </div>
    )
}
