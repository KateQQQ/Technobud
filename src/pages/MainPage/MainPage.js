import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Navigation from "./Navigation/Navigation";
// import styles from "./MainPage.module.css";
import ObjectsCatalog from "./ObjectsCatalog/ObjectsCatalog";

const ItemPage = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <ObjectsCatalog />
      <Footer />
    </div>
  );
};

export default ItemPage;
