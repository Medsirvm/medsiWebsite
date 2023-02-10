import { Box } from "@mui/material";
import React from "react";
import CenteredContent from "../../../../components/CenteredContent";
import ui from '../index.module.css';

const OriginalComponent = (props) => {

  const { stepIcon, stepTitle, stepDescription, needLine } = props;
  const {
    stepComponent,
    stepCompParrafs,
    stepCompTitle,
    stepCompDescription,
    lineStepper,
    lineStepperBox
  } = ui;

  return (
    <Box className={stepComponent} >
      <Box>
        <Box>
          <CenteredContent>
            <img src={stepIcon} alt={stepTitle} style={{ width: '70px', height: '70px' }} />
          </CenteredContent>
        </Box>
        {needLine && (
          <Box className={lineStepperBox}>
            <hr className={lineStepper} />
          </Box>
        )}
      </Box>
      <Box className={stepCompParrafs}>
        <p className={stepCompTitle}>{stepTitle}</p>
        <p className={stepCompDescription}>{stepDescription}</p>
      </Box>
    </Box>
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
