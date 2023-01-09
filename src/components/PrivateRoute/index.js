import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { PUBLIC_ROUTES } from "../../constants/routesConstants";
import { selectIsUserAuth } from "../../store/reducers/user/UserAccountSlice";

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(selectIsUserAuth);

  return isAuth ? children : <Navigate to={PUBLIC_ROUTES.LOGIN_PAGE} />;
};
export default PrivateRoute;
