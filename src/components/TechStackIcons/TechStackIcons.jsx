import React from "react";
import "./TechStackIcons.css";
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
    <div className="techStackIcons__container">
      <img
        className="teckStackIcons__img html__icon"
        src={htmlIcon}
        alt="HTML"
      />
      <img className="teckStackIcons__img css__icon" src={cssIcon} alt="CSS" />
      <img className="teckStackIcons__img js__icon" src={jsIcon} alt="JS" />
      <img
        className="teckStackIcons__img react__icon"
        src={reactIcon}
        alt="React"
      />
      <img
        className="teckStackIcons__img redux__icon"
        src={reduxIcon}
        alt="Redux"
      />
      <img
        className="teckStackIcons__img bootstrap__icon"
        src={bootstrapIcon}
        alt="Bootstrap"
      />
      <img
        className="teckStackIcons__img tailwind__icon"
        src={tailwindIcon}
        alt="Tailwind"
      />
      <img
        className="teckStackIcons__img saas__icon"
        src={saasIcon}
        alt="Saas"
      />
      <img className="teckStackIcons__img git__icon" src={gitIcon} alt="Git" />
      <img
        className="teckStackIcons__img greensock__icon"
        src={greensockIcon}
        alt="Greensock"
      />
      <img
        className="teckStackIcons__img vscode__icon"
        src={vscodeIcon}
        alt="VSCode"
      />
      <img
        className="teckStackIcons__img github__icon"
        src={githubIcon}
        alt="Github"
      />
    </div>
  );
};

export default TechStackIcons;
