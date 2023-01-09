import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import CenteredContent from "../../CenteredContent";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Pendientes", "Pagados", "Retrazados"],
  datasets: [
    {
      label: "Pagos",
      data: [9, 2, 1],
      backgroundColor: ["#00263A", "#0ACC97", "#1B63DB"],
      borderColor: ["#00263A", "#0ACC97", "#1B63DB"],
      borderWidth: 1,

    },
  ],

};
const DoughnutChart = () => {
  return (
    <CenteredContent
      style={{
        maxWidth: 300,
        maxHeight: 300,
        marginLeft: 200,
      }}
    >
      <Doughnut data={data} />
    </CenteredContent>
  );
};

export default DoughnutChart;
