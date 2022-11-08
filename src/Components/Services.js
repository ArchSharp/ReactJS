import React from "react";
import CenteredHeadingUnderline from "./CenteredHeadingUnderline";
import FlexCard from "./FlexCard";
import { datas } from "../Datas/serviceData";

const Services = () => {
  return (
    <div>
      {" "}
      <CenteredHeadingUnderline title={"Services"} />
      <FlexCard flexItemsArray={datas} />
    </div>
  );
};

export default Services;
