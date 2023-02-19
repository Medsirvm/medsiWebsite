import {
  Box,
  Button,
  Grid,
  Snackbar,
  TextField
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CenteredContent from "../../components/CenteredContent";
import MedsiLogo from "../../assets/images/medsiIsotipoLogo.png";
import emailIcon from "../../assets/images/Mail.png";
import passwordIcon from "../../assets/images/Password.png";
import vectorMedsi from "../../assets/images/backgroundVector.png";
import { getUserInformationByPhoneNumber } from "../../api/userInformation";
import { generateOTPCode, verifyOTPCode } from "../../api/otpProcess";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsWaitingForOTPCode,
  selectOTPInformation,
  setOTPUserSemilla,
  setUserAuth,
  setUserInformation,
  setWaitingForOtp,
} from "../../store/reducers/user/UserAccountSlice";
import CountDown from "../../components/sharedComponents/CountDown";
import { useNavigate } from "react-router-dom";
import { PRIVATE_ROUTES } from "../../constants/routesConstants";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import useWindowSize from "../../hooks/useWindowSize";
import ui from './index.module.css';


const LoginPage = () => {
  const dispatch = useDispatch();
  // const isWaitingOTP = true
  const isWaitingOTP = useSelector(selectIsWaitingForOTPCode);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [disabled, setDisabled] = useState(true);
  const otpInformation = useSelector(selectOTPInformation);
  const { correo, numero, semilla } = otpInformation;
  const [openSnackbarError, setOpenSnackbarError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [expired, setExpired] = useState(false);
  const navigate = useNavigate();
  const handleCloseSnackbarError = () => {
    setOpenSnackbarError(false);
  };

  const { size } = useWindowSize();

  useEffect(() => {
    dispatch(setWaitingForOtp(false));
  }, [dispatch]);

  const handlePhoneNumberChange = (phoneNumber) => {
    const regex = /^[0-9\b]+$/;
    if (phoneNumber === "" || regex.test(phoneNumber)) {
      if (phoneNumber.length <= 10) {
        setPhoneNumber(phoneNumber);
        setDisabled(true);
      }
      if (phoneNumber.length === 10) {
        setDisabled(false);
      }
    }
  };

  const handleChangeOTPCode = (otpCode) => {
    setOtpCode(otpCode);
  };

  const generateOTPCodeProcess = (phoneNumber, email) => {
    generateOTPCode(phoneNumber, email).then((res) => {
      const otpData = {
        correo: email,
        numero: phoneNumber,
        semilla: res.data.semilla,
      };
      dispatch(setOTPUserSemilla(otpData));
      dispatch(setWaitingForOtp(true));
      setIsLoading(false);
      // setWait(true);
    });
  };

  const validateOTPCode = () => {
    console.log(otpInformation);
    verifyOTPCode(correo, numero, otpCode, semilla).then((res) => {
      if (res.data.statusCode === 200) {
        dispatch(setUserAuth(true));
        navigate(PRIVATE_ROUTES.DASHBOARD_TANDA_AHORRO);
      }
    });
  };

  const fetchUserInformation = () => {
    setIsLoading(true);
    getUserInformationByPhoneNumber(phoneNumber)
      .then((res) => {
        if (res?.data?.body === "[]" || !res.data.body) {
          setOpenSnackbarError(true);
        } else {
          const result = res.data.body;
          const email = result.email;
          dispatch(setUserInformation(res?.data?.body));
          generateOTPCodeProcess(phoneNumber, email);
        }
      })
      .catch((err) => {
        console.log("Error, ", err);
      });
  };

  const {
    loginContainer,
    loginTitle,
    loginFormTitle,
    urbanistSemiBoldCenter,
    urbanistRegularFooter,
    emailInputForm,
    loginFormBox,
    emailInputFormProps,
    loginButtonContinue,
    loginButtonValidate,
    loginButtonLoading,
    loginBox,
    loginFormBoxCountDown,
    loginFooter,
    vectorMedsiPic
  } = ui;

  const LoginTitle = () => <p className={loginTitle}>Iniciar Sesion</p>
  const LoginLogo = () => <img src={MedsiLogo} alt="logoIsotipo" />
  const LoginFormTitle = () => <p className={loginFormTitle}> Escribe tu número de celular </p>
  const EmailIcon = () => (size === 'xs' || size === 's') ? null : <img src={emailIcon} alt="emailField" />
  const PasswordIcon = () => (size === 'xs' || size === 's') ? null : <img src={passwordIcon} alt="passField" />
  const VectorMedsi = () => <img src={vectorMedsi} className={vectorMedsiPic} alt="vectorMedsi" />
  const LoginFooter = () => {
    return (
      <>
        <Box className={loginFooter}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            display="flex"
          >
            <Grid item xs={4}>
              <p className={urbanistSemiBoldCenter}>CENTRO DE AYUDA</p>
            </Grid>
            <Grid item xs={4}>
              <p className={urbanistSemiBoldCenter}>TÉRMINOS Y CONDICIONES</p>
            </Grid>
            <Grid item xs={4}>
              <p className={urbanistSemiBoldCenter}>AVISO DE PRIVACIDAD</p>
            </Grid>
          </Grid>
        </Box>
        <p className={urbanistRegularFooter}>©medsi 2022 Todos los derechos reservados.</p>
      </>
    )
  }

  const LoginSnackBar = () => {
    return (
      <CenteredContent>
        <Snackbar
          open={openSnackbarError}
          autoHideDuration={6000}
          onClose={handleCloseSnackbarError}
          message="Lo sentimos, no encontramos tú numero de teléfono en nuestro servicio"
          vertical="center"
          horizontal="center"
        />
      </CenteredContent>
    )
  }

  const ContinueButton = () => {
    return (
      <Button
        variant="contained"
        disabled={disabled}
        onClick={fetchUserInformation}
        className={loginButtonContinue}
        sx={{
          marginTop: '1rem',
          borderRadius: '40px'
        }}
      >
        Continuar
      </Button>
    )
  }

  const LoginLoadingButton = () => {
    return (
      <LoadingButton
        loading
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="outlined"
        className={loginButtonLoading}
        sx={{
          marginTop: '1rem',
          borderRadius: '40px'
        }}
      >
        Enviando
      </LoadingButton>
    )
  }

  const LoginValidate = () => {
    return (
      <Button
        variant="contained"
        onClick={validateOTPCode}
        disabled={expired || !otpCode}
        className={loginButtonValidate}
        sx={{
          marginTop: '1rem',
          borderRadius: '40px'
        }}
      >
        Validar Código
      </Button>
    )
  }

  const LoginContinue = () => {
    return (
      <div>
        {
          isLoading
            ? <LoginLoadingButton />
            : <ContinueButton />
        }
      </div>
    )
  }

  return (
    <Box className={loginContainer}>
      <Box className={loginBox}>
        <LoginLogo />
        <LoginTitle />
        <LoginFormTitle />
        <Box className={loginFormBox}>
          <EmailIcon />
          <TextField
            id="otp-field"
            variant="outlined"
            className={emailInputForm}
            value={phoneNumber}
            onChange={(e) => handlePhoneNumberChange(e.target.value)}
            InputProps={{ className: emailInputFormProps, maxLength: 10, }}
            placeholder="Ingresa tu numero celular"
          />
        </Box>

        {isWaitingOTP && (
          <Box className={loginFormBoxCountDown}>
            <Box className={loginFormBox}>
              <PasswordIcon />
              <TextField
                id="otp-field"
                variant="outlined"
                className={emailInputForm}
                value={otpCode}
                onChange={(e) => handleChangeOTPCode(e.target.value)}
                InputProps={{ className: emailInputFormProps }}
                placeholder="Ingresa el código"
              />
            </Box>
            <CountDown
              resendOTP={generateOTPCodeProcess}
              setExpired={setExpired}
            />
          </Box>
        )}

        {
          isWaitingOTP
            ? <LoginValidate />
            : <LoginContinue />
        }

      </Box>
      <VectorMedsi />
      <LoginFooter />
      <LoginSnackBar />
    </Box>
  );
};

export default LoginPage;
