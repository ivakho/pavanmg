import React from "react";
import "./Social.css";
import github from "../../assets/images/icons/github.svg";
import twitter from "../../assets/images/icons/twitter.svg";
import linkedin from "../../assets/images/icons/linkedin.svg";

const Social = ({
  githubIcon = github,
  twitterIcon = twitter,
  linkedinIcon = linkedin,
}) => {
  return (
    <ul className="social__ul">
      <li className="social__li">
        <a className="social__link" href="#" target="_blank">
          <img className="social__img" src={githubIcon} alt="github" />
        </a>
      </li>
      <li className="social__li">
        <a className="social__link" href="#" target="_blank">
          <img className="social__img" src={twitterIcon} alt="twitter" />
        </a>
      </li>
      <li className="social__li">
        <a className="social__link" href="#" target="_blank">
          <img className="social__img" src={linkedinIcon} alt="linkedin" />
        </a>
      </li>
    </ul>
  );
};

export default Social;
