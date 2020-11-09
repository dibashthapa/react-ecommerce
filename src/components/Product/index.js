import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import image from "../../data/image";
import { Grid, Container, CardActions } from "@material-ui/core";
import styles from "./style";
import { Skeleton } from "@material-ui/lab";
import IconButton from "@material-ui/core/IconButton";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
const useStyles = makeStyles(styles);

const Product = () => {
  const classes = useStyles();
  const [images, setImages] = React.useState();
  const [isClicked, setIsClicked] = React.useState(false);
  const [currentId, setCurrentid] = React.useState({ id: 0 });
  React.useEffect(() => {
    setImages(image);
  }, []);

  const handleClick = (e) => {
    const { id } = e.currentTarget.dataset;
    setIsClicked(true);
    setCurrentid({...id , id:id});
    console.log(currentId.id)
  };
  return (
    <React.Fragment>
      <Container>
        <Grid container spacing={4} className={classes.grid}>
          {images ? (
            images.map(function ({ src, name, price }, index) {
              return (
                <Grid
                  item
                  component={Card}
                  sm={6}
                  md={4}
                  lg={2}
                  className={classes.card}
                  classes={{
                    "grid-sm-6": classes.grid6,
                  }}
                  dataid={index}
                  key={index}
                >
                  {" "}
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={src}
                      title={name}
                    />
                  </CardActionArea>
                  <CardContent>
                    <Typography noWrap>{name}</Typography>
                    <Typography noWrap> {price} </Typography>
                  </CardContent>
                  <CardActions>
                    {(isClicked && currentId.id=== index ) ?  (
                      <IconButton
                        color="primary"
                        className={classes.cardNumber}
                        onClick={handleClick}
                        disableRipple
                        data-id={index}
                        disableFocusRipple
                      >
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: "bold",
                            padding: "2px 4px",
                          }}
                        >
                          -
                        </span>
                        <span style={{ fontSize: "12px", padding: "2px 4px" }}>
                          4
                        </span>
                        <span
                          style={{
                            fontSize: "12px",
                            padding: "2px 4px",
                            fontWeight: "bold",
                          }}
                        >
                          +
                        </span>
                      </IconButton>
                    ) : (
                      <IconButton
                        color="primary"
                        className={classes.cartButton}
                        onClick={handleClick}
                        data-id={index}
                      >
                        <ShoppingBasketIcon
                          fontSize="small"
                          style={{ fontSize: "13px", marginRight: "8px" }}
                        />
                        <Typography
                          color="inherit"
                          component="span"
                          style={{ fontSize: "13px" }}
                          variant="subtitle"
                        >
                          Cart
                        </Typography>
                      </IconButton>
                    )}
                  </CardActions>
                </Grid>
              );
            })
          ) : (
            <span>
              <Skeleton variant="rect" height={160} width={140} />
              <Skeleton variant="text" />
            </span>
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Product;
