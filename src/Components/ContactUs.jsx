import React from "react";
import CenteredHeadingUnderline from "./CenteredHeadingUnderline";
import Lists from "./Lists";
import {
  ImFacebook2,
  ImTwitter,
  ImInstagram,
  ImLinkedin,
} from "react-icons/im";

var contactHandles = [
  <a
    href="https://web.facebook.com/raphael.tunji2/"
    target="_blank"
    rel="noreferrer"
  >
    <ImFacebook2 className="fa contactIcon" />{" "}
    <span className="hideContact">Facebook</span>
  </a>,
  <a href="https://twitter.com/ArchIntel1" target="_blank" rel="noreferrer">
    <ImTwitter className="fa contactIcon" />{" "}
    <span className="hideContact">Twitter</span>
  </a>,
  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
    <ImInstagram className="fa contactIcon" />{" "}
    <span className="hideContact">Instagram</span>
  </a>,
  <a
    href="http://www.terawork.com/home/archraphael"
    target="_blank"
    rel="noreferrer"
  >
    <img
      src="./terawork.png"
      alt="error"
      style={{ width: "30px" }}
      className="contactIcon"
    ></img>{" "}
    <span className="hideContact">TeraWork</span>
  </a>,
  <a
    href="https://www.linkedin.com/in/raphael-tunji-34a1073a/"
    target="_blank"
    rel="noreferrer"
  >
    <ImLinkedin className="fa contactIcon" />{" "}
    <span className="hideContact">LinkedIn</span>
  </a>,
  <a
    href="https://www.mql5.com/en/users/archraphael"
    target="_blank"
    rel="noreferrer"
  >
    <img
      src="./mql5.png"
      alt="error"
      style={{ width: "50px", height: "20px" }}
      className="contactIcon"
    ></img>{" "}
    <span className="hideContact">MQL5</span>
  </a>,
];

const ContactUs = () => {
  return (
    <div>
      <CenteredHeadingUnderline title={"Contact Us"} />
      <div className="contactUs">
        <div className="ctList">
          <Lists listArray={contactHandles} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
