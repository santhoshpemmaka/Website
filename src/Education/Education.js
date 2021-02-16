import React from "react";
import "./Education.css";

export default function Education() {
  return (
    <div className="Education">
      <br />
      <br />
      <div className="Container">
        <div className="Text_centre">
          <h2>🎓 Education</h2>
        </div>
        <br />
      </div>
      <div className="Container">
        <div className="Container_block">
          <div className="Row_block">
            <div className="Column_block">
              <div className="Education_info">
                <div className="Education_text">
                  <div className="Education_heading">B.Tech</div>
                  <p style={{ fontSize: "large", color: "indigo" }}>
                    Electronics
                  </p>
                  <p>2020</p>
                  <br />
                  <p style={{ color: "black", fontSize: "medium" }}>
                    🏛 GPREC College
                  </p>
                  <p>🇮🇳 Kurnool,India</p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="Column_block">
              <div className="Education_info">
                <div className="Education_text">
                  <div className="Education_heading">Pre - University</div>
                  <p style={{ fontSize: "large", color: "indigo" }}>M.P.C</p>
                  <p>2015</p>
                  <br />
                  <p style={{ color: "black", fontSize: "medium" }}>
                    🏛 JNTU CBSE School
                  </p>
                  <p>🇮🇳 Kadapa,India</p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="Column_block">
              <div className="Education_info">
                <div className="Education_text">
                  <div className="Education_heading">High School</div>
                  <p style={{ fontSize: "large", color: "indigo" }}>
                    10th grade
                  </p>
                  <p>2013</p>
                  <br />
                  <p style={{ color: "black", fontSize: "medium" }}>
                    🏛 JNTU CBSE School
                  </p>
                  <p>🇮🇳 Kadapa,India</p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
