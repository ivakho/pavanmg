import React from "react";
import "./ProjectCard.css";
import linkIcon from "../../assets/images/icons/link.svg";
import githubIcon from "../../assets/images/icons/github.svg";

const ProjectCard = ({ img, title, paragraph, techStack, preview, github }) => {
  return (
    <article className="card">
      <img className="card__img" src={img} alt={title} />
      <div className="card__info">
        <h3 className="card__title">{title}</h3>
        <p className="card__paragraph">{paragraph}</p>
        <div className="card__tech-stack">
          Tech stack : <span className="card__span">{techStack}</span>
        </div>
        <div className="card__links">
          <a className="card__link" href={preview} target="_blank">
            <img
              src={linkIcon}
              alt="link"
              className="link__img linkIcon__img"
            />
            <span className="link__text">Live Preview</span>
          </a>
          <a className="card__link" href={github} target="_blank">
            <img
              src={githubIcon}
              alt="github"
              className="link__img githubIcon__img"
            />
            <span className="link__text">View Code</span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
