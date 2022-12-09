import { makeStyles } from "@material-ui/styles";
import { MAIN_COLORS } from "../../../constants/colorConstants";

export const drawerStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  paper: {
    background:
      "linear-gradient(0deg, rgba(196,196,196,1) 35%, rgba(53,82,204,1) 100%)",
  },
  logo: {
    marginTop: 20,
    marginLeft: 50,
    width: 110,
    height: 77,
    marginBottom: 135,
  },
  listItem: {
    height: 70,
    textDecoration: "none",
    color: MAIN_COLORS.MAIN_PURPLE ,
    fontWeight: "bolder",
    "&:hover": {
      backgroundColor: "none",
    },
  },
  root: {
    '&$selected': {
      backgroundColor: 'white !important',
      '&:hover': {
        backgroundColor: 'yellow',
      }
    },
  },
  selected: {},

});
