import React from "react";
import CenteredHeadingUnderline from "./CenteredHeadingUnderline";
import FlexCard from "./FlexCard";

let datas = [
  {
    header: "History",
    cardContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magni vel eaque sequi libero, laboriosam enim voluptatibus obcaecati officia earum voluptatem accusamus alias quam vero sapiente dolore iure consectetur maxime!",
  },
  {
    header: "Mission",
    cardContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magni vel eaque sequi libero, laboriosam enim voluptatibus obcaecati officia earum voluptatem accusamus alias quam vero sapiente dolore iure consectetur maxime!",
  },
  {
    header: "Vision",
    cardContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magni vel eaque sequi libero, laboriosam enim voluptatibus obcaecati officia earum voluptatem accusamus alias quam vero sapiente dolore iure consectetur maxime!",
  },
];

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
