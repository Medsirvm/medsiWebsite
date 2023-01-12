import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { MAIN_COLORS } from "../../constants/colorConstants";
import { FONTS } from "../../constants/fontsConstants";
import { selectCreditLineAndPaymentAmounts } from "../../store/reducers/user/UserAccountSlice";
import { calendarPaymentsStyles } from "./calendarPayments.styles";
import PaymentLink from "./paymentLink";

const CalendarPayments = (props) => {
  const { paymentLinks } = props;
  const classes = calendarPaymentsStyles();
  const { creditLineAmount } = useSelector(selectCreditLineAndPaymentAmounts);
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
      <Box display="flex" direction="column">
        <Typography
          variant="body1"
          sx={{
            marginLeft: 57,
            fontFamily: "UrbanistBold",
            fontSize: 18,
            marginBottom: 1,
          }}
        >
          Pagos
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginLeft: 15,
            fontFamily: "UrbanistBold",
            fontSize: 18,
            color: MAIN_COLORS.BLUE_MEDIUM,
          }}
        >
          Préstamo
        </Typography>
      </Box>
      {paymentLinks.length > 0 &&
        paymentLinks.map((payment, index) => {
          if (index <= 3) {
            if (index === 3) {
              return (
                <PaymentLink
                  key={payment.id}
                  id={payment.id}
                  date={payment.date}
                  amount={payment.amount}
                  loan={creditLineAmount}
                />
              );
            } else {
              return (
                <PaymentLink
                  key={payment.id}
                  id={payment.id}
                  date={payment.date}
                  amount={payment.amount}
                />
              );
            }
          }
        })}
    </Box>
  );
};

export default CalendarPayments;
