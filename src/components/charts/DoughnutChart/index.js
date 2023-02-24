import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import CenteredContent from "../../CenteredContent";
import { useSelector } from "react-redux";
import { selectPaymentList } from "../../../store/reducers/user/UserAccountSlice";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Pendientes", "Pagados", "Retrazados"],
  datasets: [
    {
      label: "Pagos",
      data: [
        9,
        2,
        1
      ],
      backgroundColor: ["#00263A", "#0ACC97", "#1B63DB"],
      borderColor: ["#00263A", "#0ACC97", "#1B63DB"],
      borderWidth: 1,

    },
  ],
};

const DoughnutChart = () => {

  const [pendingLength, setPendings] = useState(0);
  const [payedLength, setPayed] = useState(0);
  const [lateLength, setLates] = useState(0);

  const paymentsList = useSelector(selectPaymentList);

  useEffect(() => {

    const setLengths = () => {
      const pendings = paymentsList.filter((i) => i.estado === "pendiente").length;
      const payed = paymentsList.filter((i) => i.estado === "pagado").length;
      const lates = paymentsList.filter((i) => i.estado === "retrazado").length;

      setPendings(pendings);
      setPayed(payed);
      setLates(lates);
    }
    setLengths();
  }, [paymentsList])

  const chartData = {
    labels: ["Pendientes", "Pagados", "Retrazados"],
    datasets: [
      {
        label: "Total",
        data: [
          pendingLength,
          payedLength,
          lateLength
        ],
        backgroundColor: ["#00263A", "#0ACC97", "#1B63DB"],
        borderColor: ["#00263A", "#0ACC97", "#1B63DB"],
        borderWidth: 1,

      },
    ],
  };

  return (
    <CenteredContent
      style={{
        maxWidth: 300,
        maxHeight: 300,
        marginLeft: 200,
      }}
    >
      <Doughnut data={chartData} />
    </CenteredContent>
  );
};

export default DoughnutChart;
