import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DoughnutChart from "../../../components/charts/DoughnutChart";
import EChartsTest from "../../../components/charts/DoughnutChart/ECharts";
import GradientButton from "../../../components/GradientButton";
import { MAIN_COLORS } from "../../../constants/colorConstants";
import ui from './index.module.css';

export default function ChartContainer({ paymentsList }) {

  const [pagados, setPagados] = useState(0);

  useEffect(() => {

    const setPayment = () => {
      const quincena = paymentsList.filter(pay => pay.estado === 'pagado').length;
      setPagados(quincena);
    }

    setPayment();

  }, [paymentsList])

  const graphicHeaderText = () => {
    if (pagados === 0) return "Estamos listos para iniciar. Con 4 pagos quincenales podrás recibir tu crédito Tanda Ahorro.";
    if (pagados === 1) return "¡Ya llevas 1 quincena aportada! Tan solo te faltan 3 pagos más para recibir tu crédito Tanda Ahorro";
    if (pagados === 2) return "¡Ya llevas 2 quincenas aportadas! Tan solo te faltan 2 pagos más para recibir tu crédito Tanda Ahorro";
    if (pagados === 3) return "¡Ya llevas 3 quincenas aportadas! Tan solo te falta 1 pago más para recibir tu crédito Tanda Ahorro";
    if (pagados >= 4) return "¡Ya llevas 4 quincenas aportadas! Felicidades, ya puedes recibir tu crédito Tanda Ahorro";
  }

  const {
    chartContainer,
    chartContainerHead,
    chartContainerBody,
    chartContainerFooter,
    bodyParrafBox
  } = ui;

  return (
    <div className={chartContainer} >
      <div className={chartContainerHead}>
        <p>
          {graphicHeaderText()}
        </p>
      </div>
      <div className={chartContainerBody}>
        {/* <DoughnutChart /> */}
        <EChartsTest />
        <div className={bodyParrafBox}>
          <p>
            Con tu pago oportuno, recibes tu crédito Tanda Ahorro por <strong>$5,000</strong> el:
          </p>
          <p style={{ textAlign: 'center', fontFamily: 'UrbanistBold' }}><strong>2 de Abril, 2023</strong></p>
        </div>
      </div>
      <div className={chartContainerFooter}>
        <GradientButton>
          Cancelar tu Tanda Ahorro
        </GradientButton>
      </div>
    </div>
  );
};