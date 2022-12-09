import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { PRIVATE_ROUTES } from "./constants/routesConstants";
import Contract from "./pages/Contract";
import PaymentsDashboard from "./pages/PaymentsDashboard";
import TandasCalculator from "./pages/TandasCalculator";

const AppRouter = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={PRIVATE_ROUTES.DASHBOARD_TANDA_AHORRO}
          element={
            <PrivateRoute>
              <TandasCalculator />
            </PrivateRoute>
          }
          exact
        />
        <Route
          path={PRIVATE_ROUTES.DASHBOARD_CONTRATO_SERVICIO}
          element={
            <PrivateRoute>
              <Contract />
            </PrivateRoute>
          }
          exact
        />
        <Route
          path={PRIVATE_ROUTES.DASHBOARD_PAYMENTS_PAY_CHART}
          element={
            <PrivateRoute>
              <PaymentsDashboard />
            </PrivateRoute>
          }
          exact
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
