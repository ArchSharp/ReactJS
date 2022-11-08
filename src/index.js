import React from "react";
import ReactDom from "react-dom";
import { useEffect } from "react";
import "./archintel.css";
import "./archintel.scss";
import { navMembers, companyDetails } from "./Datas/NavMembers";
import { homeForex } from "./Datas/homeData";
import TopNavBars from "./Components/TopNavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import ForexTools from "./Components/ForexTools";
import Strategies from "./Components/Strategies";
import ContactUs from "./Components/ContactUs";
import BgImageBtwSection from "./Components/BgImageBtwSection";

function ArchIntelWebsite() {
  useEffect(() => {
    const handleScroll = (event) => {
      var scrolPosition = window.pageYOffset;
      const navbarId = document.getElementById("navbarId");
      var sticky = navbarId.offsetTop;
      if (scrolPosition >= sticky + 10) {
        navbarId.style.backgroundColor = "#464646";
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
    <div>
      <TopNavBars companyName={companyDetails} navArray={navMembers} />
      <Home homeForex={homeForex} />
      <About />
      <BgImageBtwSection homeForex={homeForex} />
      <Services />
      <ForexTools />
      <Strategies />
      <ContactUs />
    </div>
  );
}

ReactDom.render(<ArchIntelWebsite />, document.getElementById("root"));
