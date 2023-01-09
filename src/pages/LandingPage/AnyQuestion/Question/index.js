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
import { MAIN_COLORS } from "../../../../constants/colorConstants";
import { FONTS } from "../../../../constants/fontsConstants";
const Questions = (props) => {
  const { question, description } = props;

  const [openQuestion, setOpenQuestion] = useState(false);
  return (
    <Card
      sx={{
        width: "80%",
        minHeight: 50,
        background: MAIN_COLORS.WHITE_COLOR,
        boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
        borderRadius: 2,
        marginTop:4
      }}
      onClick={() => setOpenQuestion(!openQuestion)}
    >
      <Grid container>
        <Grid item xs={10}>
          <Typography
            sx={{
              fontFamily: FONTS.URBANISMEDIUM,
              fontSize: 18,
              marginTop: "10px",
              marginLeft: 10,
            }}
          >
            {question}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <IconButton
            onClick={() => setOpenQuestion(!openQuestion)}
            aria-label="expand"
            size="small"
            sx={{
              marginTop: "5px",
              marginLeft: 7,
            }}
          >
            {openQuestion ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </Grid>
      </Grid>
      <div style={{ backgroundColor: "rgba(211,211,211,0.4)" }}>
        <Collapse in={openQuestion} timeout="auto" unmountOnExit>
          <CardContent sx={{ backgroundColor: "white" }}>
            <Typography
              sx={{
                fontFamily: "urbanistRegular",
                fontSize: 20,
              }}
            >
              {description}
            </Typography>
          </CardContent>
        </Collapse>
      </div>
    </Card>
  );
};

export default Questions;
