import React from "react";
import plastic from "./assets/plastic.jpg";
import ewaste from "./assets/e-waste.jpg";
import paper from "./assets/paper.jfif";
import bg from "./assets/heroBG.png";

export default function Recycling() {
  return (
    <div className="recycling">
      <img src={bg} alt="Background image" className="bg" />
      <div className="options">
        <div>
          <h3>Plastic Bottle Recycling</h3>
          <br />
          <p>
            Plastic bottle recycling has become a necessity to counter the
            release of toxic chemicals into our environment. By actively
            supporting plastic bottle recycling, we can contribute to a greener
            planet. In pursuit of this cause, I initiated a recycling project as
            a service action for my school. Discovering{" "}
            <a href="https://zeloop.net/">
              <b>ZeLoop</b>
            </a>
            , a UAE-based company and app that promotes plastic bottle recycling
            with rewarding incentives, was truly inspiring and encouraging. I
            embarked on collecting bottles from school, picnics, and my
            neighbors, consistently depositing them in community recycling bins
            since <b>August 2021</b>. This dedicated effort has led to my
            recognition as a <b>"ZeLoop Youth Ambassador"</b>, empowering me to
            continue the cause and encourage others to participate in this
            eco-friendly endeavor. Download the{" "}
            <a href="https://zeloopapp.page.link/Xcok">
              <b>ZeLoop App</b>
            </a>{" "}
            and start your <b>plastic bottle recycling</b> journey today!
          </p>
        </div>
        <img src={plastic} alt="Plastic bottles in a recycling bag" />
      </div>

      <div className="options">
        <div>
          <h3>E-waste Recycling</h3>
          <br />
          <p>
            E-waste recycling plays a crucial role in preserving our environment
            and promoting the sustainable use of resources. In 2023, got a
            unique opportunity to visit the{" "}
            <a href="https://enviroserve.org/">
              <b>Enviroserve</b>
            </a>{" "}
            recycling hub, which profoundly motivated me to take action against
            the adverse effects of <b>electronic waste</b> going to landfills.
            Enviroserve sets an exemplary standard by recycling all categories
            of E-waste, ranging from batteries and DVDs to larger items like
            washing machines, TVs, and laptops. They ensure complete destruction
            of E-waste without sending anything to landfills. This ignited my
            passion to initiate impactful campaigns for E-waste recycling,
            driving me forward in my mission for a <b>greener</b> and more{" "}
            <b>sustainable planet</b>. Join me in the movement for a greener
            planet through <b>E-waste recycling</b>!
          </p>
        </div>
        <img src={ewaste} alt="E-waste, wires, chargers in a cardboard box" />
      </div>

      <div className="options">
        <div>
          <h3>Paper Recycling</h3>
          <br />
          <p>
            Recycling paper is highly beneficial for the environment, as it
            effectively <b>reduces carbon dioxide emissions</b>. It also aids in
            saving trees since recycled paper can substitute for new paper. In
            August 2023, got another opportunity to advance my commitment to
            recycling and contribute to <b>sustainability</b> by collaborating
            with Enviroserve, the recycling partner. Join me in pursuit of a{" "}
            <b>greener planet</b> through <b>paper recycling</b>!
          </p>
        </div>
        <img
          src={paper}
          alt="Books, textbooks and paper in a cardboard box for recycling"
        />
      </div>
    </div>
  );
}
