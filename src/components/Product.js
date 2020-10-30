import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import image from "../data/image";
import { Grid, Container } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  grid: {
 
    height: 352,
  },
  media: {
    height: 160,
  },
  card: {
    margin: 16,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
const Product = () => {
  const classes = useStyles();
  const [images, setImages] = React.useState();

  React.useEffect(() => {
    setImages(image);
  }, []);
  return (
    <React.Fragment>
      <Container>
        <Grid container spacing={4} className={classes.grid}>
          {images &&
            images.map(function ({ src, name, price }) {
              return (
               
                  <Grid
                    item
                    component={Card}
                    xs={2}
                    className={classes.card}
                    key={name}
                  > <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={src}
                      title={name}
                    />
                    </CardActionArea>
                    <CardContent>
                      <Typography>{name}</Typography>
                    </CardContent>
                    
                  </Grid>
               
              );
            })}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Product;
