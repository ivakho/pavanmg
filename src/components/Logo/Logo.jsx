import React from "react";
import "./Logo.css";

const Logo = ({ logo }) => {
  return (
    <a className="logo__link" href="/">
      <img className="logo__img" src={logo} alt="logo" />
    </a>
  );
};

export default Logo;
