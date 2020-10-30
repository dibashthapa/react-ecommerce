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
    MuiDrawer:{
      paper:{
        top:90
      }
    }
  },
});

export default THEME;
