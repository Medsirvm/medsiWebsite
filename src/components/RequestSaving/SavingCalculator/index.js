/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Slider } from "@mui/material";
import { Box } from "@mui/system";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PRIVATE_ROUTES } from "../../../constants/routesConstants";
import {
  selectuserInformation,
  setPaymentAmounts,
  setPaymentsList
} from "../../../store/reducers/user/UserAccountSlice";
import { formatNumber } from "../../../utils/formatFieldsUtils";
import CalendarPayments from "../../CalendarPayments";
import axios from "axios";
import { nextCredit } from "../../../utils/nextCreditDate.js";
import ui from './index.module.css';

const SavingCalculator = (props) => {
  const userInformation = useSelector(selectuserInformation);
  const { isSimulator } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const valuetext = (value) => `${value}`;
  const handleContinueToContract = () => navigate(PRIVATE_ROUTES.DASHBOARD_CONTRATO_SERVICIO);
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

  const {
    topParraf,
    middleParraf,
    bottomParraf,
    slider,
    sliderLaterals,
    totalAmountCredit,
    calculatorContainer,
    tandasButton
  } = ui;

  return (
    <>
      <Box className={calculatorContainer}>
        <Box>
          <p className={topParraf}>Usando la barra, selecciona el monto que quieras aportar cada quincena:</p>
          <Box className={slider}>
            <span className={sliderLaterals}>$500</span>
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
            <span className={sliderLaterals}>$5,000</span>
          </Box>
          <p className={middleParraf} >
            Si contratas hoy y realizas 4 pagos quincenales, el <strong style={{ color: "#000" }}>{nextCredit()}</strong> próximo recibes un crédito por:
          </p>
          <p className={totalAmountCredit}> {`$ ${formatNumber(totalAmountForSave * 10)}`} </p>
          <p className={bottomParraf}>
            Pagadero en 12 pagos quincenales de <strong>{`$ ${formatNumber(totalAmountForSave)}`}</strong>
          </p>
          {isSimulator && (
            <Button
              variant="contained"
              className={tandasButton}
              onClick={handleContinueToContract}
            >
              Contratar Tanda ahorro ahora
            </Button>
          )}
        </Box>
      </Box>
      {isSimulator && (
        <CalendarPayments paymentLinks={paymentLinks} />
      )}
    </>
  );
};

export default SavingCalculator;
