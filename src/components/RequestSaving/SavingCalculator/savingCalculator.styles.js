import { makeStyles } from "@material-ui/styles";
import { MAIN_COLORS } from "../../../constants/colorConstants";

export const savingCalculatorStyles = makeStyles({
  calculatorContainerSimulation: {
    width: 749,
    height: 452,
    background: MAIN_COLORS.WHITE_COLOR,
    boxShadow: "0px 2px 4px 2px rgba(0, 0, 0, 0.4)",
    borderRadius: 40,
    paddingLeft: 40,
    display: "flex",
    justifyContent: "center",
  },
  calculatorContainerNotSimulation: {
    width: 680,
    height: 350,
    background: MAIN_COLORS.WHITE_COLOR,
    boxShadow: "0px 2px 4px 2px rgba(0, 0, 0, 0.4)",
    borderRadius: 40,
    paddingLeft: 40,
    paddingBottom: 20,
    display: "flex",
    justifyContent: "center",
  },

  sliderWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 30,
  },
  requestSaveButton: {
    width: 398,
    height: 40,
    background: "linear-gradient(90.13deg, #1B63DB 0.23%, #0ACC97 100.05%)",
  },
});
