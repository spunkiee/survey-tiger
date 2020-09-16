import React from "react";
import image from "../assets/dog.png";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header-image">
          <img src={image} alt="tiger" />
        </div>
        <div className="header-text">Survey Tiger </div>
      </div>
    </>
  );
}
