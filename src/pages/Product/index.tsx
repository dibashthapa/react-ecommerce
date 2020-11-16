import React from "react";
import styles from "./style";
import {
  Card,
  Grid,
  CardMedia,
  Typography,
  CardContent,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);
export const Product = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container>
        <Grid container>
          <Grid xs={5} item>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image="https://res.cloudinary.com/redq-inc/image/upload/v1589614569/pickbazar/grocery/VeggiePlatter_ztcg0m.jpg"
                title="image"
              />
            </Card>
          </Grid>
          <Grid xs={5} item>
            <Card>
              <CardContent>
                <Typography component="p" variant="h4" className={ classes.title } >Mix Vegetable Platter</Typography>
                <Typography component="p" variant="subtitle2" className={ classes.description}>
                  Spinach (Spinacia oleracea) is a leafy green flowering plant
                  native to central and western Asia. It is of the order
                  Caryophyllales, family Amaranthaceae, subfamily
                  Chenopodioideae. Its leaves are a common edible vegetable
                  consumed either fresh.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
