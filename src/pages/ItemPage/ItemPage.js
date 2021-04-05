import React from "react";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
import HouseInformation from "./HouseInformation/HouseInformation";
import HouseDescription from "./HouseDescription/HouseDescription";

const ItemPage = () => {
  return (
    <div>
      <Navigation />
      <HouseDescription />
      <HouseInformation />
      <Footer />
    </div>
  );
};

export default ItemPage;
