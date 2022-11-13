import React, { Fragment } from "react";
import styles from "./Home.module.scss";
import Typing from "react-typing-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faComputerMouse,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { switchTheme } from "../../store/slices/theme";
import { Parallax } from "react-scroll-parallax";
import { jobTitles, socialMediaList } from "../../static";

const typingText = (
  <Typing loop={true}>
    <Typing.Speed ms={50} />
    {jobTitles.map((jobTitle, index) => (
      <Fragment key={index}>
        <span>{jobTitle.name}</span>
        <Typing.Delay ms={1000} />
        <Typing.Backspace count={20} />
      </Fragment>
    ))}
  </Typing>
);

const Home = () => {
  const {
    theme: { isLight },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <h1>Hello, my name is Junqi Su</h1>
      <div className={styles.title}>
        <span>I'm a</span>&nbsp;
        {typingText}
      </div>
      <div className={styles.socialMedia}>
        {socialMediaList.map((media) => (
          <a
            key={media.id}
            href={media.href}
            target="_blank"
            rel="noreferrer"
            className={isLight ? "" : styles.dark}
          >
            <FontAwesomeIcon icon={media.icon} />
          </a>
        ))}
      </div>
      <div
        className={`${styles.themeSwitchButton} ${isLight ? "" : styles.dark}`}
        onClick={() => dispatch(switchTheme())}
      >
        <FontAwesomeIcon icon={isLight ? faMoon : faSun} />
      </div>
      <Parallax opacity={[1, -1]} className={styles.scrollDownButton}>
        <div>
          <FontAwesomeIcon icon={faComputerMouse} />
        </div>
        <span>Scroll Down</span>
        <div className={styles.arrowIcon}>
          <FontAwesomeIcon icon={faArrowDown} />
        </div>
      </Parallax>
    </div>
  );
};

export default Home;
