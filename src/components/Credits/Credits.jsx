import React from "react";
import styles from "./Credits.module.css";

export const Credits = () => {
  return (
    <div className={styles.credits}>
      Designed and built by{" "}
      <span className={styles.credits__span}>Pavan MG</span> with{" "}
      <span className={styles.credits__span}>Love</span> &{" "}
      <span className={styles.credits__span}>Coffee</span>
    </div>
  );
};
