import React from "react";
import styles from "./Footer.module.scss";
import { useSelector } from "react-redux";

const Footer = () => {
  const {
    theme: { isLight },
  } = useSelector((state) => state);
  return (
    <div className={`${styles.container} ${isLight ? "" : styles.dark}`}>
      Copyright © Junqi Su
    </div>
  );
};

export default Footer;
