import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import SavingCalculator from "../../../components/RequestSaving/SavingCalculator";
import { PUBLIC_ROUTES } from "../../../constants/routesConstants";
import ui from './index.module.css';

const CalculatorBanner = () => {

  const navigate = useNavigate();

  const {
    calculatorSection,
    calculatorTitle,
    calculatorParraf,
    calculatorButton
  } = ui;

  return (
    <Box className={calculatorSection}>
      <p className={calculatorTitle}>Invierte en tu salud y la de tu familia. ¡Nosotros te ayudamos!</p>
      <p className={calculatorParraf}>
        Realiza 4 depósitos quincenales y te prestamos hasta 10 veces el valor
        de tu aportación para que puedas financiar tus tratamientos médicos y
        los de tu familia.
      </p>
      <SavingCalculator isSimulator={false} />
      <button type="button"
        className={calculatorButton}
        onClick={() => navigate(PUBLIC_ROUTES.LOGIN_PAGE)}
      >
        Contratar Tanda Ahorro ahora
      </button>
    </Box>
  );
};

export default CalculatorBanner;
