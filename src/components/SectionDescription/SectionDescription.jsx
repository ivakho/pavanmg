import React from "react";
import "./SectionDescription.css";

const SectionDescription = ({ title, paragraph, marginRight = "0px" }) => {
  return (
    <div className="section__container">
      <h2 className="section__title">{title}</h2>
      <p className="section__paragraph" style={{ marginRight: marginRight }}>
        {paragraph}
      </p>
    </div>
  );
};

export default SectionDescription;
