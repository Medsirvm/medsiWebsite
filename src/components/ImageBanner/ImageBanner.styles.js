import { makeStyles } from "@material-ui/styles";
import banner from "../../assets/images/MedsiTandaAhorroBanner.svg";
export const imageBannerStyles = makeStyles({
  mainContainer: {
    backgroundImage: `url(${banner})`,
    backgroundSize: "center",
    backgroundPosition: "cover",
    minHeight:155,
  },
});
