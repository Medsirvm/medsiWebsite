import {
  Box,
  Button,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CenteredContent from "../../components/CenteredContent";
import { LoginPageStyles } from "./LoginPage.styles";
import logoIsotipo from "../../assets/images/medsiIsotipoLogo.png";
import emailIcon from "../../assets/images/Mail.png";
import vectorMedsi from "../../assets/images/backgroundVector.png";
import { FONTS } from "../../constants/fontsConstants";
import { MAIN_COLORS } from "../../constants/colorConstants";
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

const LoginPage = () => {
  const dispatch = useDispatch();
  // const isWaitingOTP = true
  const isWaitingOTP = useSelector(selectIsWaitingForOTPCode);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const classes = LoginPageStyles();
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

  return (
    <Box className={classes.bannerImageContainer}>
      <CenteredContent direction="column">
        <img src={logoIsotipo} alt="logoIsotipo" style={{ marginTop: 70 }} />
        <Typography
          sx={{
            fontFamily: FONTS.URBANISMEDIUM,
            fontSize: 40,
            color: MAIN_COLORS.WHITE_COLOR,
            marginTop: 2,
          }}
        >
          Iniciar Sesion
        </Typography>
        <Typography
          sx={{
            fontFamily: FONTS.URBANISTREGULAR,
            fontSize: 22,
            color: MAIN_COLORS.WHITE_COLOR,
          }}
        >
          Escribe tu número de celular
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ marginTop: 2 }}
        >
          <img src={emailIcon} alt="emailField" style={{ marginRight: 15 }} />
          <TextField
            id="otp-field"
            variant="outlined"
            sx={{
              input: {
                color: MAIN_COLORS.WHITE_COLOR,
                "&::placeholder": {
                  color: MAIN_COLORS.WHITE_COLOR,
                },
                "&:focus": {
                  border: "none",
                },
              },
            }}
            value={phoneNumber}
            onChange={(e) => handlePhoneNumberChange(e.target.value)}
            InputProps={{
              className: classes.input,
              maxLength: 10,
            }}
            placeholder="Ingresa tu numero celular"
          />
        </Box>

        {isWaitingOTP && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ marginTop: 2 }}
            flexDirection="column"
          >
            <TextField
              id="otp-field"
              variant="outlined"
              sx={{
                marginLeft: 7,
                input: {
                  color: MAIN_COLORS.WHITE_COLOR,
                  "&::placeholder": {
                    color: MAIN_COLORS.WHITE_COLOR,
                  },
                  "&:focus": {
                    border: "none",
                  },
                },
              }}
              value={otpCode}
              onChange={(e) => handleChangeOTPCode(e.target.value)}
              InputProps={{
                className: classes.input,
              }}
              placeholder="Ingresa el código"
            />
            <CountDown
              resendOTP={generateOTPCodeProcess}
              setExpired={setExpired}
            />
          </Box>
        )}
        {isWaitingOTP ? (
          <Button
            variant="contained"
            onClick={validateOTPCode}
            disabled={expired || !otpCode}
            sx={{
              background: `linear-gradient(270deg, #1B63DB 1.32%, #0ACC97 99.08%)`,
              borderRadius: 10,
              height: 58,
              width: 200,
              marginTop: 5,
              textTransform: "none",
              fontFamily: FONTS.URBANISTBOLD,
              fontSize: 18,
            }}
          >
            Validar Código
          </Button>
        ) : (
          <div>
            {isLoading ? (
              <LoadingButton
                loading
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="outlined"
                sx={{
                  background: `linear-gradient(270deg, #1B63DB 1.32%, #0ACC97 99.08%)`,
                  borderRadius: 10,
                  height: 58,
                  width: 180,
                  marginTop: 5,
                  textTransform: "none",
                  fontFamily: FONTS.URBANISTBOLD,
                  fontSize: 18,
                }}
              >
                Enviando
              </LoadingButton>
            ) : (
              <Button
                variant="contained"
                disabled={disabled}
                onClick={fetchUserInformation}
                sx={{
                  background: `linear-gradient(270deg, #1B63DB 1.32%, #0ACC97 99.08%)`,
                  borderRadius: 10,
                  height: 58,
                  width: 180,
                  marginTop: 5,
                  textTransform: "none",
                  fontFamily: FONTS.URBANISTBOLD,
                  fontSize: 18,
                  "&.Mui-disabled": {
                    pointerEvents: "unset", // allow :hover styles to be triggered
                    cursor: "not-allowed", // and custom cursor can be defined without :hover state
                    color: "rgba(255, 255, 255, 0.5)",
                    background: "rgba(255, 255, 255, 0.5)",
                  },
                }}
              >
                Continuar
              </Button>
            )}
          </div>
        )}

        <img src={vectorMedsi} alt="vectorMedsi" style={{ marginTop: 100 }} />

        <CenteredContent style={{ minWidth: "80%", marginTop: 120 }}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            display="flex"
          >
            <Grid item xs={4}>
              <Typography
                sx={{
                  fontFamily: FONTS.URBANISTSEMIBOLD,
                  fontSize: 18,
                  color: MAIN_COLORS.WHITE_COLOR,
                }}
                align="center"
              >
                CENTRO DE AYUDA
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                sx={{
                  fontFamily: FONTS.URBANISTSEMIBOLD,
                  fontSize: 18,
                  color: MAIN_COLORS.WHITE_COLOR,
                }}
                align="center"
              >
                {" "}
                TÉRMINOS Y CONDICIONES
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                sx={{
                  fontFamily: FONTS.URBANISTSEMIBOLD,
                  fontSize: 18,
                  color: MAIN_COLORS.WHITE_COLOR,
                }}
                align="center"
              >
                {" "}
                AVISO DE PRIVACIDAD
              </Typography>
            </Grid>
          </Grid>
        </CenteredContent>

        <Typography
          sx={{
            fontFamily: FONTS.URBANISTREGULAR,
            fontSize: 18,
            color: MAIN_COLORS.WHITE_COLOR,
            marginTop: 5,
          }}
        >
          ©medsi 2022 Todos los derechos reservados.
        </Typography>
      </CenteredContent>
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
    </Box>
  );
};

export default LoginPage;
