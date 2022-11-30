import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const FlexCard = ({ flexItemsArray, range }) => {
  const [fadeCSS, setFadeCSS] = useState("fade");
  useEffect(() => {
    setFadeCSS("fade");
    const interval = setInterval(() => {
      setFadeCSS("");
    }, 2000);
    return () => clearInterval(interval);
  }, [range]);
  return (
    <>
      <div className={`flexCard ${fadeCSS}`}>
        {flexItemsArray.map((eachImg, index) => {
          const { imgUrl, OnlineImgUrl } = eachImg;
          //console.log("range ", range);
          return (
            <>
              {((range === 3 && index < 3) ||
                (range !== 3 &&
                  range > 3 &&
                  index >= range - 3 &&
                  index < range)) && (
                <div className="card2">
                  <a
                    href={OnlineImgUrl}
                    target="_blank"
                    rel="noreferrer"
                    key={index}
                  >
                    <img src={imgUrl} alt="someimages" srcset="" />
                  </a>
                </div>
              )}
            </>
          );
        })}
      </div>
    </>
  );
};

export default FlexCard;
