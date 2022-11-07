import React from "react";
import { useState } from "react";

// import { myFunction } from "../archintel";

function TopNavBar({ companyName, navArray }) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <>
      <div className="navbar_x fixed" id="navbarId">
        <div className="companyName">
          <a href="#Home">
            <img key={1} src={companyName[1]} alt={companyName[0]} />
            <span key={0}>{companyName[0]}</span>
          </a>
        </div>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon from heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className={isNavExpanded ? "nav_x expanded" : "nav_x"} id="navId">
          <ul>
            {" "}
            {navArray.map((nMem, index) => {
              return (
                <>
                  <li key={index}>
                    <a
                      href={"#" + nMem}
                      className="links"
                      //target="_blank"
                      //rel="noreferrer"
                    >
                      {nMem}
                    </a>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default TopNavBar;
