import React from "react";
import ReactDom from "react-dom";
import "./archintel.css";
//import "./archintel.js"
import { navMembers, companyDetails } from "./Datas/NavMembers";
import { homeForex } from "./Datas/homeData";
import TopNavBars from "./Components/TopNavBar";
import Home from "./Components/Home";
import About from "./Components/About";

function ArchIntelWebsite() {
  return (
    <div>
      <TopNavBars companyName={companyDetails} navArray={navMembers} />
      <Home homeForex={homeForex} />
      <About />
    </div>
  );
}

ReactDom.render(<ArchIntelWebsite />, document.getElementById("root"));
