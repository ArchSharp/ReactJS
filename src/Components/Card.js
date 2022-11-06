import React from "react";

const Card = ({ content, header }) => {
  return (
    <>
      <div className="card">
        <div className="cardHeader">{header}</div>
        <div className="cardContent">{content}</div>
      </div>
    </>
  );
};

export default Card;
