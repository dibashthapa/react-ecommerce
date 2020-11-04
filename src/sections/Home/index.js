import React from "react";
import { Navbar } from "./Navbar";
import { Banner } from "./Banner";
import { DrawerApp } from "./Drawer";
const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <DrawerApp />
    </React.Fragment>
  );
};


export default Home 