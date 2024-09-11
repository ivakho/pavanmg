import React from "react";
import "./About.css";
import aboutImg from "../../assets/images/about_img.png";
import wavingHand from "../../assets/images/icons/waving_hand.png";

const About = () => {
  return (
    <section className="about__section" id="about__id">
      <h1 className="about__title">
        <span className="title__first-line">
          Hi <img className="waving__hand" src={wavingHand} alt="waving hand" />
          ,
        </span>
        <span>My name is</span>
        <span className="about__span">Pavan MG</span>
        <span>I build things for web</span>
      </h1>
      <img className="about__img" src={aboutImg} alt="about img" />
    </section>
  );
};

export default About;
