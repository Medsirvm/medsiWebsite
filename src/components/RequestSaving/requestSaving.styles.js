import { makeStyles } from "@material-ui/styles";
import { MAIN_COLORS } from "../../constants/colorConstants";
import { FONTS } from "../../constants/fontsConstants";

export const requestSavingStyles = makeStyles({
  mainContainer: {
    // marginLeft: 30,
    marginBottom: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  txtTanda: {
    fontWeight: "bold",
    marginLeft: 3,
    marginTop: 2,
    marginBottom: 5,
    marginRight: 'auto',
    fontSize: 24,
    fontFamily: FONTS.URBANISMEDIUM,
    color: MAIN_COLORS.MAIN_PURPLE,
  }
});
