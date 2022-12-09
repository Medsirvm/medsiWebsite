import React from "react";
import { Route } from "react-router-dom";

const PublicRoute = ({ element: Element, ...rest }) => {
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route {...rest} element={<Element />} />
  );
};

export default PublicRoute;
