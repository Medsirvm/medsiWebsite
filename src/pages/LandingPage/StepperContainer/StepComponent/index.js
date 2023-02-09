import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { stepComponentStyles } from "./stepComponente.styles";
import CenteredContent from "../../../../components/CenteredContent";
import { FONTS } from "../../../../constants/fontsConstants";
import ui from '../index.module.css';

const OriginalComponent = (props) => {

  const { stepIcon, stepTitle, stepDescription, needLine } = props;
  const classes = stepComponentStyles();

  return (
    <Grid container sx={{ width: "100%", }} >
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

const StepComponentSmall = (props) => {

  const { stepIcon, stepTitle, stepDescription } = props;
  const {
    stepComponent,
    stepCompParrafs,
    stepCompTitle,
    stepCompDescription
  } = ui;

  return (
    <Box className={stepComponent}>
      <div>
        <img src={stepIcon} alt={stepTitle} />
      </div>
      <div className={stepCompParrafs}>
        <p className={stepCompTitle}>{stepTitle}</p>
        <p className={stepCompDescription}>{stepDescription}</p>
      </div>
    </Box>
  )
}


const StepComponentMedium = (props) => {

  const { stepIcon, stepTitle, stepDescription } = props;
  const {
    stepComponent,
    stepCompParrafs,
    stepCompTitle,
    stepCompDescription
  } = ui;

  return (
    <Box className={stepComponent}>
      <div>
        <img src={stepIcon} alt={stepTitle} />
      </div>
      <div className={stepCompParrafs}>
        <p className={stepCompTitle}>{stepTitle}</p>
        <p className={stepCompDescription}>{stepDescription}</p>
      </div>
    </Box>
  )
}

const StepComponent = (props) => {

  const { size } = props;

  if (size === 'xs' || size === 's') return <StepComponentSmall {...props} />
  if (size === 'm') return <StepComponentMedium {...props} />
  if (size === 'lg') return <OriginalComponent {...props} />
  return <OriginalComponent {...props} />
}


export default StepComponent;
