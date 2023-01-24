import { Box, Typography } from "@mui/material";
import React from "react";
import DoughnutChart from "../../../components/charts/DoughnutChart";
import { MAIN_COLORS } from "../../../constants/colorConstants";
const ChartContainer = () => {
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
          ¡Ya llevas <strong> 2 </strong> quincenas aportadas! Tan solo te
          faltan 2 pagos más para recibir tu crédito Tanda Ahorro
        </Typography>
        <div>
          <DoughnutChart />
        </div>
      </div>
    </Box>
  );
};

export default ChartContainer;
