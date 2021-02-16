import React from "react";
import "./Container.css";
import Education from "../Education/Education.js";
import Experience from "../Experience/Experience";
function Container() {
  return (
    <div className="Home">
      <div className="Container">
        <div className="Container_title">
          <h1>Santhosh</h1>
          <h6>I am a frontend developer!</h6>
        </div>
      </div>
      <br />
      <Experience />
      <br />
      <br />
      <Education />
    </div>
  );
}

export default Container;
