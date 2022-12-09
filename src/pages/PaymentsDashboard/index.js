import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Layout from "../../components/Layout";
import { MAIN_COLORS } from "../../constants/colorConstants";
import { FONTS } from "../../constants/fontsConstants";
import ChartContainer from "./ChartContainer";
import { PaymentDashboardPageStyles } from "./PaymentDashboardPage.styles";

const PaymentsDashboard = () => {
  const classes = PaymentDashboardPageStyles();
  return (
    <Layout>
      <Box className={classes.mainContainer}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginTop: 3,
            marginBottom: 5,
            fontSize: 22,
            fontFamily: FONTS.URBANISMEDIUM,
            color: MAIN_COLORS.MAIN_PURPLE,
          }}
        >
          Detalles de tu Tanda Ahorro
        </Typography>
        <ChartContainer />
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginTop: 3,
            marginBottom: 5,
            fontSize: 22,
            fontFamily: FONTS.URBANISMEDIUM,
            color: MAIN_COLORS.MAIN_PURPLE,
          }}
        >
          Realizar un pago
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography
            variant="h5"
            sx={{
              marginTop: 3,
              fontSize: 20,
              fontFamily: FONTS.URBANISTREGULAR,
            }}
          >
            Debes realizar tu próxima aportación antes del{" "}
            <strong>2 de enero</strong> próximo:
          </Typography>
          <Button
            variant="contained"
            sx={{
              background: `linear-gradient(90.13deg, #1B63DB 0.23%, #0ACC97 100.05%)`,
              borderRadius: 2,
              color: MAIN_COLORS.WHITE_COLOR,
              width: 173,
              height: 40,
              marginLeft: 2,
              marginTop: 3,
              textTransform: "none",
              fontFamily:"urbanistBold",
              fontSize:16
            }}
          >
            {" "}
            Pagar ahora
          </Button>
        </Box>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginTop: 5,
            fontSize: 22,
            fontFamily: FONTS.URBANISMEDIUM,
            color: MAIN_COLORS.MAIN_PURPLE,
          }}
        >
          Calendario de próximos pagos
        </Typography>
      </Box>
    </Layout>
  );
};

export default PaymentsDashboard;
