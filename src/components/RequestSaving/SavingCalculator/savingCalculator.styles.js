import { makeStyles } from "@material-ui/styles";
import { MAIN_COLORS } from "../../../constants/colorConstants";
import { FONTS } from "../../../constants/fontsConstants";

export const savingCalculatorStyles = makeStyles({
  calculatorContainerSimulation: {
    width: 749, 
    background: MAIN_COLORS.WHITE_COLOR,
    boxShadow: "0px 2px 4px 2px rgba(0, 0, 0, 0.4)",
    borderRadius: 40, 
    display: "flex",
    justifyContent: "center",
  },
  calculatorContainerNotSimulation: {
    maxWidth: 680,
    background: MAIN_COLORS.WHITE_COLOR,
    boxShadow: "0px 2px 4px 2px rgba(0, 0, 0, 0.4)",
    borderRadius: 40,
    padding: 34,
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
  txt18Semibold: {
    fontSize: 18,
    fontFamily: FONTS.URBANISTSEMIBOLD,
    color: MAIN_COLORS.BLACK_MEDIUM,
    marginTop: 3,
  },
  txt50Bold: {
    fontSize: 50,
    fontFamily: FONTS.URBANISTBOLD,
    color: MAIN_COLORS.MAIN_BLACK,
    marginTop: 3,
    textAlign: "center",
  },
  txt20Bold: {
    fontWeight: "bold",
    fontSize: "22px",
    fontFamily: FONTS.URBANISTBOLD,
    color: MAIN_COLORS.BLACK_MEDIUM,
  },
  buttonContract: {
    marginTop: 3,
    textTransform: "none",
    fontFamily: FONTS.URBANISTBOLD,
  } 
});
