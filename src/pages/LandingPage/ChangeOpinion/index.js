import { Box } from "@mui/system";
import React from "react";
import retornoDinero from "../../../assets/images/retonorDinero.png";
import ui from './index.module.css';

const ChangeOpinion = () => {

  const {
    changeOpinion,
    opinionImage,
    opinionParraf,
    opinionSubText,
    opinionTitle,
    opinionTitle2,
    subTextBox
  } = ui;

  return (
    <Box className={changeOpinion}>
      <p className={opinionTitle}>¿Cambiaste de opinión?<br />¿Ha surgido algún imprevisto?</p>
      <p className={opinionTitle2}>¡No pasa nada!</p>
      <p className={opinionParraf}>
        Si después de haber realizado tus aportaciones decides no realizar tu
        procedimiento, te devolvemos el monto que hayas depositado hasta momento.*
      </p>
      <Box className={subTextBox}>
        <p className={opinionSubText}> *Menos una comisión de [$x o x%] por gastos de originación. </p>
      </Box>
      <div className={opinionImage} style={{ backgroundImage: `url(${retornoDinero})` }}></div>
    </Box>
  );
};

export default ChangeOpinion;
