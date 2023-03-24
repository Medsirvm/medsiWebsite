import { toast } from "react-hot-toast";
import { FONTS } from "../../constants/fontsConstants";

export const ErrorToast = (errorMessage) => {
  return toast(errorMessage, {
    duration: 6000,
    position: "top-center",
    // Styling
    style: {
        maxWidth:400,
        minWidth:350,
        fontFamily:`${FONTS.URBANISTBOLD} !important`
    },
    className: "",
    // Custom Icon
    icon: "❌",
    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#000",
      secondary: "#fff",
    },
    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });
};
