import React from "react";
import ReactDom from "react-dom";
import "./archintel.css";
//import "./archintel.js"
import { navMembers, companyDetails } from "./Datas/NavMembers";
import TopNavBar from "./Components/TopNavBar";

function TopNavigationBar() {
  return (
    <>
      <TopNavBar companyName={companyDetails} navArray={navMembers} />
    </>
  );
}

ReactDom.render(<TopNavigationBar />, document.getElementById("root"));
