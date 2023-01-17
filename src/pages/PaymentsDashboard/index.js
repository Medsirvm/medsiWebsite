import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CalendarPayments from "../../components/CalendarPayments";
import Layout from "../../components/Layout";
import ChartContainer from "./ChartContainer";
import { PaymentDashboardPageStyles, sxStyles } from "./PaymentDashboardPage.styles";
import { selectSimulationPaymentsInformation } from "../../store/reducers/user/UserAccountSlice";
import { useNavigate } from "react-router-dom";
import { PRIVATE_ROUTES } from "../../constants/routesConstants";
import useUrlParams from "../../hooks/useUrlParams";
import axios from "axios";
import ModalValidation from "./ModalValidation";
import { ValidationContext } from "../../contexts/validationContext";

const PaymentsDashboard = () => {

  const classes = PaymentDashboardPageStyles();
  const simulationPaymentLinks = useSelector(selectSimulationPaymentsInformation);
  const navigate = useNavigate();

  const [estatus, setEstatus] = useState(null);
  const [fecha, setFecha] = useState(null);
  const [monto, setMonto] = useState(null);
  const [noTransaccion, setNoTransaccion] = useState(null);
  const [numAuth, setNumAuth] = useState(null);

  const [firstPayment] = simulationPaymentLinks.map((pay, index) => {
    if (pay.status === 'pending') return pay.date;
    return null;
  }).filter(i => i !== null);

  const { params, redirectPage } = useUrlParams(window.location);
  const { open, setOpen } = useContext(ValidationContext); 

  useEffect(() => {
    if (params === null) return;

    const [folio, num] = params;
    const axiosData = {
      folioMexpago: folio[1],
      noTransaccion: num[1],
      fecha: new Date().toLocaleDateString('sv')
    } 
    axios.post("https://taqxihc1u8.execute-api.us-west-2.amazonaws.com/dev/mexpago/validate-transaction", { ...axiosData })
      .then(response => {
        const {
          estatus,
          fecha,
          monto,
          noTransaccion,
          numAuth
        } = response.data.body;

        setEstatus(estatus);
        setFecha(fecha);
        setMonto(monto);
        setNoTransaccion(noTransaccion);
        setNumAuth(numAuth);
        setOpen(true);

      }).catch(error => console.log(error));

  }, [params, setOpen]);

  const handleClosemodal = () => { 
    setOpen(false);
    setEstatus(null);
    setFecha(null);
    setMonto(null);
    setNoTransaccion(null);
    setNumAuth(null);
    const route = redirectPage();
    navigate(route)
  }

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
        <ModalValidation
          open={open}
          fecha={fecha}
          noTransaccion={noTransaccion}
          paymentAmount={monto}
          folioPago={numAuth}
          authorized={estatus}
          closeModal={() => handleClosemodal()}
        />
      </Box>
    </Layout>
  );
};

export default PaymentsDashboard;
