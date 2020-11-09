const styles = (theme) => ({
  root: {
    maxWidth: 345,
  },
  cartButton: {
    marginLeft: "auto",
    border: "1px solid #ccc",
    borderRadius: "1rem",
    padding:"8px 17px",
    "&:hover":{
      color:"#fff",
      backgroundColor:"rgb(0, 158, 127)"
    }
  },
  cardNumber:{
    marginLeft:"auto",
    border: "1px solid #ccc",
    borderRadius: "1rem",
    backgroundColor:"rgb(0, 158, 127)",
    color:"#fff",
    padding:"8px 17px",
    "&:hover":{
      color:"#fff",
      backgroundColor:"rgb(0, 158, 127)"
    }
  },
  grid: {
    height: 352,
    [theme.breakpoints.down("xs")]: {
      height: 200,
    },
  },
  media: {
    height: 160,
    [theme.breakpoints.down("xs")]: {
      height: 80,
    },
  },
  card: {
    margin: 16,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      margin: 8,
    },
  },
  grid6: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "40%",
      flexBasis: "40%",
    },
  },
});

export default styles;
