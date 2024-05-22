import React from "react"
import recycleBin from "../assets/recycleBin.webp"

export default function WhatRecycling() {
    return(
        <div className="whatRecycling">
            <div className="content">
                <h2>What is Recycling?</h2>
                <p>Recycling gives new life to plastics, E-waste, paper, glass and helps in protecting the environment. By recycling, we practice sustainability and ease environmental pressures. Recycling also reduces greenhouse gas emissions which helps to tackle climate change.</p>
            </div>
            <img src={recycleBin} alt="Green recycling box with recycling logo and text saying We Recycle" />
        </div>
    )
}