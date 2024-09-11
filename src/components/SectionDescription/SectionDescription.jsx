import React from "react";
import styles from "./SectionDescription.module.css";

const SectionDescription = ({ title, paragraph, marginRight = "0px" }) => {
  return (
    <div className={styles.section__container}>
      <h2 className={styles.section__title}>{title}</h2>
      <p className={styles.section__paragraph} style={{ marginRight: marginRight }}>
        {paragraph}
      </p>
    </div>
  );
};

export default SectionDescription;
