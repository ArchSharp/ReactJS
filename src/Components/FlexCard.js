import React from "react";
import Card from "./Card";

const FlexCard = ({ flexItemsArray }) => {
  return (
    <>
      <div className="flexCard">
        {flexItemsArray.map((flexItem, index) => {
          const { header, cardContent } = flexItem;
          return <Card content={cardContent} header={header} />;
        })}
      </div>
    </>
  );
};

export default FlexCard;
