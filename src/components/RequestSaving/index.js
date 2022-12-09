import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { MAIN_COLORS } from "../../constants/colorConstants";
import { FONTS } from "../../constants/fontsConstants";
import { requestSavingStyles } from "./requestSaving.styles";
import SavingCalculator from "./SavingCalculator";

const RequestSaving = (props) => {
  const classes = requestSavingStyles();
  return (
    <Box className={classes.mainContainer}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          marginTop: 2,
          marginBottom: 5,
          fontSize: 22,
          fontFamily: FONTS.URBANISMEDIUM,
          color: MAIN_COLORS.MAIN_PURPLE,
        }}
      >
        Programa tu Tanda de ahorro
      </Typography>

      <SavingCalculator />
      
    </Box>
  );
};

export default RequestSaving;
