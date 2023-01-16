import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import CalendarPayments from "../../components/CalendarPayments";
import Layout from "../../components/Layout";
import ChartContainer from "./ChartContainer";
import { PaymentDashboardPageStyles, sxStyles } from "./PaymentDashboardPage.styles";
import { selectSimulationPaymentsInformation } from "../../store/reducers/user/UserAccountSlice";
import { useNavigate } from "react-router-dom";
import { PRIVATE_ROUTES } from "../../constants/routesConstants";

const PaymentsDashboard = () => {

  const classes = PaymentDashboardPageStyles();
  const simulationPaymentLinks = useSelector(selectSimulationPaymentsInformation);
  const navigate = useNavigate();

  const [firstPayment] = simulationPaymentLinks.map((pay, index) => {
    if (pay.status === 'pending') return pay.date;
    return null;
  }).filter(i => i !== null);

  return (
    <Layout>
      <Box className={classes.mainContainer}>
        <Typography variant="h5" sx={sxStyles.h5style}>Detalles de tu Tanda Ahorro</Typography>
        <ChartContainer />
        <Typography variant="h5" sx={sxStyles.h5style}>Realizar un pago</Typography>
        <Box sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column"
        }}>
          <Typography variant="h5" sx={sxStyles.h5style2} >
            Debes realizar tu próxima aportación antes del{" "}
            <strong>{firstPayment}</strong> próximo:
          </Typography>
          <Button
            variant="contained"
            sx={sxStyles.buttonStyle}
            onClick={() => navigate(PRIVATE_ROUTES.DASHBOARD_MAKE_PAYMENT)}
          >
            {" "} Pagar ahora
          </Button>
        </Box>
        {/* <Typography
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
        </Typography> */}

        <CalendarPayments paymentLinks={simulationPaymentLinks} />
      </Box>
    </Layout>
  );
};

export default PaymentsDashboard;
