import React from "react";
import ReactDom from "react-dom";
import { useEffect } from "react";
import "./archintel.css";
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
    //https://bobbyhadz.com/blog/react-onscroll
    const handleScroll = (event) => {
      var scrolPosition = window.pageYOffset;
      const navbarId = document.getElementById("navbarId");
      var sticky = navbarId.offsetTop;
      if (scrolPosition >= sticky + 10) {
        navbarId.style.backgroundColor = "#464646";
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
      <BgImageBtwSection />
      <Services />
      <ForexTools />
      <Strategies />
      <ContactUs />
    </div>
  );
}

ReactDom.render(<ArchIntelWebsite />, document.getElementById("root"));
