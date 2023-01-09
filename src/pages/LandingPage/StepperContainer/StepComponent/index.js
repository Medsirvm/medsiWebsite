import { Grid, Typography } from "@mui/material";
import React from "react";
import { stepComponentStyles } from "./stepComponente.styles";
import CenteredContent from "../../../../components/CenteredContent";
import { FONTS } from "../../../../constants/fontsConstants";
const StepComponent = (props) => {
  const { stepIcon, stepTitle, stepDescription, needLine } = props;
  const classes = stepComponentStyles();
  return (
    <Grid
      container
      sx={{
        width: "100%",
      }}
    >
      <Grid item xs={2}>
        <Grid item xs={12}>
          <CenteredContent>
            <img src={stepIcon} alt={stepTitle} />
          </CenteredContent>
        </Grid>
        {needLine && (
          <Grid item xs={12}>
            <hr className={classes.lineStepper} />
          </Grid>
        )}
      </Grid>
      <Grid item xs={10} sx={{ padding: 2 }}>
        <Grid item xs={12}>
          <Typography sx={{ fontFamily: FONTS.URBANISTSEMIBOLD, fontSize: 28 }}>
            {stepTitle}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ fontFamily: FONTS.URBANISTREGULAR, fontSize: 20 }}>
            {stepDescription}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StepComponent;
