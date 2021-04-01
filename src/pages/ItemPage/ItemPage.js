import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import HouseInformation from "./HouseInformation/HouseInformation";
import HouseDescription from "./HouseDescription/HouseDescription";

const ItemPage = () => {
  return (
    <div>
      <Header />
      <HouseDescription />
      <HouseInformation />
      <Footer />
    </div>
  );
};

export default ItemPage;
