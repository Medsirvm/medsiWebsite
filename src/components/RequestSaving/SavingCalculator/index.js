import { Button, Slider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { MAIN_COLORS } from "../../../constants/colorConstants";
import { FONTS } from "../../../constants/fontsConstants";
import { savingCalculatorStyles } from "./savingCalculator.styles";

const SavingCalculator = () => {
  const classes = savingCalculatorStyles();
  function valuetext(value) {
    return `${value}°C`;
  }
  const [totalAmountForSave, setTotalAmountForSave] = useState(0);
  const handleTotalAmountForSave = (amount) => {
    console.log(totalAmountForSave);
    setTotalAmountForSave(amount);
  };
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
            onChange={(e) => handleTotalAmountForSave(e.target.value)}
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
            $30,000
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
            Pagadero en 12 pagos quincenales de $3,000
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
          >
            Contratar Tanda ahorro ahora
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SavingCalculator;
