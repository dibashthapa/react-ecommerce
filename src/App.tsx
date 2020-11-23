import React , { lazy , Suspense  }  from "react";
import "./App.css";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core";
import { Route,  BrowserRouter } from "react-router-dom";
const Home = lazy(() => import('./pages/Home/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));
const Product = lazy(() => import('./pages/Product/Product'));
const App =  ()=> {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Suspense fallback={<div />}>
        <Route path="/" exact component={Home} />
        <Route path="/store-manager" component={Dashboard} />
        <Route path="/product/:id" component={ Product }/>
      </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
