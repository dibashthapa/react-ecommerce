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
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const useStyles = makeStyles({
  root: {},
  box:{padding:"60px", boxShadow: "rgba(0, 0, 0, 0.06) 0px 1px 2px"},
  arrowIcon:{
    position:"relative",
    top:"30%"
  },
  media: {
    height: 180,
  },
});

export const BannerCard = (props) => {
  const classes = useStyles();

  return (
    <Box component="div" className={ classes.box }>
      <Grid container>
        <Grid container item xs={12} spacing={2}>
          <Grid item xs>
            <IconButton className={classes.arrowIcon}>
              <KeyboardArrowLeftIcon />
            </IconButton>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/card1.png"
                title="Contemplative Reptile"
              />
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/card2.png"
                title="Contemplative Reptile"
              />
            </Card>
          </Grid>
        
          <Grid item xs={3}>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/card3.png"
                title="Contemplative Reptile"
              />
            </Card>
          </Grid>
          <Grid item xs>
          <IconButton className={classes.arrowIcon}>
          <KeyboardArrowRightIcon />
        </IconButton>
          </Grid>
        </Grid>
      
      </Grid>
    </Box>
   
    
  );

  }