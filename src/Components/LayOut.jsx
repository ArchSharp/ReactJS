import React from "react";

import { navMembers, companyDetails } from "../Datas/NavMembers";
import { homeForex } from "../Datas/homeData";
import TopNavBars from "./TopNavBar";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import ForexTools from "./ForexTools";
import Strategies from "./Strategies";
import ContactUs from "./ContactUs";
import BgImageBtwSection from "./BgImageBtwSection";

const LayOut = () => {  
  return (
    <>
      <TopNavBars
        companyName={companyDetails}
        navArray={navMembers}
        isNavbarId={true}
      />
      <Home homeForex={homeForex} />
      <About />
      <BgImageBtwSection homeForex={homeForex} />
      <Services />
      <ForexTools />
      <Strategies />
      <ContactUs />      
    </>
  );
};

export default LayOut;
