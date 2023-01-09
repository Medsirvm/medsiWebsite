import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { FONTS } from "../../../constants/fontsConstants";
import retornoDinero from "../../../assets/images/retonorDinero.png";
const ChangeOpinion = () => {
  return (
    <Box sx={{ paddingLeft: 15, marginBottom: 10 }}>
      <Typography
        sx={{
          fontFamily: FONTS.URBANISTSEMIBOLD,
          fontSize: 55,
        }}
      >
        ¿Cambiaste de opinión? <br /> ¿Ha surgido algún imprevisto? ¡No pasa
        nada!
      </Typography>

      <Typography
        sx={{
          fontFamily: FONTS.URBANISTREGULAR,
          fontSize: 22,
          marginRight: 80,
          marginTop: 2,
        }}
      >
        Si después de haber realizado tus aportaciones decides no realizar tu
        procedimiento, te devolvemos el monto que hayas depositado hasta el
        momento.* nada!
      </Typography>
      <Grid container>
        <Grid item xs={6}>
          <Typography
            sx={{
              fontFamily: FONTS.URBANISTREGULAR,
              fontSize: 18,
              marginTop: 2,
            }}
          >
            *Menos una comisión de [$x o x%] por gastos de originación.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            sx={{
              fontFamily: FONTS.URBANISTREGULAR,
              fontSize: 22,
              marginRight: 80,
              marginTop: 2,
            }}
          >
            <img src={retornoDinero} alt="" />
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChangeOpinion;
