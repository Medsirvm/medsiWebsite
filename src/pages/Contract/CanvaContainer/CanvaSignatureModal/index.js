import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { CanvaSignatureStyles } from "./CanvaSignature.styles";
import ReactSignatureCanvas from "react-signature-canvas";
import { Snackbar } from "@mui/material";
import ui from './index.module.css';

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

  const {
    canvaModalMainContainer,
    canvaModalButton,
    canvaModalButtonCancel,
    canvaContainerBox
  } = ui;

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
          <div className={canvaModalMainContainer}>
            <ReactSignatureCanvas
              penColor="black"
              canvasProps={{ className: canvaContainerBox }}
              ref={sigCanvas}
            />
            <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }} >
              <button type="button" className={canvaModalButtonCancel} onClick={handleClose}>Cancelar</button>
              <button type="button" className={canvaModalButton} onClick={SaveSignature}>Firmar</button>
              <button type="button" className={canvaModalButton} onClick={ClearSignFromCanva}>Limpiar</button>
            </div>
          </div>
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
