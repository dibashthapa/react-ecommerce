import React from "react";
import { Banner } from "../../components/Banner/Banner"
import { Navbar } from "../../components/Navbar/Navbar"
import { Product } from "../../components/Product/Product"
const Home:React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <Product />
    </React.Fragment>
  );
};

export default Home
