import React from "react";

const Card = ({ content, header, bottom, faIcon, faText }) => {
  return (
    <>
      <div className="card" id={header}>
        {header !== "" ? <div className="cardHeader">{header}</div> : ""}
        {faIcon !== "" ? (
          <i class={faIcon} aria-hidden="true">
            <span> {faText}</span>
          </i>
        ) : (
          ""
        )}
        <div className="cardContent">{content}</div>
        <br />
        <div className="cardBottom">{bottom}</div>
      </div>
    </>
  );
};

export default Card;
