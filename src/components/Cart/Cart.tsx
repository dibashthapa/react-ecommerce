import React from "react";
import { Drawer  , Typography    } from "@material-ui/core";
import { useSelector } from "react-redux";
import { makeStyles  } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import styles from "./Cart.style";

interface productInterface {
  id?: number;
  name: string;
  price: string;
  src: string;
  count?: number;
}

interface RootState {
  products: Array<productInterface>;
}

const useStyles = makeStyles(styles);

interface CartImage {
  src: string;
  name: string;
  className: string;
}

const CartImage = ({ src, name, className }: CartImage) => {
  return <img src={src} alt={name} className={className} />;
};
export const Cart: React.FC = () => {
  const product = useSelector((state: RootState) => state.products);
  const [open, setOpen] = React.useState<boolean>(true);
  const classes = useStyles();
  return (
    <Drawer anchor={"right"} open={open} onClose={() => setOpen(!open)}>
      {product.map(({ id, name, price, src  }) => {
        return (
          <React.Fragment key={id}>
            <div className={classes.cart}>
              <CartImage src={src} name={name} className={classes.media} />
              <Typography variant={"body1"} component={"h4"} noWrap className= { classes.cartContent }>
                {name}
              </Typography>
              <Typography variant={"body1"} component={"h4"} noWrap className= { classes.cartContent }>
                {price}
              </Typography>
            </div>

            <Divider />
          </React.Fragment>
        );
      })}
      {product.length === 0 && <div>No Products Found :(</div>}
    </Drawer>
  );
};
