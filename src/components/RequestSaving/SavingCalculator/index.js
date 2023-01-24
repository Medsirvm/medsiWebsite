/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Slider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MAIN_COLORS } from "../../../constants/colorConstants";
import { FONTS } from "../../../constants/fontsConstants";
import { PRIVATE_ROUTES } from "../../../constants/routesConstants";
import {
  // selectCreditLineAndPaymentAmounts,
  // selectSimulationPaymentsInformation,
  selectuserInformation,
  setPaymentAmounts,
  setPaymentsList,
  // setSimulationPayments,
} from "../../../store/reducers/user/UserAccountSlice";
import { formatNumber } from "../../../utils/formatFieldsUtils";
// import { getPaymentsLinks } from "../../../utils/paymentsUtils";
import { savingCalculatorStyles } from "./savingCalculator.styles";
// import moment from "moment";
import CalendarPayments from "../../CalendarPayments";
import axios from "axios";
import { nextCredit } from "../../../utils/nextCreditDate.js";

const SavingCalculator = (props) => {
  const userInformation = useSelector(selectuserInformation);
  const { isSimulator } = props;
  const classes = savingCalculatorStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const valuetext = (value) => `${value}`;
  const handleContinueToContract = () => {
    navigate(PRIVATE_ROUTES.DASHBOARD_CONTRATO_SERVICIO);
  };
  const [totalAmountForSave, setTotalAmountForSave] = useState(500);
  const [paymentLinks, setPaymentLinks] = useState([]);

  // useEffect(() => {
  //   const paymentLinks = async () => {
  //     const today = moment();
  //     const monthNumberDay = today.get("date");
  //     if (monthNumberDay > 2 && monthNumberDay <= 17) {
  //       //La fecha inicial es el día 17
  //       const daysToAdd = 17 - parseInt(monthNumberDay);
  //       // console.log(monthNumberDay);
  //       const initialPaymentDate = today.add(daysToAdd, "days");
  //       const paymentLinks = await getPaymentsLinks(
  //         initialPaymentDate,
  //         tandasInfo.biWeeklyAmount
  //       );
  //       dispatch(setSimulationPayments(paymentLinks));
  //       setSimulationPaymentLinks(paymentLinks);
  //       // console.log("paymentLinks ", paymentLinks);
  //     } else {
  //       //La fecha inicial es el 02
  //       const totalDays = today.daysInMonth();
  //       const daysToAdd = totalDays - monthNumberDay + 2;
  //       const initialPaymentDate = today.add(daysToAdd, "days");
  //       const paymentLinks = await getPaymentsLinks(
  //         initialPaymentDate,
  //         tandasInfo.biWeeklyAmount
  //       );
  //       dispatch(setSimulationPayments(paymentLinks));
  //       setSimulationPaymentLinks(paymentLinks);
  //     }
  //   };
  //   paymentLinks();
  // }, [tandasInfo]);

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const handleTotalAmountForSave = (amount) => {
    setTotalAmountForSave(amount);
    dispatch(
      setPaymentAmounts({
        biWeeklyAmount: amount,
        creditLineAmount: amount * 10,
      })
    );
  };

  const handleChange = useCallback(debounce(handleTotalAmountForSave), []);

  useEffect(() => {
    dispatch(
      setPaymentAmounts({
        biWeeklyAmount: totalAmountForSave,
        creditLineAmount: totalAmountForSave * 10,
      })
    );
  }, []);

  useEffect(() => {

    const httpRequest = async () => {
      const { email } = userInformation;
      await axios.post('https://taqxihc1u8.execute-api.us-west-2.amazonaws.com/prod/credito/consulta-tx-generico', { correo: email })
        .then((response) => {
          const { data } = response;
          console.log({ data });
          const responsePaymentLinks = data.map((p, i) => i < 12 ? p : null).filter(i => i !== null)

          dispatch(setPaymentsList(responsePaymentLinks));
          setPaymentLinks(responsePaymentLinks);
        })
        .catch((error) => console.log(error));
    }
    httpRequest();
  }, [userInformation]);


  return (
    <React.Fragment>
      <Box
        className={
          isSimulator
            ? classes.calculatorContainerSimulation
            : classes.calculatorContainerNotSimulation
        }
      >
        <Box sx={{
          maxWidth: 600,
          marginTop: 3,
          marginBottom: 3
        }}>
          <Typography variant="subtitle2" sx={{
            fontSize: 18,
            fontFamily: FONTS.URBANISTSEMIBOLD,
            color: MAIN_COLORS.BLACK_MEDIUM,
          }} >
            Usando la barra, selecciona el monto que quieras aportar cada
            quincena:
          </Typography>
          <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: 3,
          }}>
            <Typography variant="subtitle2" sx={{
              fontWeight: "bold",
              fontSize: "22px",
              fontFamily: FONTS.URBANISTBOLD,
              color: MAIN_COLORS.BLACK_MEDIUM,
            }} >
              $500
            </Typography>
            <Slider
              aria-label="MedsiAmount"
              defaultValue={30}
              getAriaValueText={valuetext}
              valueLabelDisplay="on"
              step={100}
              min={500}
              max={5000}
              sx={{ marginRight: 2, marginLeft: 2, }}
              size="50px"
              onChange={(e) => handleChange(e.target.value)}
            />
            <Typography variant="subtitle2" sx={{
              fontWeight: "bold",
              fontSize: "22px",
              fontFamily: FONTS.URBANISTBOLD,
              color: MAIN_COLORS.BLACK_MEDIUM,
            }} >
              $5,000
            </Typography>
          </Box>
          <Box>
            <Typography sx={{
              fontSize: 18,
              fontFamily: FONTS.URBANISTSEMIBOLD,
              color: MAIN_COLORS.BLACK_MEDIUM,
              marginTop: 3,
            }} >
              Si contratas hoy y realizas 4 pagos quincenales, el {nextCredit()} próximo recibes un crédito por:
            </Typography>
          </Box>
          <Box>
            <Typography sx={{
              fontSize: 50,
              fontFamily: FONTS.URBANISTBOLD,
              color: MAIN_COLORS.MAIN_BLACK,
              marginTop: 3,
              textAlign: "center",
            }} >
              {`$ ${formatNumber(totalAmountForSave * 10)}`}
            </Typography>
          </Box>
          <Box>
            <Typography sx={{
              fontSize: 18,
              fontFamily: FONTS.URBANISTSEMIBOLD,
              color: MAIN_COLORS.BLACK_MEDIUM,
              marginTop: 3,
            }} >
              Pagadero en 12 pagos quincenales de{" "}
              <strong>{` $ ${formatNumber(totalAmountForSave)}`}</strong>
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            {isSimulator && (
              <Button
                variant="contained"
                sx={{
                  marginTop: 3,
                  textTransform: "none",
                  fontFamily: FONTS.URBANISTBOLD,
                }}
                className={{
                  width: 398,
                  height: 40,
                  background: "linear-gradient(90.13deg, #1B63DB 0.23%, #0ACC97 100.05%)",
                }}
                onClick={handleContinueToContract}
              >
                Contratar Tanda ahorro ahora
              </Button>
            )}
          </Box>
        </Box>
      </Box>
      {isSimulator && (
        <CalendarPayments paymentLinks={paymentLinks} />
      )}
    </React.Fragment>
  );
};

export default SavingCalculator;
