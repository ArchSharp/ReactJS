import React from "react";

const CenteredHeadingUnderline = ({ title }) => {
  return (
    <div>
      {title !== "" ? (
        <div className="sectionUnderline" id={title}>
          <h3 className="aboutTitle">{title}</h3>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CenteredHeadingUnderline;
