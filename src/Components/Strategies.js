import React from "react";
import CenteredHeadingUnderline from "./CenteredHeadingUnderline";
import FlexCard from "./FlexCard";
import { datas } from "../Datas/strategiesData";

const Strategies = () => {
  return (
    <div>
      <CenteredHeadingUnderline title={"Strategies"} />
      <FlexCard flexItemsArray={datas} />
    </div>
  );
};

export default Strategies;
