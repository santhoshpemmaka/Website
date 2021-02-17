import React from "react";
import "./Container.css";
import Education from "../Education/Education.js";
import Experience from "../Experience/Experience";
import Skillset from "../Skillset/Skillset.js";
import Contact from "../Contact/Contact.js";
import Footer from "../Footer/Footer.js";
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
      <Skillset />
      <br />
      <br />
      <Education />
      <br />
      <br />
      <Contact />
      <br />
      <Footer />
    </div>
  );
}

export default Container;
