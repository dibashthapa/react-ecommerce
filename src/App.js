import React from "react";
import logo from "./logo.svg";
import "./App.css";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core";
import { Navbar , Banner , DrawerApp} from "./sections";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Banner />
        <DrawerApp />
        
      </div>
    </ThemeProvider>
  );
}

export default App;
