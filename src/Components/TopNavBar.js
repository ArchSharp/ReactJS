import React from "react";

function TopNavBar({ companyName, navArray }) {
  return (
    <>
      <div className="navbar" id="navbarId">
        <div className="companyName">
          <a href="#companyName">
            <img key={1} src={companyName[1]} alt={companyName[0]} />
            <span key={0}>{companyName[0]}</span>
          </a>
        </div>
        <ul className="nav" id="navId">
          {" "}
          {navArray.map((nMem, index) => {
            return (
              <>
                <a href={"#" + nMem} className="links">
                  <li key={index}>{nMem}</li>
                </a>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default TopNavBar;
