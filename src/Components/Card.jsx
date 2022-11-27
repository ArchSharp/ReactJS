import React from "react";

const Card = ({ content, header, bottom, faIcon, faText, topMargin }) => {
  return (
    <>
      <div
        className={`card ${faText}`}
        id={header}
        style={{ marginTop: topMargin }}
      >
        {header !== "" ? <div className="cardHeader">{header}</div> : ""}
        {faIcon !== "" ? (
          <i className={faIcon} aria-hidden="true">
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
