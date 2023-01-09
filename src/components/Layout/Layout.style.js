import { makeStyles } from "@material-ui/styles";
import banner from "../../assets/images/MedsiTandaAhorroBanner.svg";
export const layoutPageStyles = makeStyles({
  welcomeMessageContainer: {
    padding: 10,
  },
  textWrapper: {
    marginLeft: 30,
  },
  bannerImageContainer: {
    backgroundImage: `url(${banner})`,
    backgroundSize: "center",
    backgroundPosition: "cover",
    // backgroundRepeat:"no-repeat",
    minHeight: 155,
    width: "100%",
  },
});
