import React from "react";
import Card from "./Card";

const FlexCard = ({ flexItemsArray }) => {
  return (
    <>
      <div className="flexCard">
        {flexItemsArray.map((flexItem, index) => {
          const { header, cardContent, cardIcon, iconText } = flexItem;
          return (
            <Card
              content={cardContent}
              header={header}
              faIcon={cardIcon}
              faText={iconText}
            />
          );
        })}
      </div>
    </>
  );
};

export default FlexCard;
