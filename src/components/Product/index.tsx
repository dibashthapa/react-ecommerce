import React, {ChangeEvent , MouseEvent, useState} from "react";
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
import { addToCart , addQuantity , subtractQuantity , removeCart , emptyCart } from '../../store/actions/'
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useDispatch , useSelector } from 'react-redux'
const useStyles = makeStyles(styles);

const Product = () => {
  const classes = useStyles();
  const dispatch = useDispatch()

  interface productInterface {
    id?:number,
    name:string , 
    price:string ,
    src:string,
    count?:number
  }
  const [images , setImages] = useState<Array<productInterface>>([])

  interface RootState{
    products:Array<productInterface>
  }

  const product  = useSelector((state:RootState) => state.products)
  React.useEffect(() => {
    setImages(image);
  }, []);

  const handleClick = (e:MouseEvent<HTMLButtonElement>) => {
    const { id, name, price, src, display } = e.currentTarget.dataset;

    if (display === "hidden") {
      e.currentTarget.style.display = "none";
    }
    let productDetails = { id: parseInt(id!), name, price, src, count: 0 };
    dispatch(addToCart({ productDetails }))
  };

  const addCount = (e:MouseEvent<HTMLSpanElement>) => {
    const { id } = e.currentTarget.dataset;
    const productDetails = {id:parseInt(id!)}
    dispatch(addQuantity({productDetails}) )
  };

  const removeCount = (e:MouseEvent<HTMLSpanElement>) => {
    const { id } = e.currentTarget.dataset;
    const productDetails = {id: parseInt(id!)}
    dispatch(subtractQuantity({productDetails}))
  };

  return (
    <React.Fragment>
      <Container>
        <Grid container spacing={4} className={classes.grid}>
          {images ? (
            images.map(function ({ src, name, price } , index:number) {
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
                    "grid-xs-6":classes.grid6
                  }}
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
                    {product
                      .filter((p) => p.id === index)
                      .map((filteredProduct) => {
                        return (
                          <IconButton
                            color="primary"
                            className={classes.cardNumber}
                            onClick={handleClick}
                            key={index}
                            disableRipple
                            data-id={index}
                            data-name={name}
                            data-price={price}
                            data-display={"show"}
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
                            >
                              -
                            </span>
                            <span
                              style={{ fontSize: "12px", padding: "2px 4px" }}
                            >
                              {filteredProduct.count}
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
                          </IconButton>
                        );
                      })}
                    <IconButton
                      color="primary"
                      className={classes.cartButton}
                      onClick={handleClick}
                      data-id={index}
                      data-src={src}
                      data-price={price}
                      data-name={name}
                      data-display={"hidden"}
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

export default Product;
