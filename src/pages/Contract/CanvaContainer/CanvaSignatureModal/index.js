import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { CanvaSignatureStyles } from "./CanvaSignature.styles";
import ReactSignatureCanvas from "react-signature-canvas";
import { Button, Snackbar } from "@mui/material";
import { MAIN_COLORS } from "../../../../constants/colorConstants";

export default function CanvaSignatureModal(props) {
  const { open, handleClose, onSaveSignature } = props;
  const sigCanvas = React.useRef();
  const [openSnackbarError, setOpenSnackbarError] = React.useState(false);
  const ClearSignFromCanva = () => {
    sigCanvas.current.clear();
  };
  const handleCloseSnackbarError = () => {
    setOpenSnackbarError(false);
  };

  const SaveSignature = () => {
    //Sacar el SHA de la imagen para tener un valor unico o el MD5
    const URL = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
    if (sigCanvas.current.isEmpty()) {
      setOpenSnackbarError(true);
    } else {
      onSaveSignature(URL);
      handleClose();
    }
  };

  const classes = CanvaSignatureStyles();
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className={classes.mainContainer}>
            <ReactSignatureCanvas
              penColor="black"
              canvasProps={{ className: classes.canvaContainer }}
              ref={sigCanvas}
            />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                paddingLeft: 15,
                paddingRight: 15,
              }}
            >
              <Button
                variant="contained"
                color="error"
                sx={{
                  width: 150,
                  height: 40,
                  borderRadius: 10,
                  marginRight: 3,
                }}
                onClick={handleClose}
              >
                Cancelar
              </Button>
              <Button
                variant="contained"
                sx={{
                  width: 180,
                  height: 40,
                  borderRadius: 10,
                  marginRight: 3,
                  backgroundColor: MAIN_COLORS.MAIN_PURPLE,
                }}
                onClick={SaveSignature}
              >
                Firmar
              </Button>
              <Button
                variant="contained"
                sx={{
                  width: 180,
                  height: 40,
                  borderRadius: 10,
                  marginRight: 3,
                  backgroundColor: MAIN_COLORS.BLUE_MEDIUM,
                }}
                onClick={ClearSignFromCanva}
              >
                Limpiar
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
      <Snackbar
        open={openSnackbarError}
        autoHideDuration={6000}
        onClose={handleCloseSnackbarError}
        message="Ingresa una firma válida"
        vertical="bottom"
        horizontal="center"
      />
    </div>
  );
}
