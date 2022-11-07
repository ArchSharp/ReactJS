import React from "react";
import CenteredHeadingUnderline from "./CenteredHeadingUnderline";
import FlexCard from "./FlexCard";
import List from "./Lists";

let xdata = ["one", "two", "three"];
let xdata2 = ["four", "five", "six", "seven", "eight"];

let datas = [
  {
    header: "History",
    cardContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magni vel eaque sequi libero, laboriosam enim voluptatibus obcaecati officia earum voluptatem accusamus alias quam vero sapiente dolore iure consectetur maxime!",
  },
  {
    header: "Mission",
    cardContent: <List listArray={xdata} />,
  },
  {
    header: "Vision",
    cardContent: <List listArray={xdata2} />,
  },
];

function About() {
  return (
    <>
      <CenteredHeadingUnderline title={"About Us"} />
      <FlexCard flexItemsArray={datas} />
    </>
  );
}

export default About;
