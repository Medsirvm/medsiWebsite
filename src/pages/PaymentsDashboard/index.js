import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CalendarPayments from "../../components/CalendarPayments";
import Layout from "../../Layouts";
import ChartContainer from "./ChartContainer";
import {
  selectCurrentNumberUserPayment,
  selectPaymentList,
  selectuserInformation,
  setCurrentNumberUserPayment,
  setPaymentsList
} from "../../store/reducers/user/UserAccountSlice";
import { useNavigate } from "react-router-dom";
import { PRIVATE_ROUTES } from "../../constants/routesConstants";
import useUrlParams from "../../hooks/useUrlParams";
import axios from "axios";
import ModalValidation from "./ModalValidation";
import { ValidationContext } from "../../contexts/validationContext";
import { formatDate } from "../../utils/formats";
import ui from './index.module.css';
import GradientButton from "../../components/GradientButton";
import ContainerTitle from "../../components/ContainerTitle";
import SectionContainer from "../../components/SectionContainer";
import LineBreak from "../../components/LineBreak";
import useWindowSize from "../../hooks/useWindowSize";

const PaymentsDashboard = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInformation = useSelector(selectuserInformation);
  const currentPayment = useSelector(selectCurrentNumberUserPayment);
  const paymentsListRedux = useSelector(selectPaymentList);

  const [estatus, setEstatus] = useState(null);
  const [fecha, setFecha] = useState(null);
  const [monto, setMonto] = useState(null);
  const [noTransaccion, setNoTransaccion] = useState(null);
  const [numAuth, setNumAuth] = useState(null);
  const [firstPayment, setFirstPayment] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const { params, redirectPage } = useUrlParams(window.location);
  const { open, setOpen } = useContext(ValidationContext);
  const { size } = useWindowSize();

  useEffect(() => {
    const httpRequest = async () => {
      if (paymentsListRedux.length > 0) {
        const firstToPay = paymentsListRedux.find((pay) => pay.estado === 'pendiente');
        const { fecha_pago, id_pago } = firstToPay;
        setFirstPayment(fecha_pago);
        dispatch(setCurrentNumberUserPayment(parseInt(id_pago)));
      } else {
        const { email } = userInformation;
        await axios.post("https://taqxihc1u8.execute-api.us-west-2.amazonaws.com/prod/credito/consulta-tx-generico", { correo: email })
          .then((res) => {
            const { data } = res;
            const firstToPay = data.find((pay) => pay.estado === 'pendiente');
            const { fecha_pago, id_pago } = firstToPay;
            setFirstPayment(fecha_pago);
            dispatch(setCurrentNumberUserPayment(parseInt(id_pago)));
            dispatch(setPaymentsList(data));
          })
          .catch((error) => console.log(error));
      }
    }
    httpRequest();
  }, [userInformation]);

  useEffect(() => {
    console.log("ENTER APORTACIONES")

    const aportaciones = paymentsListRedux.filter(item => item.estado === 'pagado').length;
    console.log({ aportaciones: paymentsListRedux })
    if (aportaciones >= 4) {
      setIsReady(true);
    }
  }, [paymentsListRedux])

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

        const updatePaymentList = paymentsListRedux.map((item) => {
          return parseInt(item.id_pago) === currentPayment
            ? { ...item, estado: "pagado" }
            : item;
        });
        const firstToPay = updatePaymentList.find((pay) => pay.estado === 'pendiente');
        const { fecha_pago, id_pago } = firstToPay;
        setFirstPayment(fecha_pago);
        dispatch(setCurrentNumberUserPayment(parseInt(id_pago)));
        dispatch(setPaymentsList(updatePaymentList));
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

  const {
    mainContainer,
    containerParraf,
    chartContainerBox,
    makePaymentContainer,
    makePaymentBox,
    congratsContainer
  } = ui;

  return (
    <Layout>
      <section className={mainContainer}>
        <SectionContainer>
          <ContainerTitle>Detalles de tu Tanda Ahorro</ContainerTitle>
          <div className={chartContainerBox}>
            <ChartContainer paymentsList={paymentsListRedux} size={size} />
          </div>
        </SectionContainer>
        <SectionContainer>
          {
            isReady
              ? (
                <div className={congratsContainer}>
                  <p className={containerParraf}><strong>¡Felicidades!</strong> Ya puedes recibir tu crédito <strong>Tanda Ahorro</strong></p>

                  <GradientButton>
                    Recibir crédito Tanda Ahorro
                  </GradientButton>
                </div>
              )
              : (
                <div className={makePaymentContainer}>
                  <div className={makePaymentBox}>
                    <ContainerTitle>Realizar un pago</ContainerTitle>
                    <p className={containerParraf}>
                      Debes realizar tu próxima aportación antes del <strong>{formatDate(firstPayment)}</strong> próximo:
                    </p>
                    <LineBreak />
                  </div>
                  <GradientButton handleClick={() => navigate(PRIVATE_ROUTES.DASHBOARD_MAKE_PAYMENT)}>
                    Pagar ahora
                  </GradientButton>
                </div>
              )
          }
        </SectionContainer>
        <SectionContainer>
          <CalendarPayments paymentLinks={paymentsListRedux} isSimulator={true} />
        </SectionContainer>
        <ModalValidation
          open={open}
          fecha={fecha}
          noTransaccion={noTransaccion}
          paymentAmount={monto}
          folioPago={numAuth}
          authorized={estatus}
          closeModal={() => handleClosemodal()}
        />
      </section>
    </Layout>
  );
};

export default PaymentsDashboard;
