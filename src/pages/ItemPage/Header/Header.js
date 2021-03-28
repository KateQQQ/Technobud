import React from "react";
import styles from "./Header.module.css";
import "../../../components/colors.css";
import Button from "../../../components/Button/Button";
import { MailIcon } from "@primer/octicons-react";
import LogoIcon from "../LogoIcon";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <div>
          <LogoIcon />
        </div>
        <div>
          <ul className={styles.navigation}>
            <li className={styles.navigation__item}>Каталог</li>
            <li className={styles.navigation__item}>Наши услуги</li>
            <li className={styles.navigation__item}>Про нас</li>
            <li className={styles.navigation__item}>Контакты</li>
          </ul>
        </div>
        <div className={styles.buttons}>
          <Button
            variant="primary"
            text="Оставить заявку"
            icon={<MailIcon className={styles.btn__icon} />}
          />
          <Button variant="third" text="Укр" />
          <Button variant="secondary" text="Рус" />
        </div>
      </div>
    </div>
  );
};

export default Header;
