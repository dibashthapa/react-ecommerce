import React, { MouseEvent, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import image from "../../data/image";
import { Grid, Container, CardActions } from "@material-ui/core";
import styles from "./Product.style";
import { Skeleton } from "@material-ui/lab";
import IconButton from "@material-ui/core/IconButton";
import {
  Card,
  Button,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import {
  removeCart,
  addToCart,
  addQuantity,
  subtractQuantity,
} from "../../store/actions/";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useDispatch, useSelector } from "react-redux";
import {  Link } from "react-router-dom"
const useStyles = makeStyles(styles);

export const Product = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  interface productInterface {
    id?: number;
    name: string;
    price: string;
    src: string;
    count?: number;
  }

  const [images, setImages] = useState<Array<productInterface>>([]);

  interface RootState {
    products: Array<productInterface>;
  }
  const product = useSelector((state: RootState) => state.products);
  React.useEffect(() => {
    setImages(image);
  }, []);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { id, name, price, src } = e.currentTarget.dataset;
    let productDetails = { id: parseInt(id!), name, price, src, count: 0 };
    dispatch(addToCart({ productDetails }));
    const parentElement = e.currentTarget.parentElement;
    const firstElement = parentElement?.firstElementChild as HTMLElement;
    firstElement.style.visibility = "visible";
  };

  const addCount = (e: MouseEvent<HTMLSpanElement>) => {
    const { id } = e.currentTarget.dataset;
    const productDetails = { id: parseInt(id!) };
    dispatch(addQuantity({ productDetails }));
  };

  const removeCount = (e: MouseEvent<HTMLSpanElement>) => {
    const { id, count } = e.currentTarget.dataset;
    const productDetails = { id: parseInt(id!), count: parseInt(count!) };
    dispatch(subtractQuantity({ productDetails }));
    const parentElement =
      e.currentTarget.parentElement?.parentElement?.parentElement;
    const firstElement = parentElement?.firstElementChild as HTMLElement;
    if (productDetails.count === 0) {
      dispatch(removeCart({ productDetails }));
      firstElement.style.visibility = "hidden";
    }
  };

  return (
    <React.Fragment>
      <Container>
        <Grid container spacing={4} className={classes.grid} >
          {images ? (
            images.map(function ({ src, name, price }, index: number) {
              return (
                <Grid
                  item
                  component={Card}
                  sm={6}
                  md={4}
                  lg={2}
                  xs={6}
                  className={classes.card}
                  classes={{
                    "grid-xs-6": classes.grid6,
                  }}
                  key={index}
                >
                  {" "}
                  <CardActionArea>
                        <Link to={`/product/${index}`} >
                    <CardMedia
                      className={classes.media}
                      image={src}
                      title={name}
                    />
                  </Link>
                  </CardActionArea>
                  <CardContent>
                    <Typography noWrap>{name}</Typography>
                    <Typography noWrap> {price} </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      color="primary"
                      className={classes.cardNumber}
                      key={index}
                      disableRipple
                      data-id={index}
                      style={{ visibility: "hidden" }}
                      data-name={name}
                      data-price={price}
                      data-src={src}
                      disableFocusRipple
                    >
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "bold",
                          padding: "2px 4px",
                        }}
                        data-id={index}
                        onClick={removeCount}
                        data-count={product
                          .filter((p) => p.id === index)
                          .map((p) => p.count)}
                      >
                        -
                      </span>
                      <span style={{ fontSize: "12px", padding: "2px 4px" }}>
                        {product
                          .filter((p) => p.id === index)
                          .map((p) => p.count)}
                      </span>
                      <span
                        style={{
                          fontSize: "14px",
                          padding: "2px 4px",
                          fontWeight: "bold",
                        }}
                        data-id={index}
                        onClick={addCount}
                      >
                        +
                      </span>
                    </Button>
                    <IconButton
                      color="primary"
                      className={classes.cartButton}
                      onClick={handleClick}
                      data-id={index}
                      data-src={src}
                      data-price={price}
                      data-name={name}
                    >
                      <ShoppingBasketIcon
                        fontSize="small"
                        style={{ fontSize: "13px", marginRight: "8px" }}
                      />
                      <Typography
                        color="inherit"
                        component="span"
                        style={{ fontSize: "13px" }}
                        variant="subtitle1"
                      >
                        Cart
                      </Typography>
                    </IconButton>
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
