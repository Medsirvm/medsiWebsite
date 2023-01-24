import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CenteredContent from "../../../components/CenteredContent"; 
import { PRIVATE_ROUTES } from "../../../constants/routesConstants";
import { CanvaContainerPageStyles } from "./CanvaContainer.styles";
import CanvaSignatureModal from "./CanvaSignatureModal";
import axios from "axios";
import ui from './index.module.css';
import { useSelector } from "react-redux";
import { selectCreditLineAndPaymentAmounts } from "../../../store/reducers/user/UserAccountSlice";
import { generateTransaction } from "../../../utils/generateTransaction";
import { paymentListError, userError } from "../../../constants/messageErrors";

const CanvaContainer = (props) => {
  const { userInformation } = props;
  const { first_name: fName, last_name: lName, maternal_name: mName } = userInformation;
  const { REACT_APP_CREAR_TX_GENERICO, REACT_APP_CREAR_USUARIO_GENERICO } = process.env;
  const classes = CanvaContainerPageStyles();
  const navigate = useNavigate();
  const userName = `${fName} ${lName} ${mName}`;
  const [openSignatureModal, setOpenSignatureModal] = useState(false);
  const handleOpenSignatureModal = () => setOpenSignatureModal(true);
  const handleCloseSignatureModal = () => setOpenSignatureModal(false);
  const [imageURL, setImageURL] = React.useState(null);
  const [isValid, setIsValid] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const handleSaveSignatureImage = (image) => setImageURL(image);
  const simulationPaymentAmounts = useSelector(selectCreditLineAndPaymentAmounts);

  const handleSignContract = async () => {

    if (!isValid) {
      setLoading(true);
      try {
        const {
          first_name,
          last_name,
          maternal_name,
          kyc_status,
          email,
          phone_number,
          meta_data,
          is_active,
          created_at
        } = userInformation;

        const {
          biWeeklyAmount,
          creditLineAmount
        } = simulationPaymentAmounts;

        const axiosData = {
          nombre: first_name,
          ap_paterno: last_name,
          ap_materno: maternal_name,
          estado_kyc: kyc_status ?? "pendiente",
          estado_credito: meta_data.creditEligibilityData[0].comment,
          correo: email,
          telefono: phone_number,
          linea_credito: creditLineAmount,
          pago_quincenal: biWeeklyAmount,
          estado_contrato: "firmado",
          estado_usuario: is_active ? "activo" : "inactivo",
          fecha_creacion: created_at,
          imagen_firma: imageURL.slice(22)
        }

        const userResponse = await axios
          .post(REACT_APP_CREAR_TX_GENERICO, axiosData)
          .then((res) => res)
          .catch((error) => null);

        if (userResponse === null) throw new Error(userError);

        const { status: userStatus } = userResponse;

        if (userStatus === 200) {
          for (let index = 0; index < 12; index++) {
            const axiosPaymentsData = {
              correo: email,
              fecha_pago: new Date(new Date().setHours(24 * (15 * (index + 1)))).toLocaleDateString('sv'),
              estado: "pendiente",
              tipo_tx: "tandas_tx",
              monto: biWeeklyAmount,
              id_pago: index + 1,
              id_orden_pago: generateTransaction([last_name, maternal_name, first_name, index])
            }
            const paymentResponse = await axios
              .post(REACT_APP_CREAR_USUARIO_GENERICO, axiosPaymentsData)
              .then((res) => res.data === 'OK')
              .catch((error) => null);

            if (paymentResponse === null) throw new Error(paymentListError);
          };
        }
      } catch (error) {
        window.alert(error.message)
      }
      setIsValid(true);
      setLoading(false)
    } else {
      setIsValid(false);
      navigate(PRIVATE_ROUTES.DASHBOARD_PAYMENTS_PAY_CHART);
    }
  }

  const {
    boxFragment,
    txtTermAndConditions,
    txtUserName,
    canvaSignatureContainer,
    imgStyle,
    tryButton,
    signButton,
    verifyContinueButton
  } = classes;

  return (
    <React.Fragment>
      <Box sx={boxFragment}>
        <CenteredContent direction="column">
          <Typography sx={txtTermAndConditions} >
            Yo <strong className={txtUserName}> {userName},</strong>{" "}
            acepto los términos y condiciones de Medsi
          </Typography>
          <Box
            className={canvaSignatureContainer}
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
                // height="180px" 
                // width=" 180px" 
                // style={{ marginTop: "30px" }} 
                style={imgStyle}
                src={imageURL} 
                alt="signature" 
                className="signature" 
                />
                <Typography align="center" sx={tryButton} >
                  Presiona para reintentar
                </Typography>
              </CenteredContent>
            ) : (
              <Typography align="center" sx={signButton} >
                Presiona para firmar
              </Typography>
            )}
          </Box>
          {
            loading
              ? <LoadingComponent />
              : (
                <Button
                  disabled={!imageURL}
                  sx={verifyContinueButton}
                  variant="contained"
                  onClick={() => handleSignContract()}
                >
                  {isValid ? "Continuar" : "Verificar"}
                </Button>
              )
          }
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

const LoadingComponent = () => {
  return (
    <div className={ui.loadingCircle}> </div>
  )
}

export default CanvaContainer; 