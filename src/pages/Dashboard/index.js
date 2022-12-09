import { Box } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import CalendarPayments from "../../components/CalendarPayments";
import ImageBanner from "../../components/ImageBanner";
import RigthDrawer from "../../components/Layout/RigthDrawer";
import RequestSaving from "../../components/RequestSaving";
import WelcomeMessage from "../../components/WelcomeMessage";
import useCounter from "../../hooks/useCounter";
import { selectCurrentUserStep } from "../../store/reducers/user/UserAccountSlice";
import Contract from "../Contract";
import PaymentsDashboard from "../PaymentsDashboard";
import { dashboardPageStyles } from "./Dashboard.styles";

const Dashboard = () => {
  const classes = dashboardPageStyles();

  const currentUserStep = useSelector(selectCurrentUserStep);
  
  console.log(currentUserStep);
  const RenderContentBasedOnLocation = () => {
    switch (currentUserStep) {
      case 0:
        return <RequestSaving />;
      case 1:
        return <Contract />;
      default:
        break;
    }
  };
  return (
    <Box>
      <RigthDrawer>
        <Box className={classes.welcomeMessageContainer}>
          <Box className={classes.textWrapper}>
            <WelcomeMessage userName="Rogelio Vazquez" />
          </Box>
        </Box>
        <ImageBanner />
        {RenderContentBasedOnLocation()}
        {/* <RequestSaving /> */}

        {/* <Contract /> */}
        {/* <PaymentsDashboard /> */}
      </RigthDrawer>
    </Box>
  );
};

export default Dashboard;
