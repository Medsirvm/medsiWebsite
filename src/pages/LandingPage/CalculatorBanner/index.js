import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import SavingCalculator from "../../../components/RequestSaving/SavingCalculator";
import { FONTS } from "../../../constants/fontsConstants";
import { PUBLIC_ROUTES } from "../../../constants/routesConstants";

const CalculatorBanner = () => {
  const navigate = useNavigate();
  return (
    <Grid container sx={{ marginTop: 10, marginBottom: 20 }}>
      <Grid item xs={6}>
        <Typography
          sx={{
            fontFamily: "UrbanistSemiBold",
            fontSize: 50,
            marginLeft: 10,
            marginTop: 7,
          }}
        >
          Poco a poco ahorra en tu salúd ¡Nosotros te ayudamos!
        </Typography>
        <Typography
          sx={{
            fontFamily: FONTS.URBANISTREGULAR,
            fontSize: 18,
            marginLeft: 10,
            marginTop: 3,
          }}
        >
          Realiza 4 depósitos quincenales y te prestamos hasta 10 veces el valor
          de tu aportación para que puedas financiar tus tratamientos médicos y
          los de tu familia.
        </Typography>
        <Button
          variant="contained"
          sx={{
            background: `linear-gradient(90.13deg, #1B63DB 0.23%, #0ACC97 100.05%)`,
            borderRadius: 20,
            textTransform: "none",
            width: 358,
            height: 40,
            fontFamily: FONTS.URBANISTBOLD,
            fontSize: 16,
            marginTop: 5,
            marginLeft: 10,
          }}
          onClick={() => navigate(PUBLIC_ROUTES.LOGIN_PAGE)}
        >
          Contratar Tanda Ahorro ahora
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Box>
          <SavingCalculator isSimulator={false} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default CalculatorBanner;
