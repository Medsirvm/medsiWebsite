import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CalendarPayments from "../../components/CalendarPayments";
import Layout from "../../components/Layout";
import ChartContainer from "./ChartContainer";
import { PaymentDashboardPageStyles, sxStyles } from "./PaymentDashboardPage.styles";
import {
  selectCurrentNumberUserPayment,
  selectuserInformation,
  setCurrentNumberUserPayment
} from "../../store/reducers/user/UserAccountSlice";
import { useNavigate } from "react-router-dom";
import { PRIVATE_ROUTES } from "../../constants/routesConstants";
import useUrlParams from "../../hooks/useUrlParams";
import axios from "axios";
import ModalValidation from "./ModalValidation";
import { ValidationContext } from "../../contexts/validationContext";
import { formatDate } from "../../utils/formats";

const boxStyle = { display: "flex", alignItems: "center", flexDirection: "column" };

const PaymentsDashboard = () => {

  const classes = PaymentDashboardPageStyles();
  const navigate = useNavigate();
  const userInformation = useSelector(selectuserInformation);
  const currentPayment = useSelector(selectCurrentNumberUserPayment);

  const [estatus, setEstatus] = useState(null);
  const [fecha, setFecha] = useState(null);
  const [monto, setMonto] = useState(null);
  const [noTransaccion, setNoTransaccion] = useState(null);
  const [numAuth, setNumAuth] = useState(null);
  const [firstPayment, setFirstPayment] = useState(0);
  const [paymentLinks, setPaymentLinks] = useState([]);

  const { params, redirectPage } = useUrlParams(window.location);
  const { open, setOpen } = useContext(ValidationContext);
  
  useEffect(() => {
    const httpRequest = async () => {
      const { email } = userInformation;
      await axios.post("https://taqxihc1u8.execute-api.us-west-2.amazonaws.com/prod/credito/consulta-tx-generico", { correo: email })
        .then((res) => {
          const { data } = res;
          const firstToPay = data.find((pay) => pay.estado === 'pendiente');
          const { fecha_pago, id_pago } = firstToPay;
          setFirstPayment(fecha_pago);
          setPaymentLinks(data);
          setCurrentNumberUserPayment(parseInt(id_pago));
        })
        .catch((error) => console.log(error));
    }
    httpRequest();
  }, [userInformation]);

  useEffect(() => {
    if (params === null) return;
    const httpRequest = async () => {
      const [folio, num, , amount] = params;
      const axiosData = { folioMexpago: folio[1], noTransaccion: num[1], fecha: new Date().toLocaleDateString('sv') }
      const estatusPago = await axios.post("https://taqxihc1u8.execute-api.us-west-2.amazonaws.com/dev/mexpago/validate-transaction", { ...axiosData })
        .then(response => {
          const { estatus, fecha, monto, noTransaccion, numAuth } = response.data.body;
          if (estatus) {
            setEstatus(estatus);
            setFecha(fecha);
            setMonto(monto);
            setNoTransaccion(noTransaccion);
            setNumAuth(numAuth);
          } else {
            setEstatus(estatus);
            setFecha(axiosData.fecha);
            setMonto(amount[1]);
            setNoTransaccion(axiosData.noTransaccion);
            setNumAuth(axiosData.folioMexpago);
          }
          setOpen(true);
          return { estatus, fecha, monto, noTransaccion, numAuth };
        }).catch(error => console.log(error));

      if (estatusPago.estatus) {

        const { email } = userInformation;
        const axiosPostData = {
          fecha_pago: estatusPago.fecha.split(" ")[0],
          estado: 'pagado',
          monto: estatusPago.monto,
          id_orden_pago: num[1],
          correo: email,
          id_pago: currentPayment,
        }
        await axios.post("https://taqxihc1u8.execute-api.us-west-2.amazonaws.com/prod/credito/actualiza-tx-generico", axiosPostData)
          .then(res => {
            console.log(res)
          })
          .catch(error => {
            console.log(error);
          })
      }
    }

    httpRequest();

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
        <Box sx={boxStyle}>
          <Typography variant="h5" sx={sxStyles.h5style2} >
            Debes realizar tu próxima aportación antes del{" "}
            <strong>{formatDate(firstPayment)}</strong> próximo:
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

        <CalendarPayments paymentLinks={paymentLinks} />
        {/* <DonutChart /> */}
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
