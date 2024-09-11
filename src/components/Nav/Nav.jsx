import React from "react";
import styles from "./Nav.module.css";
import classNames from "classnames";

const Nav = ({ navItems, style = "default" }) => {
  const liClass = classNames(styles.nav__li, {
    [styles.nav__liSmall]: style === "small",
  });

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__ul}>
        {navItems.map((item, index) => (
          <li key={index} className={liClass}>
            <a className={styles.nav__link} href={item.link}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
