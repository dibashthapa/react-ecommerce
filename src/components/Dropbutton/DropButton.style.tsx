import  { Theme } from "@material-ui/core/styles"
const styles = (theme:Theme) => ({
  button: {
    color: "rgb(0, 158, 127)",
    marginLeft: theme.spacing(2),
    width:120
    
  },
  select: {
    "&:focus": {
      backgroundColor: "#fff",
    },
  },
  paper: {
    marginBottom: "20px",
  },
  formControl: {
    margin: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
});

export default styles;
