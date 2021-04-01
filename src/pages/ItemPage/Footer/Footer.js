import React from "react";
import styles from "./Footer.module.css";
import "../../../components/colors.css";
import Button from "../../../components/Button/Button";
import FooterLogoIcon from "./icons/FooterLogoIcon";
import PhoneIcon from "./icons/PhoneIcon";
import PlaceIcon from "./icons/PlaceIcon";
import InstagramIcon from "./icons/InstagramIcon";
import FacebookIcon from "./icons/FacebookIcon";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <div className={styles.wrapper}>
          <FooterLogoIcon />
          <p className={styles.developmentInfo}>
            development by{" "}
            <a
              className={styles.developmentInfoLink}
              href="https://github.com/KateQQQ"
              target="_blanc"
            >
              {" "}
              Kate
            </a>
            , Copyright © 2021
          </p>
        </div>
        <div className={styles.wrapper}>
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
          <div className={styles.contact}>
            <Button variant="primary" outlined="blue" text="Оставить заявку" />
            <div className={styles.contactInfo}>
              <p className={styles.contactInfoText}>
                <span className={styles.contactInfoIcon}>
                  <PhoneIcon />
                </span>
                +380 50 500 50 50
              </p>

              <p className={styles.contactInfoText}>
                <span className={styles.contactInfoIcon}>
                  <PlaceIcon />
                </span>
                м. Полтава вул. Гоголя 4
              </p>
            </div>
            <div className={styles.socialMedia}>
              <InstagramIcon />
              <FacebookIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
