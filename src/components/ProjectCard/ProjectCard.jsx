import React from "react";
import styles from "./ProjectCard.module.css";
import linkIcon from "../../assets/images/icons/link.svg";
import githubIcon from "../../assets/images/icons/github.svg";

const ProjectCard = ({ img, title, paragraph, techStack, preview, github }) => {
  return (
    <article className={styles.card}>
      <img className={styles.card__img} src={img} alt={title} />
      <div className={styles.card__info}>
        <h3 className={styles.card__title}>{title}</h3>
        <p className={styles.card__paragraph}>{paragraph}</p>
        <div className={styles.card__techStack}>
          Tech stack : <span className={styles.card__span}>{techStack}</span>
        </div>
        <div className={styles.card__links}>
          <a className={styles.card__link} href={preview} target="_blank">
            <img
              src={linkIcon}
              alt="link"
              className={`${styles.link__img} ${styles.linkIcon__img}`}
            />
            <span className={styles.link__text}>Live Preview</span>
          </a>
          <a className={styles.card__link} href={github} target="_blank">
            <img
              src={githubIcon}
              alt="github"
              className={`${styles.link__img} ${styles.githubIcon__img}`}
            />
            <span className={styles.link__text}>View Code</span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
