import {
  Card,
  CardContent,
  Collapse,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { FONTS } from "../../../../constants/fontsConstants";
import ui from "../index.module.css";

const Questions = (props) => {
  const { question, description } = props;
  const [openQuestion, setOpenQuestion] = useState(false);

  const { cardContainer, questionCard } = ui;

  return (
    <Card
      className={questionCard}
      onClick={() => setOpenQuestion(!openQuestion)}
    >
      <Grid container className={cardContainer}>
        <Typography sx={{ fontFamily: FONTS.URBANISMEDIUM, fontSize: 16 }}>
          {question}
        </Typography>
        <IconButton
          onClick={() => setOpenQuestion(!openQuestion)}
          aria-label="expand"
          size="small"
        >
          {openQuestion ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </Grid>
      <div style={{ backgroundColor: "rgba(211, 211, 211,0.4)" }}>
        <Collapse in={openQuestion} timeout="auto" unmountOnExit>
          <CardContent sx={{ backgroundColor: "white" }}>
            {typeof description == !"string" ? (
              description
            ) : (
              <Typography sx={{ fontFamily: "urbanistRegular", fontSize: 16 }}>
                {description}
              </Typography>
            )}
          </CardContent>
        </Collapse>
      </div>
    </Card>
  );
};

export default Questions;
