/* eslint-disable react-hooks/exhaustive-deps */
import { Slider } from "@mui/material";
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
import GradientButton from "../../GradientButton";
import LineBreak from "../../LineBreak";
import Parraf from "../../Parraf";

const SavingCalculator = (props) => {
  const userInformation = useSelector(selectuserInformation);
  const { isSimulator } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const valuetext = (value) => `${value}`;
  const handleContinueToContract = () => navigate(PRIVATE_ROUTES.DASHBOARD_CONTRATO_SERVICIO);
  const [totalAmountForSave, setTotalAmountForSave] = useState(500);
  const [paymentLinks, setPaymentLinks] = useState([]);

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
    slider,
    sliderLaterals,
    calculatorContainer,
  } = ui;

  return (
    <>
      <div className={calculatorContainer}>
        <Parraf bottom={2} size={18} type={"SemiBold"} color="#00000080">
          Usando la barra, selecciona el monto que quieras aportar cada quincena:
        </Parraf>
        <div className={slider}>
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
        </div>
        <Parraf top={2} size={18} type="Semibold" color="#00000080">
          Si contratas hoy y realizas 4 pagos quincenales, el <strong style={{ color: "#000" }}>{nextCredit()}</strong> próximo recibes un crédito por:
        </Parraf>
        <Parraf size={30} type="Bold"> {`$ ${formatNumber(totalAmountForSave * 10)}`} </Parraf>
        <Parraf top={2} size={18} type="SemiBold" color="#00000080">
          Pagadero en 12 pagos quincenales de <strong style={{ fontFamily: 'UrbanistBold', fontSize: '30px', color: "#000" }}>{`$ ${formatNumber(totalAmountForSave)}`}</strong>
        </Parraf>
        <LineBreak />
        <GradientButton simulator={isSimulator} handleClick={() => handleContinueToContract()}>
          Contratar Tanda ahorro ahora
        </GradientButton>
      </div>
      <CalendarPayments simulator={isSimulator} paymentLinks={paymentLinks} />
    </>
  );
};

export default SavingCalculator;
