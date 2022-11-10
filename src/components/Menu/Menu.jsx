import React from "react";
import styles from "./Menu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faScrewdriverWrench,
  faLightbulb,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const linksInfo = [
  { id: 1, name: "Home", icon: faHouse },
  { id: 2, name: "Skills", icon: faScrewdriverWrench },
  { id: 3, name: "Projects", icon: faLightbulb },
  { id: 4, name: "Experiences", icon: faBriefcase },
];

const Menu = () => {
  const {
    theme: { isLight },
  } = useSelector((state) => state);
  return (
    <div className={`${styles.container} ${isLight ? "" : styles.dark}`}>
      <div className={styles.linksWrapper}>
        {linksInfo.map((link) => (
          <div key={link.id} className={styles.link}>
            <FontAwesomeIcon icon={link.icon} />
            <div>{link.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
