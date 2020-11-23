import React from "react";
import styles from "./Product.style";
import { Navbar } from '../../components'
import {
  Card,
  Grid,
  CardMedia,
  Typography,
  CardContent,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import image from "../../data/image";
import { useParams } from "react-router-dom";
interface paramType {
  id: string;
}

const useStyles = makeStyles(styles);
const Product: React.FC = () => {
  const { id } = useParams<paramType>();
  console.log(id);
  const classes = useStyles();
  return (
    <React.Fragment>
      <Navbar />
      <Container>
        
        <Grid container>
        {image
          .filter((value, index) => index === parseInt(id))
          .map((product) => {
            return (
              <React.Fragment>
                <Grid lg={6} xs={12} item>
                  <Card className={classes.root}>
                    <CardMedia
                      className={classes.media}
                      image={product.src}
                      title={product.name}
                    />
                  </Card>
                </Grid>
                <Grid lg={6} item xs={12}>
                  <Card className= { classes.producteDetails }>
                    <CardContent>
                      <Typography
                        component="p"
                        variant="h4"
                      >
                        {product.name}
                      </Typography>
                      <Typography
                        component="p"
                        variant="subtitle2"
                      >
                        Spinach (Spinacia oleracea) is a leafy green flowering
                        plant native to central and western Asia. It is of the
                        order Caryophyllales, family Amaranthaceae, subfamily
                        Chenopodioideae. Its leaves are a common edible
                        vegetable consumed either fresh.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </React.Fragment>
            );
          })}
        </Grid>
      </Container>
    </React.Fragment>
  );
};


export default Product
