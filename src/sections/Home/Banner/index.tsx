import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {  Box } from "@material-ui/core";
import styles from "./style";
import Carousel from "react-multi-carousel";
import { card } from "../../../data";
import "react-multi-carousel/lib/styles.css";
const useStyles = makeStyles(styles);

export const Banner = () => {
  const classes = useStyles();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Box component="div" className={classes.box}>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={3000}
        customDot={null}
        ssr={false}
        showDots={false}
        renderButtonGroupOutside={true}
      >
        {card.map(({ image, title }) => {
          return (
            <img
              src={image}
              alt={title}
              key={image}
              className={classes.media}
            />
          );
        })}
      </Carousel>
    </Box>
  );
};
