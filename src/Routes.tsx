import { lazy, Suspense } from "react";
import { Route, BrowserRouter } from "react-router-dom";
const Home = lazy(() => import("./pages/Home/Home"));

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div />}>
        <Route path="/" exact component={Home} />
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
