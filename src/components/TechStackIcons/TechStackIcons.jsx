import React from "react";
import styles from "./TechStackIcons.module.css";
import htmlIcon from "../../assets/images/icons/html.svg";
import cssIcon from "../../assets/images/icons/css.svg";
import jsIcon from "../../assets/images/icons/js.svg";
import reactIcon from "../../assets/images/icons/react.svg";
import reduxIcon from "../../assets/images/icons/redux.svg";
import bootstrapIcon from "../../assets/images/icons/bootstrap.svg";
import tailwindIcon from "../../assets/images/icons/tailwind.svg";
import saasIcon from "../../assets/images/icons/saas.svg";
import gitIcon from "../../assets/images/icons/git.svg";
import greensockIcon from "../../assets/images/icons/greensock.svg";
import vscodeIcon from "../../assets/images/icons/vscode.svg";
import githubIcon from "../../assets/images/icons/github.svg";

const TechStackIcons = () => {
  return (
    <div className={styles.techStackIcons__container}>
      <img
        className={`${styles.teckStackIcons__img} ${styles.html__icon}`}
        src={htmlIcon}
        alt="HTML"
      />
      <img className={`${styles.teckStackIcons__img} ${styles.css__icon}`} src={cssIcon} alt="CSS" />
      <img className={`${styles.teckStackIcons__img} ${styles.js__icon}`} src={jsIcon} alt="JS" />
      <img
        className={`${styles.teckStackIcons__img} ${styles.react__icon}`}
        src={reactIcon}
        alt="React"
      />
      <img
        className={`${styles.teckStackIcons__img} ${styles.redux__icon}`}
        src={reduxIcon}
        alt="Redux"
      />
      <img
        className={`${styles.teckStackIcons__img} ${styles.bootstrap__icon}`}
        src={bootstrapIcon}
        alt="Bootstrap"
      />
      <img
        className={`${styles.teckStackIcons__img} ${styles.tailwind__icon}`}
        src={tailwindIcon}
        alt="Tailwind"
      />
      <img
        className={`${styles.teckStackIcons__img} ${styles.saas__icon}`}
        src={saasIcon}
        alt="Saas"
      />
      <img className={`${styles.teckStackIcons__img} ${styles.git__icon}`} src={gitIcon} alt="Git" />
      <img
        className={`${styles.teckStackIcons__img} ${styles.greensock__icon}`}
        src={greensockIcon}
        alt="Greensock"
      />
      <img
        className={`${styles.teckStackIcons__img} ${styles.vscode__icon}`}
        src={vscodeIcon}
        alt="VSCode"
      />
      <img
        className={`${styles.teckStackIcons__img} ${styles.github__icon}`}
        src={githubIcon}
        alt="Github"
      />
    </div>
  );
};

export default TechStackIcons;
