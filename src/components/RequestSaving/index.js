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
          marginLeft: 3,
          marginTop: 2,
          marginBottom: 5,
          marginRight: 'auto',
          fontSize: 24,
          fontFamily: FONTS.URBANISMEDIUM,
          color: MAIN_COLORS.MAIN_PURPLE,
        }}
      >
        Programa tu Tanda de ahorro
      </Typography> 
      <SavingCalculator isSimulator={true} />
    </Box>
  );
};

export default RequestSaving;
