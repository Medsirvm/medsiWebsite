import { makeStyles } from "@material-ui/styles";
import { MAIN_COLORS } from "../../../constants/colorConstants";

export const CanvaContainerPageStyles = makeStyles({
  userName: {
    color: MAIN_COLORS.BLUE_MEDIUM,
  },
  canvaSignatureContainer: {
    background: MAIN_COLORS.WHITE_COLOR,
    boxShadow: `0px 2px 4px 2px rgba(0, 0, 0, 0.4);`,
    borderRadius: 20,
    width: 430,
    height: 280,
    cursor: "pointer",
  },
 
});
