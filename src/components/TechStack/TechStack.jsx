import React from "react";
import styles from "./TechStack.module.css";
import SectionDescription from "../SectionDescription/SectionDescription";
import TechStackIcons from "../TechStackIcons/TechStackIcons";

const TECH_DESCRIPTION = {
  title: "My Tech Stack",
  paragraph: "Technologies I’ve been working with recently",
  marginRight: "14px",
};

const TechStack = () => {
  return (
    <section className={styles.tech__section} id="tech__stack__id">
      <SectionDescription
        title={TECH_DESCRIPTION.title}
        paragraph={TECH_DESCRIPTION.paragraph}
        marginRight={TECH_DESCRIPTION.marginRight}
      />
      <TechStackIcons />
    </section>
  );
};

export default TechStack;
