import React from "react";
import logo from "../assets/unsdgLogo.webp";
import goal11 from "../assets/goal11.webp";
import goal12 from "../assets/goal12.webp";
import goal13 from "../assets/goal13.webp";

export default function UNSDG() {
  return (
    <div className="unsdg">
      <img src={logo} alt="Sustainable Development Goals Logo" />

      <div>
        <img src={goal11} id="goal11" alt="Goal 11" />
        <img src={goal12} id="goal12" alt="Goal 12" />
        <img src={goal13} id="goal13" alt="Goal 13" />
      </div>
    </div>
  );
}
