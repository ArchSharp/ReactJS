import React from "react";
import CenteredHeadingUnderline from "./CenteredHeadingUnderline";
import FlexCard from "./FlexCard";

let datas = [
  {
    header: "",
    cardContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magni vel eaque sequi libero, laboriosam enim voluptatibus obcaecati officia earum voluptatem accusamus alias quam vero sapiente dolore iure consectetur maxime!",
    cardIcon: "fa fa-graduation-cap",
    iconText: "Education",
  },
  {
    header: "",
    cardContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magni vel eaque sequi libero, laboriosam enim voluptatibus obcaecati officia earum voluptatem accusamus alias quam vero sapiente dolore iure consectetur maxime!",
    cardIcon: "fa fa-empire",
    iconText: "Development",
  },
  {
    header: "",
    cardContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magni vel eaque sequi libero, laboriosam enim voluptatibus obcaecati officia earum voluptatem accusamus alias quam vero sapiente dolore iure consectetur maxime!",
    cardIcon: "fa fa-code",
    iconText: "Optimization",
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
