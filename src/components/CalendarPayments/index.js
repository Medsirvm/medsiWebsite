import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { MAIN_COLORS } from "../../constants/colorConstants";
import { FONTS } from "../../constants/fontsConstants";
import { calendarPaymentsStyles } from "./calendarPayments.styles";
import PaymentLink from "./paymentLink";

const CalendarPayments = () => {
  const classes = calendarPaymentsStyles();
  return (
    <Box className={classes.mainContainer}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          marginTop: 4,
          marginBottom: 5,
          fontSize: 22,
          fontFamily: FONTS.URBANISMEDIUM,
          color: MAIN_COLORS.MAIN_PURPLE,
        }}
      >
        Calendario de Próximos Pagos
      </Typography>
      <PaymentLink />
    </Box>
  );
};

export default CalendarPayments;
