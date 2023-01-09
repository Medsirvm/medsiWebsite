import { makeStyles } from "@material-ui/styles";
import bannerPuerquitos from "../../../assets/images/banner_Puerquitos.svg";

export const bannerSavingStyles = makeStyles({
  bannerImageContainer: {
    backgroundImage: `url(${bannerPuerquitos})`,
    backgroundSize: "center",
    backgroundPosition: "cover",
    //backgroundRepeat: "no-repeat",
    minHeight: 354,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
