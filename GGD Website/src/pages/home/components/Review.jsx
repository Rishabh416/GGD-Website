import React from "react";

export default function Review(props) {
  return (
    <div className="review">
      {/* <h4>{props.name}</h4> */}
      <p>{props.content}</p>
      <br />
      <p className="reviewSubmitter">{props.name}</p>
    </div>
  );
}
