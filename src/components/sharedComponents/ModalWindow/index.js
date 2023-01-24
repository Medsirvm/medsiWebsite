import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  height:"auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  overflow:"auto"
};

export default function ModalWindow(props) {
  const { open, handleClose, styles, children } = props;
  return (
    
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
        style={{overflow:"auto"}}
       
      >
        <Fade in={open}>
          <Box sx={styles ? `${styles} ${modalStyle}` : modalStyle}>
            {children}
          </Box>
        </Fade>
      </Modal>
    
  );
}
