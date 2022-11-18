import React from "react";
import Card from "./Card";

const FlexCard = ({ flexItemsArray }) => {
  return (
    <>
      <div className="flexCard">
        {flexItemsArray.map((flexItem, index) => {
          const {
            header,
            cardContent,
            cardBottom,
            cardIcon,
            iconText,
            topMargin,
          } = flexItem;
          return (
            <Card
              content={cardContent}
              header={header}
              faIcon={cardIcon}
              faText={iconText}
              bottom={cardBottom}
              topMargin={topMargin}
            />
          );
        })}
      </div>
    </>
  );
};

export default FlexCard;
