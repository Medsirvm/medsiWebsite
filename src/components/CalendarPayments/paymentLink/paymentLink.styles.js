import { makeStyles } from "@material-ui/styles";
import { MAIN_COLORS } from "../../../constants/colorConstants";
export const paymentLinkStyles = makeStyles({
  contentWrapper: {
    width: 777,
    height: 40,
    marginBottom: 10,
    borderRadius: 8,
    display: "flex",
  },
  iconContainer: {
    minWidth: 50,
    minHeight: 38,
    maxWidth: 50,
    maxHeight: 38,
    backgroundColor: MAIN_COLORS.LIGHT_GREEN,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dateContainer: {
    minWidth: 320,
    minHeight: 38,
    maxWidth: 320,
    maxHeight: 38,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paymentContainer: {
    minWidth: 180,
    minHeight: 38,
    maxWidth: 180,
    maxHeight: 38,
    display: "flex",
    alignItems: "center",
    marginLeft: 80,
  },
  loanContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  isLoanLink: {
    width: 777,
    height: 40,
    marginBottom: 10,
    borderRadius: 8,
    display: "flex",
    backgroundColor: MAIN_COLORS.BLUE_CONTRAST,
  },
});
