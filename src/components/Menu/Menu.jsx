import React, { useState } from "react";
import styles from "./Menu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faScrewdriverWrench,
  faLightbulb,
  faBriefcase,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { switchMenu } from "../../store/slices/menu";

const linksInfo = [
  { id: 1, name: "Home", icon: faHouse, anchor: "home" },
  { id: 2, name: "Skills", icon: faScrewdriverWrench, anchor: "skills" },
  { id: 3, name: "Projects", icon: faLightbulb, anchor: "projects" },
  { id: 4, name: "Experiences", icon: faBriefcase, anchor: "experiences" },
];

const scrollToAnchor = (anchorname) => {
  if (anchorname) {
    const anchorElement = document.getElementById(anchorname);
    if (anchorElement) {
      anchorElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
};

const Menu = () => {
  const [activeLink, setActiveLink] = useState("home");
  const {
    theme: { isLight },
    menu: { isShow },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div
      className={`${styles.container} ${isLight ? "" : styles.dark} ${
        isShow ? styles.show : ""
      }`}
    >
      <div className={styles.linksWrapper}>
        {linksInfo.map((link) => (
          <div
            key={link.id}
            className={`${styles.link} ${
              link.anchor === activeLink ? styles.active : ""
            }`}
            onClick={() => {
              scrollToAnchor(link.anchor);
              setActiveLink(link.anchor);
              dispatch(switchMenu());
            }}
          >
            <FontAwesomeIcon icon={link.icon} />
            <div>{link.name}</div>
          </div>
        ))}
      </div>
      <div className={styles.closeIcon}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={() => dispatch(switchMenu())}
        />
      </div>
    </div>
  );
};

export default Menu;
