import React from "react";

const Lists = ({ listArray }) => {
  return (
    <>
      <div className="Lists">
        <ul>
          {listArray.map((listItem, index) => {
            return <li key={index}>{listItem}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default Lists;
