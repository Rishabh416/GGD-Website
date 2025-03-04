import React from "react";
import heroBG from "../assets/heroBG.webp";
import hero from "../assets/hero.webp";
import recycling from "../assets/recyclinglogo.webp";

export default function Landing() {
  return (
    <div className="landing">
      <img className="backgroundTrans" alt="background image" src={heroBG} />

      <img
        src={hero}
        alt="Hero image of three recycing bins for plastic, E-waste, paper"
      />

      <div>
        <div className="logoContainer">
          <img
            src={recycling}
            alt="green color recycling logo with text saying reduce, reuse, recycle"
            className="recyclingLogo"
          />

          <h1>GOING GREEN DUBAI</h1>
        </div>
        <h2>STEP CLOSER TO A GREENER PLANET</h2>
        <a href="#founderMessageSection">
          <button>EXPLORE</button>
        </a>
      </div>
    </div>
  );
}
