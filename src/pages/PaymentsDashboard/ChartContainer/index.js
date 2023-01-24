import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DoughnutChart from "../../../components/charts/DoughnutChart";
import { MAIN_COLORS } from "../../../constants/colorConstants";
const ChartContainer = ({ paymentsList }) => {

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

  return (
    <Box
      sx={{
        width: 749,
        height: 452,
        backgroundColor: MAIN_COLORS.WHITE_COLOR,
        boxShadow: `0px 2px 4px 2px rgba(0, 0, 0, 0.4)`,
        borderRadius: 5,
      }}
    >
      <div>
        <Typography
          sx={{
            fontFamily: "urbanistRegular",
            fontSize: 18,
            marginBottom: 5,
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 2,
          }}
        >
          {graphicHeaderText()}
        </Typography>
        <div>
          <DoughnutChart />
        </div>
      </div>
    </Box>
  );
};

export default ChartContainer;
