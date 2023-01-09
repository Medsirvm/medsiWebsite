import { makeStyles } from "@material-ui/styles";
import { MAIN_COLORS } from "../../../../constants/colorConstants";

export const stepComponentStyles = makeStyles({
  lineStepper: {
    height: 80,
    width: 2,
    borderWidth: 0,
    borderRadius:10,
    color: MAIN_COLORS.MAIN_BLACK,
    backgroundColor: MAIN_COLORS.MAIN_BLACK,
  },
});
