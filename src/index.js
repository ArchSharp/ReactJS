import React from "react";
import ReactDom from "react-dom";
import { useEffect } from "react";
import "./archintel.css";
//import "./archintel.js"
import { navMembers, companyDetails } from "./Datas/NavMembers";
import { homeForex } from "./Datas/homeData";
import TopNavBars from "./Components/TopNavBar";
import Home from "./Components/Home";
import About from "./Components/About";

function ArchIntelWebsite() {
  useEffect(() => {
    const handleScroll = (event) => {
      var scrolPosition = window.pageYOffset;
      const navbarId = document.getElementById("navbarId");
      var sticky = navbarId.offsetTop;
      if (scrolPosition >= sticky + 10) {
        navbarId.style.backgroundColor = "darkmagenta";
      } else if (scrolPosition < sticky + 10) {
        navbarId.style.backgroundColor = "";
      }
      // console.log("window.scrollY", window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <TopNavBars companyName={companyDetails} navArray={navMembers} />
      <Home homeForex={homeForex} />
      <About />
    </div>
  );
}

ReactDom.render(<ArchIntelWebsite />, document.getElementById("root"));
