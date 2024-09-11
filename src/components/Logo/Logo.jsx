import React from "react";
import styles from "./Logo.module.css";

const Logo = ({ logo }) => {
  return (
    <a className={styles.logo__link} href="/">
      <img className={styles.logo__img} src={logo} alt="logo" />
    </a>
  );
};

export default Logo;
