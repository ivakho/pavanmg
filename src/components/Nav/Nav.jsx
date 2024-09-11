import React from "react";
import "./Nav.css";
import classNames from "classnames";

const Nav = ({ navItems, style = "default" }) => {
  const liClass = classNames("nav__li", {
    "nav__li-small": style === "small",
  });

  return (
    <nav className="nav">
      <ul className="nav__ul">
        {navItems.map((item, index) => (
          <li key={index} className={liClass}>
            <a className="nav__link" href={item.link}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
