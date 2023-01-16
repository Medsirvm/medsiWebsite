import { makeStyles } from "@material-ui/styles";
import { FONTS } from "../../constants/fontsConstants";
import { MAIN_COLORS } from "../../constants/colorConstants";

export const PaymentDashboardPageStyles = makeStyles({
  mainContainer: {
    // marginLeft: 30,
    marginBottom:100, 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
});

export const sxStyles = { 
  h5style: {
    fontWeight: "bold", 
    marginTop: 3, 
    marginBottom: 5, 
    fontSize: 24, 
    fontFamily: FONTS.URBANISMEDIUM, 
    color: MAIN_COLORS.MAIN_PURPLE,
    marginRight: 'auto'
  },
  h5style2: {
    marginTop: 3, 
    fontSize: 22, 
    fontFamily: FONTS.URBANISTREGULAR,
  },
  buttonStyle: {
    background: `linear-gradient(90.13deg, #1B63DB 0.23%, #0ACC97 100.05%)`, 
    borderRadius: 2, 
    color: MAIN_COLORS.WHITE_COLOR, 
    width: 250, 
    height: 40, 
    marginLeft: 2, 
    marginTop: 3, 
    textTransform: "none", 
    fontFamily: "urbanistBold", 
    fontSize: 18,
  }
}