import React from "react";
import styles from "./About.module.css";
import aboutImg from "../../assets/images/about_img.png";
import wavingHand from "../../assets/images/icons/waving_hand.png";

const About = () => {
  return (
    <section className={styles.about__section} id="about__id">
      <h1 className={styles.about__title}>
        <span className={styles.title__firstLine}>
          Hi <img className={styles.waving__hand} src={wavingHand} alt="waving hand" />
          ,
        </span>
        <span>My name is</span>
        <span className={styles.about__span}>Pavan MG</span>
        <span>I build things for web</span>
      </h1>
      <img className={styles.about__img} src={aboutImg} alt="about img" />
    </section>
  );
};

export default About;
