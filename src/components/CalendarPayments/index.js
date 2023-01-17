import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { selectCreditLineAndPaymentAmounts } from "../../store/reducers/user/UserAccountSlice";
import { calendarPaymentsStyles, sxStyles } from "./calendarPayments.styles";
import PaymentLink from "./paymentLink";

const CalendarPayments = ({
  paymentLinks
}) => {
  const classes = calendarPaymentsStyles();
  const { creditLineAmount } = useSelector(selectCreditLineAndPaymentAmounts);

  return (
    <Box className={classes.mainContainer}>
      <Typography variant="h5" sx={sxStyles.h5style} >
        Calendario de Próximos Pagos
      </Typography>
      <Box display="flex" direction="column">
        <Typography variant="body1" sx={sxStyles.bodyStyle} > Pagos </Typography>
        <Typography variant="body1" sx={sxStyles.bodyStyle2} > Préstamo </Typography>
      </Box>
      {paymentLinks.length > 0 &&
        paymentLinks.map((payment, index) => {
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
        })}
      {/* {
        paymentLinks.length > 0 &&
        paymentLinks.map((payment, index, array) => {
          const length = array.length;
          return index < (length - 1)
            ? <PaymentLink key={payment.id} id={payment.id} date={payment.date} amount={payment.amount} />
            : <PaymentLink key={payment.id} id={payment.id} date={payment.date} amount={payment.amount} loan={creditLineAmount} />
        })
      } */}
    </Box>
  );
};

export default CalendarPayments;
