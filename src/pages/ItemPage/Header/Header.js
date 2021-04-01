import React from "react";
import styles from "./Header.module.css";
import "../../../components/colors.css";
import Button from "../../../components/Button/Button";
import { MailIcon } from "@primer/octicons-react";
import LogoIcon from "./LogoIcon";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <div>
          <LogoIcon />
        </div>
        <div>
          <ul className={styles.navigation}>
            <li className={styles.navigation__item}>
              <a href="#">Каталог</a>
            </li>
            <li className={styles.navigation__item}>
              <a href="#">Наши услуги</a>
            </li>
            <li className={styles.navigation__item}>
              <a href="#">Про нас</a>
            </li>
            <li className={styles.navigation__item}>
              <a href="#">Контакты</a>
            </li>
          </ul>
        </div>
        <div className={styles.buttons}>
          <Button
            variant="primary"
            text="Оставить заявку"
            icon={<MailIcon className={styles.btn__icon} />}
          />
          <Button variant="third" text="Укр" marginLeft="15" />
          <Button variant="secondary" text="Рус" marginLeft="15" />
        </div>
      </div>
    </div>
  );
};

export default Header;
