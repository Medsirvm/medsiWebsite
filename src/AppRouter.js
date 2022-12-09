import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PublicRoute from "./components/PublicRoute";
import { PRIVATE_ROUTES } from "./constants/routesConstants";
import Contract from "./pages/Contract";
import TandasCalculator from "./pages/TandasCalculator";

const AppRouter = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <PublicRoute
          restricted={false}
          component={TandasCalculator}
          path={PRIVATE_ROUTES.DASHBOARD_TANDA_AHORRO}
          exact
        />
        <PublicRoute
          restricted={false}
          component={Contract}
          path={PRIVATE_ROUTES.DASHBOARD_CONTRATO_SERVICIO}
          exact
        /> */}
        <Route
          path={PRIVATE_ROUTES.DASHBOARD_TANDA_AHORRO}
          exact
          component={TandasCalculator}
        />
        <Route
          path={PRIVATE_ROUTES.DASHBOARD_CONTRATO_SERVICIO}
          exact
          component={Contract}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
