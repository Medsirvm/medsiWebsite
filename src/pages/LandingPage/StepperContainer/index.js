import { Box } from "@mui/material";
import React from "react";
import StepComponent from "./StepComponent";
//Icons
import yourElection from "../../../assets/icons/tueligesIcon.svg";
import biweeklyPayment from "../../../assets/icons/biweeklyPaymentsIcon.svg";
import accessToYourCredit from "../../../assets/icons/accessToYourCreditIcon.svg";
import fixedPayments from "../../../assets/icons/fixPaymentsIcon.svg";
import tandaAhorro from "../../../assets/icons/tandaAhorroIcon.svg";
import ui from './index.module.css';

const StepperContainer = (props) => {

  const { size } = props;
  const steps = [
    {
      id: 1,
      icon: yourElection,
      title: "1. Tú eliges",
      description:
        "Elige el monto que quieres aportar cada quincena y conoce la cantidad que puedes recibir de crédito.",
    },
    {
      id: 2,
      icon: biweeklyPayment,
      title: "2. Pagos quincenales",
      description:
        "Realiza tu pago quincenal por el monto que seleccionaste. Puedes hacerlo desde nuestro portal o en efectivo en tiendas de conveniencia, bancos, farmacias, etc.",
    },
    {
      id: 3,
      icon: accessToYourCredit,
      title: "3. Accede a tu crédito",
      description:
        "Tan pronto hayas realizado tu cuarto pago quincenal, puedes disponer del monto total de tu crédito Medsi para pagar tu procedimiento médico",
    },
    {
      id: 4,
      icon: fixedPayments,
      title: "4. Pagos fijos",
      description:
        "A partir de que recibes tu tratamiento, realizarás el pago de tu crédito realizando durante 8 quincenas por el mismo monto que las que realizaste inicialmente.",
    },
    {
      id: 5,
      icon: tandaAhorro,
      title: "5. Tanda Ahorro te recompensa",
      description:
        "Si has cumplido puntualmente con todos tus pagos, ¡Medsi te regala las últimas 2 parcialidades de tu crédito!",
    },
  ];

  const {
    stepperContainer,
    stepperTitle,
    stepperSubtitle,
    stepperButton,
    stepperList
  } = ui;

  return (
    <Box className={stepperContainer}>
      <h3 className={stepperTitle}>¿Cómo funciona?<br />¡Es muy fácil!</h3>
      <h3 className={stepperSubtitle}>Ahorrar con Tanda Ahorro es un proceso muy sencillo, sólo sigue los siguientes pasos.</h3>
      <Box className={stepperList}>
        {
          steps.map((st, index) => (
            <StepComponent
              key={st.id}
              stepIcon={st.icon}
              stepTitle={st.title}
              stepDescription={st.description}
              needLine={index === steps.length - 1 ? false : true}
              size={size}
            />
          ))
        }
      </Box>
      <button type="button" className={stepperButton}>Activar Tanda Ahorro ahora</button>
    </Box>
  );
};

export default StepperContainer;
