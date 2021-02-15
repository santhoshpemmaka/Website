import React from "react";
import "./Contact.css";
import image_profile from "../IMG_20210110_085933 (1).jpg";
function Contact() {
  return (
    <div style={{ backgroundColor: "#474747" }} className="Contact_header">
      <div className="Container">
        <div className="Container_row">
          <div className="column_row">
            <div className="image_row">
              <div className="image">
                <img src={image_profile} alt="me" />
              </div>
            </div>
          </div>
          <div className="column_row">
            <br />
            <h1
              style={{ color: "white", fontFamily: "Poppins, helvetica" }}
              className="Contact"
            >
              Contact Me
            </h1>
                      <br />
                      <a href="/">
                          <button className="btn btn_secondary">
                              Profile
                          </button>
                      </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
