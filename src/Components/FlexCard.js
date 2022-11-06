import React from "react";
import Card from "./Card";

const FlexCard = () => {
  return (
    <>
      <div className="flexCard">
        <Card
          content={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, dolore sunt! Excepturi ea explicabo hic nisi quam nam ex iure quas. Eveniet, voluptatem voluptatibus. Nam consectetur error rem animi debitis."
          }
          header={"History"}
        />
        <Card
          content={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, dolore sunt! Excepturi ea explicabo hic nisi quam nam ex iure quas. Eveniet, voluptatem voluptatibus. Nam consectetur error rem animi debitis."
          }
          header={"Mission"}
        />
        <Card
          content={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, dolore sunt! Excepturi ea explicabo hic nisi quam nam ex iure quas. Eveniet, voluptatem voluptatibus. Nam consectetur error rem animi debitis."
          }
          header={"Vision"}
        />
      </div>
    </>
  );
};

export default FlexCard;
