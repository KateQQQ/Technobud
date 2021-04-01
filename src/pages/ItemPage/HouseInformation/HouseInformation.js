import React from "react";
import styles from "./HouseInformation.module.css";
import "../../../components/colors.css";
import NewsIcon from "./icons/NewsIcon";
import PlanIcon from "./icons/PlanIcon";
import InfoIcon from "./icons/InfoIcon";

const HouseInformation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <button className={styles.button}>
              <span className={styles.listIcon}>
                <InfoIcon />
              </span>
              <p>Информация про объект</p>
            </button>
          </li>
          <li className={styles.listItem}>
            <button className={styles.button}>
              <span className={styles.listIcon}>
                <PlanIcon />
              </span>
              <p>Планировка квартир</p>
            </button>
          </li>
          <li className={styles.listItem}>
            <button className={styles.button}>
              <span className={styles.listIcon}>
                <NewsIcon />
              </span>
              <p>Новости</p>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default HouseInformation;
