const styles = (theme) => ({
  button: {
    color: "rgb(0, 158, 127)",
    marginLeft: "20px",
  },
  select: {
    "&:focus": {
      backgroundColor: "#fff",
    },
  },
  paper: {
    marginBottom: "20px",
  },
  margin: {
    margin: theme.spacing(1),
  },
});

export default styles;
