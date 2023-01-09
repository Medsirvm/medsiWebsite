import { makeStyles } from "@material-ui/styles";
import { MAIN_COLORS } from "../../constants/colorConstants";

export const LoginPageStyles = makeStyles({
  bannerImageContainer: {
    backgroundColor: MAIN_COLORS.BLUE_BACKGROUND,
    minHeight: "100vh",
  },
  input: {
    width: 400,
    height: 48,
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
    backgroundColor: `rgba(255, 255, 255, 0.2)`,
    border: `1px solid rgba(255, 255, 255, 0.2)`,
    borderRadius: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: MAIN_COLORS.WHITE_COLOR,
  },
 
});
