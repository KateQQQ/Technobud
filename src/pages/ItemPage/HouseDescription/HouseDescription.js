import React from "react";
import styles from "./HouseDescription.module.css";
import "../../../components/colors.css";
import Button from "../../../components/Button/Button";
import { MailIcon } from "@primer/octicons-react";
import PlaceIcon from "./icons/PlaceIcon";
import PriceIcon from "./icons/PriceIcon";
import AddressIcon from "./icons/AddressIcon";
import StatusIcon from "./icons/StatusIcon";

const HouseDescription = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <div className={styles.objectDescription}>
          <h1 className={styles.objectName}>
            Полное название <br /> объекта
          </h1>
          <ul className={styles.objectParams}>
            <li className={styles.param}>
              <span className={styles.paramsIcon}>
                <PlaceIcon />
              </span>
              Город, Район
            </li>
            <li className={styles.param}>
              <span className={styles.paramsIcon}>
                <AddressIcon />
              </span>
              Адрес
            </li>
            <li className={styles.param}>
              <span className={styles.paramsIcon}>
                <StatusIcon />
              </span>
              Статус
            </li>
            <li className={styles.param}>
              <span className={styles.paramsIcon}>
                <PriceIcon />
              </span>
              Цена
            </li>
          </ul>
          <Button
            variant="primary"
            size="big"
            text="Оставить заявку"
            icon={<MailIcon className={styles.buttonIcon} />}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default HouseDescription;
