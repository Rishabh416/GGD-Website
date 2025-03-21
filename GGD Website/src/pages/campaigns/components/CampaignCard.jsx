import React from "react";
import { Link } from "react-router-dom";
import enviroservelogo from "../assets/enviroserveLogo.png";
import dialogo from "../assets/DIAEHlogo.png";
import reborncreations from "../assets/RebornCreations.jpg";
import zelooplogo from "../assets/zeLoopLogo.png";
import paperCampaign from "../assets/paperCampaign.jpeg";
import innoventuresLogo from "../assets/innoventuresEdu.jpg";
import diaehposter from "../assets/diaehposter.jpg";
import emaarlogo from "../assets/emaarlogo.png"

export default function CampaignCard(props) {
  let image;

  switch (props.img) {
    case "1":
      image = enviroservelogo;
      break;

    case "2":
      image = dialogo;
      break;

    case "3":
      image = reborncreations;
      break;

    case "4":
      image = zelooplogo;
      break;

    case "5":
      image = paperCampaign;
      break;

    case "6":
      image = innoventuresLogo;
      break;

    case "7":
      image = diaehposter;
      break;

    case "8":
      image = emaarlogo;
      break;

    default:
      break;
  }

  return (
    <div className="campaignCard">
      <img src={image} alt="" />
      <br />
      <h3>{props.title}</h3>
      <h4>{props.date}</h4>
      <br />
      <p>{props.text}</p>
      <br />
      <Link to={`campaign${props.img}`}>Read More</Link>
    </div>
  );
}
