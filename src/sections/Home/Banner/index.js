import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid, Box } from "@material-ui/core";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { IconButton } from "@material-ui/core";
import styles from "./style";
import { card } from "../../../data";
const useStyles = makeStyles(styles);
export const Banner = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.box}>
      <Grid container>
        <Grid container item xs={12} spacing={2}>
          <Grid item xs>
            <IconButton className={classes.arrowIcon}>
              <KeyboardArrowLeftIcon />
            </IconButton>
          </Grid>
          {card.map(({ image, title }) => {
            return (
              <Grid item xs={3} classes={{ "grid-xs-3": classes.grid3 }}>
                <Card className={classes.root}>
                  <CardMedia
                    className={classes.media}
                    image={image}
                    title={title}
                  />
                </Card>
              </Grid>
            );
          })}

          <Grid item xs classes={{ "grid-xs-3": classes.grid3 }}>
            <IconButton className={classes.arrowIcon}>
              <KeyboardArrowRightIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
