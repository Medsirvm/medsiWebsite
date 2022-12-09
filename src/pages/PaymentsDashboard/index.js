import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { MAIN_COLORS } from "../../constants/colorConstants";
import { FONTS } from "../../constants/fontsConstants";
import ChartContainer from "./ChartContainer";
import { PaymentDashboardPageStyles } from "./PaymentDashboardPage.styles";

const PaymentsDashboard = () => {
  const classes = PaymentDashboardPageStyles();
  return (
    <Box className={classes.mainContainer}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          marginTop: 3,
          marginBottom: 5,
          fontSize: 22,
          fontFamily: FONTS.URBANISMEDIUM,
          color: MAIN_COLORS.MAIN_PURPLE,
        }}
      >
        Detalles de tu Tanda Ahorro
      </Typography>
      <ChartContainer />
    </Box>
  );
};

export default PaymentsDashboard;
