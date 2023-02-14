import { Box } from "@mui/system";
import React from "react";
import retornoDinero from "../../../assets/images/retonorDinero.png";
import ui from './index.module.css';

const ChangeOpinion = (props) => {

  const { size } = props;
  const isDesktop = (size === 'l' || size === 'xl' || size === 'xxl');

  const {
    changeOpinion,
    opinionImage,
    opinionParraf,
    opinionSubText,
    opinionTitle,
    opinionTitle2,
    subTextBox,
    opinionSplitBox,
    splitBoxText,
    changeOpinionContainer
  } = ui;

  const OpinionImage = ({ variant }) => {

    if (
      (isDesktop && variant === 'desktop') ||
      (!isDesktop && variant === undefined)
    ) {
      return (
        <div
          className={opinionImage}
          style={{ backgroundImage: `url(${retornoDinero})` }}
        ></div>
      )
    }
  }

  const OpinionTitle = () => {

    if (isDesktop) {
      return (
        <p className={opinionTitle}>¿Cambiaste de opinión?<br />¿Ha surgido algún imprevisto? ¡No pasa nada!</p>
      )
    }
    return (
      <>
        <p className={opinionTitle}>¿Cambiaste de opinión?<br />¿Ha surgido algún imprevisto?</p>
        <p className={opinionTitle2}>¡No pasa nada!</p>
      </>
    )
  }


  return (
    <Box className={changeOpinion}>
      <Box className={changeOpinionContainer}>
        <OpinionTitle />
        <Box className={opinionSplitBox}>
          <div className={splitBoxText}>
            <p className={opinionParraf}>
              Si después de haber realizado tus aportaciones decides no realizar tu
              procedimiento, te devolvemos el monto que hayas depositado hasta momento.*
            </p>
            <Box className={subTextBox}>
              <p className={opinionSubText}> *Menos una comisión de [$x o x%] por gastos de originación. </p>
            </Box>
          </div>
          <OpinionImage />
        </Box>
      </Box>
      <OpinionImage variant="desktop" />
    </Box>
  );
};

export default ChangeOpinion;
