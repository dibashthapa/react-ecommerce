import React from "react";
import { Banner } from "./Banner";
import { DrawerApp } from "./Drawer";
import {
  Route 
} from "@material-ui/core"
const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <DrawerApp />
    </React.Fragment>
  );
};


export default Home 
