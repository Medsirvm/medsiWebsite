import { makeStyles } from "@material-ui/styles";
import { MAIN_COLORS } from "../../../constants/colorConstants";
export const paymentLinkStyles = makeStyles({
  contentWrapper: {
    backgroundColor: "red",
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
  amountContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 100,
  },
  paymentContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 100,
  },
});
