import React from "react";
import profilePicture from "../assets/profilePicture.webp";

export default function FounderMessage() {
  return (
    <div className="founderMessage" id="founderMessageSection">
      <div className="profile">
        <img
          src={profilePicture}
          alt="Profile image of Rishabh Mittal - Founder of Going Green Dubai, with a dark green background and recycling icons"
        />
      </div>
      <div className="content">
        <h2>Message from Founder</h2>
        <p>
          Going Green Dubai is a youth led non-profit initiative to inspire communities and youth to
          join the cause for recycling and work towards sustainability. As an
          Environmental Enthusiast, I feel it is time to take action by reducing
          plastic, paper and E-waste by embracing Eco-friendly solutions.{" "}
        </p>
        <br />
        <p>
          The youth are the future and our participation and involvement is
          essential for a greener and cleaner planet. This initiative is where
          we can come together to protect and preserve our planet. Every small
          effort counts and every action can lead to a significant change!{" "}
        </p>
        <br />
        <p> -Rishabh Mittal</p>
      </div>
    </div>
  );
}
