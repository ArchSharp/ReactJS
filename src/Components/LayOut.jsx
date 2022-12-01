import React, { useContext, useEffect, useState } from "react";

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

import { SignUpContext } from "../ContextAPI/SignUpContext";

const getLocalStorage = (name) => {
  let list = localStorage.getItem(name);
  if (list) {
    list = JSON.parse(list);
    // console.log("success");
    return list;
  } else {
    console.log("error");
    return [];
  }
};

const LayOut = () => {
  const { cookies } = useContext(SignUpContext);
  const [storage, setStorage] = useState(getLocalStorage(cookies.Email));

  useEffect(() => {
    setStorage(getLocalStorage(cookies.Email));
  }, [cookies.Email]); //[cookies.Email]

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
      <div>
        {cookies.Email ? <h4>{storage.firstName}</h4> : <h4>Person</h4>}
      </div>
    </>
  );
};

export default LayOut;
