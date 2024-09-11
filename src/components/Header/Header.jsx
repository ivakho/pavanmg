import React from "react";
import "./Header.css";
import Logo from "../Logo/Logo";
import Social from "../Social/Social";
import Nav from "../Nav/Nav";
import logoGradient from "../../assets/images/logo_gradient.svg";

const NAV_INFO = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "#about__id",
  },
  {
    title: "Tech Stack",
    link: "#tech__stack__id",
  },
  {
    title: "Projects",
    link: "#projects__id",
  },
  {
    title: "Contact",
    link: "#contacts__id",
  },
];

const Header = () => {
  return (
    <header className="header">
      <div className="header__column">
        <Logo logo={logoGradient} />
      </div>
      <div className="header__column">
        <Nav navItems={NAV_INFO} style={"default"} />
      </div>
      <div className="header__column">
        <Social />
      </div>
    </header>
  );
};

export default Header;
