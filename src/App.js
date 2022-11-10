import React from "react";
import styles from "./App.module.scss";
import "./global.scss";
import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import { useSelector } from "react-redux";

const App = () => {
  const {
    theme: { isLight },
  } = useSelector((state) => state);
  return (
    <div className={styles.container}>
      <Menu />
      <div className={`${styles.content} ${isLight ? "" : styles.dark}`}>
        <Home />
        <Skills />
        <Projects />
      </div>
    </div>
  );
};

export default App;