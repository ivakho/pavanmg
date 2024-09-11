import React from "react";
import "./Projects.css";
import SectionDescription from "../SectionDescription/SectionDescription";
import ProjectCard from "../ProjectCard/ProjectCard";
import project1_img from "../../assets/images/project1_img.png";
import project2_img from "../../assets/images/project2_img.png";
import project3_img from "../../assets/images/project3_img.png";
import project4_img from "../../assets/images/project4_img.png";
import project5_img from "../../assets/images/project5_img.png";
import project6_img from "../../assets/images/project6_img.png";

const PROJECTS_DESCRIPTION = {
  title: "Projects",
  paragraph: "Things I’ve built so far",
  marginRight: "40px",
};

const PROJECT_CARDS = [
  {
    img: project1_img,
    title: "Project Tile goes here",
    paragraph:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    techStack: "HTML , JavaScript, SASS, React",
    preview: "#",
    github: "#",
  },
  {
    img: project2_img,
    title: "Project Tile goes here",
    paragraph:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    techStack: "HTML , JavaScript, SASS, React",
    preview: "#",
    github: "#",
  },
  {
    img: project3_img,
    title: "Project Tile goes here",
    paragraph:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    techStack: "HTML , JavaScript, SASS, React",
    preview: "#",
    github: "#",
  },
  {
    img: project4_img,
    title: "Project Tile goes here",
    paragraph:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    techStack: "HTML , JavaScript, SASS, React",
    preview: "#",
    github: "#",
  },
  {
    img: project5_img,
    title: "Project Tile goes here",
    paragraph:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    techStack: "HTML , JavaScript, SASS, React",
    preview: "#",
    github: "#",
  },
  {
    img: project6_img,
    title: "Project Tile goes here",
    paragraph:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    techStack: "HTML , JavaScript, SASS, React",
    preview: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects__section" id="projects__id">
      <SectionDescription
        title={PROJECTS_DESCRIPTION.title}
        paragraph={PROJECTS_DESCRIPTION.paragraph}
        marginRight={PROJECTS_DESCRIPTION.marginRight}
      />
      <div className="project__cards">
        {PROJECT_CARDS.map((item, index) => (
          <ProjectCard
            key={index}
            img={item.img}
            title={item.title}
            paragraph={item.paragraph}
            techStack={item.techStack}
            preview={item.preview}
            github={item.github}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
