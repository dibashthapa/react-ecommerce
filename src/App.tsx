import React from "react";
import "./App.css";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core";
import { Route,  BrowserRouter } from "react-router-dom";
import { Home , Dashboard , Product } from './pages'
const App =  ()=> {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/store-manager" component={Dashboard} />
        <Route path="/product/:id" component={ Product }/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
