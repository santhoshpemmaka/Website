import React from "react";
import "./Skillset.css";
function Skillset() {
  return (
    <div className="Skillset">
      <br />
      <br />
      <div className="Container">
        <div className="Text_centre">
          <h2>🛠 SKILL SET</h2>
        </div>
        <br />
      </div>
      <div className="Container">
        <div className="Container_block">
          <div className="Row_skillblock">
            <div className="Column_block">
              <div className="Skillset_info">
                <div className="Skillset_text">
                  <div className="Skillset_heading">Frontend</div>

                  <p style={{ fontSize: "large", color: "black" }}>
                    JavaScript | React
                  </p>
                  <br />
                  <p style={{ fontSize: "large", color: "#58008a" }}>
                    Development
                  </p>
                  <ul style={{ fontSize: "large" }}>
                    <li>HTML, CSS, JS</li>
                    <li>React.js</li>
                    <li>TypeScript</li>
                    <li>Redux</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="Column_block">
              <div className="Skillset_info">
                <div className="Skillset_text">
                  <div className="Skillset_heading">Programming Languages</div>

                  <p style={{ fontSize: "large", color: "black" }}>
                    Problem Sloving
                  </p>
                  <br />
                  <p style={{ fontSize: "large", color: "#58008a" }}>
                    Development
                  </p>
                  <ul style={{ fontSize: "large" }}>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>C</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="Column_block">
              <div className="Skillset_info">
                <div className="Skillset_text">
                  <div className="Skillset_heading">Tools Used</div>

                  <p style={{ fontSize: "large", color: "black" }}>Debugging</p>
                  <br />
                  <p style={{ fontSize: "large", color: "#58008a" }}>
                    Development
                  </p>
                  <ul style={{ fontSize: "large" }}>
                    <li>Chrome DevTools</li>
                    <li>Postman</li>
                    <li>Git</li>
                    <li>npm</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="Column_block">
              <div className="Skillset_info">
                <div className="Skillset_text">
                  <div className="Skillset_heading">Cloud Computing</div>
                  <br />
                  <br />
                  <p style={{ fontSize: "large", color: "#58008a" }}>
                    Development
                  </p>
                  <ul style={{ fontSize: "large" }}>
                    <li>Amazon Web Services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skillset;
