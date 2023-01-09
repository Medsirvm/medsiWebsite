import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CenteredContent from "../../../components/CenteredContent";
import { MAIN_COLORS } from "../../../constants/colorConstants";
import { PRIVATE_ROUTES } from "../../../constants/routesConstants";
import { CanvaContainerPageStyles } from "./CanvaContainer.styles";
import CanvaSignatureModal from "./CanvaSignatureModal";

const CanvaContainer = (props) => {
  const { userName } = props;
  const classes = CanvaContainerPageStyles();
  const navigate = useNavigate();
  const [openSignatureModal, setOpenSignatureModal] = useState(false);
  const handleOpenSignatureModal = () => setOpenSignatureModal(true);
  const handleCloseSignatureModal = () => setOpenSignatureModal(false);
  const [imageURL, setImageURL] = React.useState(null);
  const handleSaveSignatureImage = (image) => {
    setImageURL(image);
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          backgroundColor: MAIN_COLORS.BLUE_CONTRAST,
          height: 480,
          width: 955,
          borderRadius: 7,
        }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <CenteredContent direction="column">
          <Typography
            sx={{
              fontFamily: "urbanistRegular",
              fontSize: 20,
              marginTop: 2,
              marginBottom: 5,
            }}
          >
            Yo <strong className={classes.userName}> {userName},</strong>{" "}
            acepto los términos y condiciones de Medsi
          </Typography>
          <Box
            className={classes.canvaSignatureContainer}
            onClick={handleOpenSignatureModal}
          >
            {/* <Button
              variant="contained"
              sx={{
                backgroundColor: MAIN_COLORS.DARK_BLUE,
                borderRadius: 10,
                textTransform: "none",
                width: 102,
                height: 38,
                marginLeft: 29,
                marginTop: 2,
                fontFamily: "UrbanistBold",
              }}
              onClick={handleRemoveImage}
            >
              Borrar
            </Button> */}
            {imageURL ? (
              <CenteredContent direction="column">
                <img
                  height="180px"
                  width=" 180px"
                  style={{ marginTop: "30px" }}
                  src={imageURL}
                  alt="signature"
                  className="signature"
                />
                <Typography
                  align="center"
                  sx={{
                    marginTop: 3,
                    fontFamily: "UrbanistSemiBold",
                    fontSize: 18,
                    color: MAIN_COLORS.BLACK_MEDIUM,
                  }}
                >
                  Presiona para reintentar
                </Typography>
              </CenteredContent>
            ) : (
              <Typography
                align="center"
                sx={{
                  marginTop: 22,
                  fontFamily: "UrbanistSemiBold",
                  fontSize: 18,
                  color: MAIN_COLORS.BLACK_MEDIUM,
                }}
              >
                Presiona para firmar
              </Typography>
            )}
          </Box>
          <Button
            disabled={!imageURL}
            sx={{
              width: 380,
              height: 40,
              marginTop: 3,
              textTransform: "none",
              fontFamily: "UrbanistBold",
              fontSize: 18,
              backgroundColor: MAIN_COLORS.BLACK_MEDIUM,
              borderRadius: 2,
              "&:hover": {
                backgroundColor: MAIN_COLORS.BLACK_MEDIUM,
              },
            }}
            variant="contained"
            onClick={() =>
              navigate(PRIVATE_ROUTES.DASHBOARD_PAYMENTS_PAY_CHART)
            }
          >
            Continuar
          </Button>
        </CenteredContent>
      </Box>
      <CanvaSignatureModal
        open={openSignatureModal}
        handleClose={handleCloseSignatureModal}
        onSaveSignature={handleSaveSignatureImage}
      />
    </React.Fragment>
  );
};

export default CanvaContainer;
