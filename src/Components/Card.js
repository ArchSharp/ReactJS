import React from "react";

const Card = ({ content, header, faIcon, faText }) => {
  return (
    <>
      <div className="card">
        {header !== "" ? <div className="cardHeader">{header}</div> : ""}
        {faIcon !== "" ? (
          <i class={faIcon} aria-hidden="true">
            <span> {faText}</span>
          </i>
        ) : (
          ""
        )}
        <div className="cardContent">{content}</div>
      </div>
    </>
  );
};

export default Card;
