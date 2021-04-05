import React from "react";
import styles from "./Header.module.css";
import "../../../components/colors.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <div className={styles.image}>
          <div className={styles.stripes}></div>
          <h1 className={styles.title}>Современные технологии строительства</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
