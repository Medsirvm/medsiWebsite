import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { MAIN_COLORS } from "../../constants/colorConstants";
import { FONTS } from "../../constants/fontsConstants";
import { calendarPaymentsStyles } from "./calendarPayments.styles";
import PaymentLink from "./paymentLink";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCreditLineAndPaymentAmounts,
  selectSimulationPaymentsInformation,
  setSimulationPayments,
} from "../../store/reducers/user/UserAccountSlice";

const CalendarPayments = () => {
  const classes = calendarPaymentsStyles();
  const dispatch = useDispatch();
  const { biWeeklyAmount } = useSelector(selectCreditLineAndPaymentAmounts);
  const paymentsInformation = useSelector(selectSimulationPaymentsInformation);

  const getPaymentsLinks = async (initialDate) => {
    let currentDate = moment(initialDate);
    let paymentsArrayLinks = [];
    const addToArray = (index, date) => {
      paymentsArrayLinks.push({
        id: index,
        date: date.format("MM/DD/YYYY"),
        amount: biWeeklyAmount,
      });
    };

    addToArray(0, currentDate);

    for (let i = 1; i < 12; i++) {
      const daysInMonth = currentDate.daysInMonth();
      // console.log("Iniciando turno ", i);
      // console.log("DaysInMonth ", daysInMonth);
      if (i % 2 === 0) {
        //Par
        currentDate = currentDate.add(1, "M");
        currentDate = currentDate.add(15, "d");
        // console.log("=================");
        // console.log(currentDate.format("MM/DD/YYYY"));
        // console.log("=================");
        addToArray(i, currentDate);
      } else {
        //Impar
        if (daysInMonth === 31) {
          // console.log("Le sumamos 16 dias");
          currentDate = currentDate.add(16, "d");
          // console.log("=================");
          // console.log(currentDate.format("MM/DD/YYYY"));
          // console.log("=================");
          addToArray(i, currentDate);
        } else if (daysInMonth === 30) {
          currentDate = currentDate.add(15, "d");
          // console.log("=================");
          // console.log(currentDate.format("MM/DD/YYYY"));
          // console.log("=================");
          addToArray(i, currentDate);
        } else if (daysInMonth === 28) {
          currentDate = currentDate.add(13, "d");
          // console.log("=================");
          // console.log(currentDate.format("MM/DD/YYYY"));
          // console.log("=================");
          addToArray(i, currentDate);
        } else {
          currentDate = currentDate.add(14, "d");
          // console.log("=================");
          // console.log(currentDate.format("MM/DD/YYYY"));
          // console.log("=================");
          addToArray(i, currentDate);
        }
      }
    }
    return paymentsArrayLinks;
  };

  useEffect(() => {
    const paymentLinks = async () => {
      const today = moment();
      const monthNumberDay = today.get("date");
      if (monthNumberDay > 2 && monthNumberDay <= 17) {
        //La fecha inicial es el día 17
        const daysToAdd = 17 - parseInt(monthNumberDay);
        // console.log(monthNumberDay);
        const initialPaymentDate = today.add(daysToAdd, "days");
        const paymentLinks = await getPaymentsLinks(initialPaymentDate);
        dispatch(setSimulationPayments(paymentLinks));
        // console.log("paymentLinks ", paymentLinks);
      } else {
        //La fecha inicial es el 17
      }
    };
    paymentLinks();
  }, [biWeeklyAmount]);
  // console.log(paymentsInformation);
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
      {paymentsInformation.length > 0 &&
        paymentsInformation.map((payment) => (
          <PaymentLink
            key={payment.id}
            id={payment.id}
            date={payment.date}
            amount={payment.amount}
          />
        ))}
    </Box>
  );
};

export default CalendarPayments;
