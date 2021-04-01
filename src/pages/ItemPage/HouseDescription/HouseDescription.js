import React from "react";
import styles from "./HouseDescription.module.css";
import "../../../components/colors.css";
import Button from "../../../components/Button/Button";
import { MailIcon } from "@primer/octicons-react";
import PlaceIcon from "./icons/PlaceIcon";
import PriceIcon from "./icons/PriceIcon";
import AddressIcon from "./icons/AddressIcon";
import LeftIcon from "./icons/LeftIcon";
import RightIcon from "./icons/RightIcon";
import StatusIcon from "./icons/StatusIcon";
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper.scss";
// import "swiper/components/navigation/navigation.scss";
// import "swiper/components/pagination/pagination.scss";
// import "swiper/components/scrollbar/scrollbar.scss";

// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

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
        <div className={styles.objectImages}>
          <h1>Hyuna</h1>
        </div>
        <div className={styles.objectImagesPagination}>
          <Button
            className={styles.button}
            variant="third"
            outlined="light-grey"
            icon={<LeftIcon />}
            marginBottom="5"
          />
          <Button variant="third" outlined="light-grey" icon={<RightIcon />} />
          <p className={styles.pagination}>
            <span className={styles.paginationSpan}>2</span> - 6
          </p>
        </div>
        {/* <div className="swiper">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>
        </div> */}
      </div>
    </div>
  );
};
export default HouseDescription;
