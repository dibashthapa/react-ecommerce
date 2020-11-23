import { Theme , createStyles } from "@material-ui/core/styles"
const styles = (theme: Theme) => (
  createStyles({
  root: {},
  box: {
    padding: "60px",
    boxShadow: "rgba(0, 0, 0, 0.06) 0px 1px 2px",
    backgroundColor: "#fff",
  },
  arrowIcon: {
    position: "relative",
    top: "30%",
  },
  media: {
    width:"100%",
    height:"100%"
  },
  grid3: { maxWidth: "30%", flexBasis: "30%" },
  })
);

export default styles;
