import React from "react";
import "./Footer.css";
import Nav from "../Nav/Nav";
import { Credits } from "../Credits/Credits";

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
    title: "Technologies",
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

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__column">
        <Nav navItems={NAV_INFO} style={"small"} />
      </div>
      <div className="footer__column">
        <Credits />
      </div>
    </footer>
  );
};

export default Footer;
