import { createMuiTheme } from "@material-ui/core";
const THEME = createMuiTheme({
  typography: {
    fontFamily: "'Lato', sans-serif",
  },
  overrides: {
    MuiGrid: {
      "grid-xs-3": {
        maxWidth:"30%",
        flexBasis: "30%",
      },
    },
  },
});

export default THEME;
