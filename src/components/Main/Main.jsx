import React from "react";
import styles from "./Main.module.css";
import About from "../About/About";
import TechStack from "../TechStack/TechStack";
import Projects from "../Projects/Projects";
import Contacts from "../Contacts/Contacts";

const Main = () => {
  return (
    <main className={styles.main}>
      <About />
      <TechStack />
      <Projects />
      <Contacts />
    </main>
  );
};

export default Main;
