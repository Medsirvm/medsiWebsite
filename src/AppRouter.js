import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import PublicRoute from "./components/PublicRoute";
//import PrivateRoute from "./components/PrivateRoute";
import { PUBLIC_ROUTES } from "./constants/routesConstants";

const AppRouter = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        {PUBLIC_ROUTES.map((route) => (
          <PublicRoute
            key={route.key}
            restricted={route.restricted}
            component={route.component}
            path={route.path}
            exact={route.exact}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
