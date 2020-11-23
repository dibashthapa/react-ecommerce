import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Card, CardMedia,  CardActionArea}  from "@material-ui/core";
import { makeStyles , createStyles } from "@material-ui/core/styles"
import styles from './Cart.style'

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


const useStyles = makeStyles(styles)

export const Cart: React.FC = () => {
  const product = useSelector((state: RootState) => state.products);
  const [open, setOpen] = React.useState<boolean>(true);
  const classes =  useStyles()
  return (
    <Drawer anchor={"right"} open={open} onClose={() => setOpen(!open)}>
      {product.map(({ id, name, price, src, count }) => {
        return (
          <List>
          <Card>
            <CardActionArea>
            <CardMedia image={src} className= { classes.media } />
          </CardActionArea>
          </Card>
        </List>
        );
      })}
      {product.length === 0 && <div>No Products Found :(</div>}
    </Drawer>
  );
};
