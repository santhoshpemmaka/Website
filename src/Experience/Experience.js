import React from "react";
import "./Experience.css";
function Experience() {
  return (
    <div className="Education">
      <br />
      <br />
      <div className="Container">
        <div className="Text_centre">
          <h2>💼 EXPERIENCE</h2>
        </div>
        <br />
      </div>
      <div className="Container">
        <div className="Container_block">
          <div className="Row_block">
            <div className="Column_block">
              <div className="Experience_info">
                <div className="Experience_text">
                  <div className="Experience_heading">
                    <a
                      style={{ textDecoration: "none", color: "black" }}
                      href="https://www.redbus.in/bus-tickets/"
                      target="_blank"
                    >
                      redBus
                    </a>
                  </div>

                  <p style={{ fontSize: "large", color: "black" }}>
                    Online Bus Ticket Booking
                  </p>
                  <br />
                  <p style={{ color: "black", fontSize: "16px" }}>Role</p>
                  <p style={{ fontSize: "large", color: "indigo" }}>
                    Front End Developer
                  </p>
                  <br />
                  <p />
                  <p style={{ fontSize: "large" }}>🇮🇳 Bangalore, India</p>
                  <p style={{ color: "#999999" }}>Dec 2019 - Jun 2020</p>
                  <hr style={{ width: "25%" }} />
                </div>

                <div className="Row_block">
                  <pem className="Experience_description">
                    I'm developed Infunnel and Postfunnel Addons to the redBus
                    Online Bus Booking Platfrom for Mobile Application.
                  </pem>
                </div>
              </div>
            </div>
            <div className="Column_block">
              <div className="Experience_info">
                <div className="Experience_text">
                  <div className="Experience_heading">
                    <a
                      style={{ textDecoration: "none", color: "black" }}
                      href="https://www.ibm.com/in-en"
                      target="_blank"
                    >
                      IBM
                    </a>
                  </div>
                  <br />
                  <p style={{ color: "black", fontSize: "16px" }}>Role</p>
                  <br />
                  <p style={{ fontSize: "large", color: "indigo" }}>
                    Application Developer
                  </p>
                  <br />
                  <p />
                  <p style={{ fontSize: "large" }}>🇮🇳 Bangalore, India</p>
                  <p style={{ color: "#999999" }}>Apr 2021 - Present</p>
                  <hr style={{ width: "25%" }} />
                </div>

                <div className="Row_block">
                  <pem className="Experience_description">
                    I'm working in the Front End Developer.
                  </pem>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
