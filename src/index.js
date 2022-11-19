import React from "react";
import ReactDom from "react-dom";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./archintel.css";
import "./archintel.scss";
import User from "./Components/User";
import LayOut from "./Components/LayOut";
import NoPage from "./Components/NoPage";

function ArchIntelWebsite() {
  useEffect(() => {
    const handleScroll = (event) => {
      var scrolPosition = window.pageYOffset;
      const navbarId = document.getElementById("navbarId");
      var sticky = navbarId.offsetTop;
      if (scrolPosition >= sticky + 10) {
        navbarId.style.backgroundColor = "rgb(75, 125, 125)";
      } else if (scrolPosition < sticky + 10) {
        navbarId.style.backgroundColor = "";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayOut />}></Route>
          <Route path="user" element={<User />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

ReactDom.render(<ArchIntelWebsite />, document.getElementById("root"));
