import React from "react";
import Github from "../Assests/Github.png";
import Linkedin from "../Assests/Linkedin.png";
import Mail from "../Assests/Mail.png";

const Footer = () => {
  const GitHubClick = () => {
    window.open("https://github.com/Sahanadeepak", "_blank");
  };
  const LinkedinClick = () => {
    window.open(
      "https://www.linkedin.com/in/sahana-mysore-deepak-279492ab/",
      "_blank"
    );
  };
  const MailClick = () => {
    const emailAddress = "sahani.sahanamd@gmail.com";
    const mailtoLink = `mailto:${emailAddress}`;
    window.location.href = mailtoLink;
  };
  return (
    <div className="flex flex-wrap justify-evenly text-white bg-black pb-3 pt-3">
      <div>
        <label>Designed and Developed by Sahana</label>
      </div>
      <div>
        <label>Copyright © 2025 Sahana Mysore Deepak</label>
      </div>
      <div className="grid grid-cols-3 gap-x-20 phone:gap-x-10 tablet:gap-x-10 phone:mt-2">
        <div onClick={LinkedinClick}>
          <img
            src={Linkedin}
            alt="linkedin pic"
            className="w-8 h-8 cursor-pointer"
          />
        </div>
        <div onClick={GitHubClick}>
          <img
            src={Github}
            alt="github pic"
            className="w-8 h-8 cursor-pointer"
          />
        </div>
        <div onClick={MailClick}>
          <img src={Mail} alt="mail pic" className="w-8 h-8 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
