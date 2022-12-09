import { makeStyles } from "@material-ui/styles";
import banner from "../../assets/images/MedsiTandaAhorroBanner.svg";
export const imageBannerStyles = makeStyles({
  mainContainer: {
    backgroundImage: `url(${banner})`,
    backgroundSize: "center",
    backgroundPosition: "cover",
    // backgroundRepeat:"no-repeat",
    minHeight:155,
    width:"100%"
  },
});
