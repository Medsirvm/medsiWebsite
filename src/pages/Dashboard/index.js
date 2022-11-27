import { Box } from "@mui/material";
import React from "react";
import CalendarPayments from "../../components/CalendarPayments";
import ImageBanner from "../../components/ImageBanner";
import RigthDrawer from "../../components/Layout/RigthDrawer";
import RequestSaving from "../../components/RequestSaving";
import WelcomeMessage from "../../components/WelcomeMessage";
import { dashboardPageStyles } from "./Dashboard.styles";

const Dashboard = () => {
  const classes = dashboardPageStyles();
  return (
    <Box>
      <RigthDrawer>
        <Box className={classes.welcomeMessageContainer}>
          <Box className={classes.textWrapper}>
            <WelcomeMessage userName="Rogelio Vazquez" />
          </Box>
        </Box>
        <ImageBanner />
        <RequestSaving />
        <CalendarPayments />
      </RigthDrawer>
    </Box>
  );
};

export default Dashboard;
