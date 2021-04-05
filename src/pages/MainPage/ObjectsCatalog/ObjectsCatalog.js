import React from "react";
import styles from "./ObjectsCatalog.module.css";
import "../../../components/colors.css";
import Button from "../../../components/Button/Button";
import { SyncIcon } from "@primer/octicons-react";
import { SearchIcon } from "@primer/octicons-react";
import ObjectCard from "../ObjectCard/ObjectCard";

const ObjectsCatalog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Каталог объектов</h2>

          <div className={styles.filterContainer}>
            <form className={styles.form}>
              <select className={styles.list}>
                <option value="AllCities">Все города</option>
                <option value="Kiev">Киев</option>
                <option value="Poltava">Полтава</option>
              </select>
              <select className={styles.list}>
                <option value="AllRegions">Все регионы</option>
                <option value="Region1">Регион1</option>
                <option value="Region2">Регион2</option>
                <option value="Region3">Регион3</option>
                <option value="Region4">Регион4</option>
              </select>
            </form>
            <form action="" method="get" className={styles.searchForm}>
              <input
                name="s"
                placeholder="Поиск"
                className="styles.searchInput"
                type="search"
              />
              <button type="submit" className="styles.searchButton">
                <SearchIcon fill="blue" />
              </button>
            </form>
          </div>
        </div>
        <div className={styles.objectCard}>
          <ObjectCard />
          <ObjectCard />
          <ObjectCard />
          <ObjectCard />
        </div>
        <div className={styles.button}>
          <Button
            variant="primary"
            outlined="blue"
            text="Загрузить еще 6 объектов"
            icon={<SyncIcon className={styles.syncIcon} />}
          />
        </div>
      </div>
    </div>
  );
};

export default ObjectsCatalog;
