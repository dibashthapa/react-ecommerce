import React from "react";
import { BannerCard } from "../../components";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "60px",
      boxShadow: "rgba(0, 0, 0, 0.06) 0px 1px 2px",
    
  },
}));
export const Banner = () => {
    const classes = useStyles()
  return (
   
      <BannerCard />  );
};


