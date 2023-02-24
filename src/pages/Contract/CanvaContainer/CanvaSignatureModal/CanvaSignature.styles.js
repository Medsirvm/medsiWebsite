import { makeStyles } from "@material-ui/styles";

export const CanvaSignatureStyles = makeStyles((theme) => ({
  mainContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    height: "80%",
    boxShadow: 24,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10
  },
  canvaContainer: {
    width: "100%",
    height: "90%"
  }
}));
