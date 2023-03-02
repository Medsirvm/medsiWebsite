import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
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
import { getScheduledPaymentDates } from '../../../utils/generatePaymentDates.js';
import Parraf from "../../../components/Parraf";

const CanvaContainer = (props) => {
  const { userInformation, buttonDisabled } = props;
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

        const { biWeeklyAmount, creditLineAmount } = simulationPaymentAmounts;

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
          .post(REACT_APP_CREAR_USUARIO_GENERICO, axiosData)
          .then((res) => res)
          .catch((error) => null);

        if (userResponse === null) throw new Error(userError);

        const { status: userStatus } = userResponse;

        if (userStatus === 200) {

          let nextPaymentDate = (() => {
            const thisMoment = new Date().toLocaleDateString('SV');
            const [YY, MM, DD] = thisMoment.split('-');
            if (parseInt(DD) < 17) {
              const month = parseInt(MM) < 10 ? '0' + parseInt(MM) : MM;
              return `${YY}-${month}-17`;
            } else {
              const month = (parseInt(MM) + 1) < 10 ? '0' + (parseInt(MM) + 1) : parseInt(MM) + 1;
              return `${YY}-${month}-02`;
            }
          })();

          for (let index = 1; index <= 12; index++) {
            const axiosPaymentsData = {
              correo: email,
              fecha_pago: nextPaymentDate,
              // fecha_pago: new Date(new Date().setHours(24 * (15 * (index + 1)))).toLocaleDateString('sv'),
              estado: "pendiente",
              tipo_tx: "tandas_tx",
              monto: biWeeklyAmount,
              id_pago: index,
              id_orden_pago: generateTransaction([last_name, maternal_name, first_name, index])
            }
            const paymentResponse = await axios
              .post(REACT_APP_CREAR_TX_GENERICO, axiosPaymentsData)
              .then((res) => res)
              .catch((error) => null);

            console.log({ paymentResponse });
            nextPaymentDate = await getScheduledPaymentDates(nextPaymentDate, index);

            if (paymentResponse === null) throw new Error(paymentListError);
          };
          navigate(PRIVATE_ROUTES.DASHBOARD_PAYMENTS_PAY_CHART);
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
    txtUserName,
  } = classes;

  const {
    canvaSignatureContainer,
    canvaContainer,
    containerBox,
    canvaContainerButton,
    signatureContainerBox
  } = ui;

  return (
    <>
      <div className={canvaContainer}>
        <div className={containerBox}>
          <Parraf type="SemiBold" size={18} bottom={1} color="#00000080">
            Yo <strong className={txtUserName}> {userName},</strong> acepto los términos y condiciones de Medsi
          </Parraf>
          <Box className={canvaSignatureContainer} onClick={handleOpenSignatureModal} >
            {imageURL ? (
              <div className={signatureContainerBox}>
                <img
                  style={{ height: '180px', width: '180px' }}
                  src={imageURL}
                  alt="signature"
                  className="signature"
                />
                <Parraf type="SemiBold" size={18} color="#00000080">
                  Presiona para reintentar
                </Parraf>
              </div>
            ) : (
              <Parraf type="SemiBold" size={18} color="#00000080">
                Presiona para firmar
              </Parraf>
            )}
          </Box>
          {
            loading
              ? <LoadingComponent />
              : (
                <button
                  type="button"
                  disabled={!imageURL || buttonDisabled}
                  className={canvaContainerButton}
                  onClick={() => handleSignContract()}
                >
                  {isValid ? "Continuar" : "Verificar"}
                </button>
              )
          }
        </div>
      </div>
      <CanvaSignatureModal
        open={openSignatureModal}
        handleClose={handleCloseSignatureModal}
        onSaveSignature={handleSaveSignatureImage}
      />
    </>
  );
};

const LoadingComponent = () => {

  const { loadingCircle } = ui;
  return (
    <div className={loadingCircle}> </div>
  )
}

export default CanvaContainer;