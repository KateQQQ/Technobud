import React from "react";
import styles from "./ObjectCard.module.css";
import "../../../components/colors.css";
import { ChevronRightIcon } from "@primer/octicons-react";
const ObjectCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <div className={styles.objectInformation}>
          <div className={styles.wrapper}>
            <h3 className={styles.objectName}>Полное название объекта</h3>
            <button className={styles.button}>
              <ChevronRightIcon size="medium" fill="blue" />
            </button>
          </div>
          <p className={styles.objectPrice}>Цена - ХХ грн</p>
        </div>
      </div>
    </div>
  );
};

export default ObjectCard;
