import React from "react";
import CenteredHeadingUnderline from "./CenteredHeadingUnderline";
import FlexCard from "./FlexCard";
import { aboutUs } from "../Datas/aboutData";

function About() {
  return (
    <div>
      <CenteredHeadingUnderline title={"About Us"} />
      <FlexCard flexItemsArray={aboutUs} />
    </div>
  );
}

export default About;
