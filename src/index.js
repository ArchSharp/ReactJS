import React from "react";
import ReactDom from "react-dom";
import "./archintel.css";
//import "./archintel.js"

let navMembers = ["Home","About","Services","Sign Up","Sign In","About","Services","Sign Up","Sign In"];

function TopNavigationBar({navArray}) {
  return (
    <>
    <div className="navbar" id="navbarId">
      <div className="companyName">
        <img src="../logo512.png" alt="ArchIntel" />
        <span>ArchIntel</span>
      </div>
      <ul className="nav" id="navId">
        {" "}
        {navArray.map(nMem => {
          return <>
                    <a href={"#"+nMem} className="links">
                        <li key={nMem}>{nMem}</li>
                    </a>
                </>;
        })}        
      </ul>
    </div>
  </>
  );
}

ReactDom.render(<TopNavigationBar navArray={navMembers} />, document.getElementById("root"));
