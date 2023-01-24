import { makeStyles } from "@material-ui/styles";
import { MAIN_COLORS } from "../../../constants/colorConstants";

export const CanvaContainerPageStyles = makeStyles({
  txtUserName: {
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
  boxFragment: {
    backgroundColor: MAIN_COLORS.BLUE_CONTRAST,
    height: 480,
    width: 955,
    borderRadius: 7,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  txtTermsAndConditions: {
    fontFamily: "urbanistRegular",
    fontSize: 20,
    marginTop: 2,
    marginBottom: 5,
  },
  imgStyle: {
    height: '180px',
    width: '180px',
    marginTop: '30px'
  },
  tryButton: {
    marginTop: 3,
    fontFamily: "UrbanistSemiBold",
    fontSize: 18,
    color: MAIN_COLORS.BLACK_MEDIUM,
  },
  signButton: {
    marginTop: 22,
    fontFamily: "UrbanistSemiBold",
    fontSize: 18,
    color: MAIN_COLORS.BLACK_MEDIUM,
  },
  verifyContinueButton: {
    width: 380,
    height: 40,
    marginTop: 3,
    textTransform: "none",
    fontFamily: "UrbanistBold",
    fontSize: 18,
    backgroundColor: MAIN_COLORS.BLACK_MEDIUM,
    borderRadius: 2,
    "&:hover": {
      backgroundColor: MAIN_COLORS.BLACK_MEDIUM,
    },
  }
});
