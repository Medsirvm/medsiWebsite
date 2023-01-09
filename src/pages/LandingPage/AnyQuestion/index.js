import { Grid, Typography } from "@mui/material";
import React from "react";
import { FONTS } from "../../../constants/fontsConstants";
import interrogante from "../../../assets/images/Interrogante.png";
import Questions from "./Question";
const AnyQuestion = () => {
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore";

  const questionsArray = [
    { id: 1, question: "¿Qué es una Tanda?", description: description },
    {
      id: 2,
      question: "¿Cuántos pagos tengo que hacer para recibir mi crédito?",
      description: description,
    },
    {
      id: 3,
      question:
        "¿Qué tan pronto puedo disponer del préstamo para mi tratamiento?",
      description: description,
    },
    {
      id: 4,
      question:
        "¿Qué pasa si ya hice alguna(s) aportación(es) y ya no quiero el procedimiento?",
      description: description,
    },
    {
      id: 5,
      question:
        "¿Qué pasa si ya no puedo / quiero seguir haciendo aportaciones?",
      description: description,
    },
    {
      id: 6,
      question: "¿Cuál es la tasa de interés de Tanda Ahorro?",
      description: description,
    },
    {
      id: 7,
      question:
        "¿Cuánto tiempo tardan en aprobar mi solicitud para este producto?",
      description: description,
    },
    {
      id: 8,
      question: "¿Qué documentos necesito para tramitar Tanda Ahorro?",
      description: description,
    },
    {
      id: 9,
      question:
        "Si ya tengo una línea de crédito Medsi, ¿puedo solicitar Tanda Ahorro?",
      description: description,
    },
  ];
  return (
    <Grid container sx={{ marginLeft: 15, marginBottom: 10 }}>
      <Grid item xs={5}>
        <Typography sx={{ fontFamily: FONTS.URBANISTSEMIBOLD, fontSize: 55 }}>
          ¿Tienes alguna pregunta?
        </Typography>
        <Typography
          sx={{
            fontFamily: FONTS.URBANISTREGULAR,
            fontSize: 20,
            marginRight: 35,
            marginBottom:5
          }}
        >
          Medsi siempre está para apoyarte. Repondemos a todas tus preguntas y
          te ofrecemos la ayuda que necesitas.{" "}
        </Typography>
        <img src={interrogante} alt="interrogante" height={504} width={335} style={{marginLeft:80}} />
      </Grid>
      <Grid item xs={7} sx={{marginTop:15}}>
        {questionsArray.map((qs) => (
          <Questions
            key={qs.id}
            question={qs.question}
            description={qs.description}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default AnyQuestion;
