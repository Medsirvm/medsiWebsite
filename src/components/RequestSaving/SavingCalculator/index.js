/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Slider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { MAIN_COLORS } from "../../../constants/colorConstants";
import { FONTS } from "../../../constants/fontsConstants";
import { PRIVATE_ROUTES } from "../../../constants/routesConstants";
import { setPaymentAmounts } from "../../../store/reducers/user/UserAccountSlice";
import { formatNumber } from "../../../utils/formatFieldsUtils";
import { savingCalculatorStyles } from "./savingCalculator.styles";

const SavingCalculator = () => {
  const classes = savingCalculatorStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  function valuetext(value) {
    return `${value}`;
  }
  const handleContinueToContract = () => {
    history.push(PRIVATE_ROUTES.DASHBOARD_CONTRATO_SERVICIO);
  };
  const [totalAmountForSave, setTotalAmountForSave] = useState(500);
  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 1000);
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

  return (
    <Box className={classes.mainContainer}>
      <Box sx={{ maxWidth: 600 }}>
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: "bold",
            fontSize: 18,
            fontFamily: FONTS.URBANISTSEMIBOLD,
            color: MAIN_COLORS.BLACK_MEDIUM,
            marginTop: 3,
          }}
        >
          Usando la barra, selecciona el monto que quieras aportar cada
          quincena:
        </Typography>
        <Box className={classes.sliderWrapper}>
          <Slider
            aria-label="MedsiAmount"
            defaultValue={30}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={100}
            min={500}
            max={8000}
            sx={{
              marginRight: 2,
            }}
            size="50px"
            onChange={(e) => handleChange(e.target.value)}
          />
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: "bold",
              fontSize: 22,
              fontFamily: FONTS.URBANISTBOLD,
              color: MAIN_COLORS.BLACK_MEDIUM,
            }}
          >
            $8000
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: 18,
              fontFamily: FONTS.URBANISTSEMIBOLD,
              color: MAIN_COLORS.BLACK_MEDIUM,
              marginTop: 3,
            }}
          >
            Si contratas hoy y realizas 4 pagos quincenales, el 2 de febrero
            próximo recibes un crédito por:
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: 50,
              fontFamily: FONTS.URBANISTBOLD,
              color: MAIN_COLORS.MAIN_BLACK,
              marginTop: 3,
              textAlign: "CENTER",
            }}
          >
            {`$ ${formatNumber(totalAmountForSave * 10)}`}
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: 18,
              fontFamily: FONTS.URBANISTSEMIBOLD,
              color: MAIN_COLORS.BLACK_MEDIUM,
              marginTop: 3,
            }}
          >
            {`Pagadero en 12 pagos quincenales de $ ${formatNumber(
              totalAmountForSave
            )}`}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Button
            variant="contained"
            sx={{
              marginTop: 3,
              textTransform: "none",
              fontFamily: FONTS.URBANISTBOLD,
            }}
            className={classes.requestSaveButton}
            onClick={handleContinueToContract}
          >
            Contratar Tanda ahorro ahora
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SavingCalculator;
