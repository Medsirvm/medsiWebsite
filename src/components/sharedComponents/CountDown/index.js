import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MAIN_COLORS } from "../../../constants/colorConstants";
import { FONTS } from "../../../constants/fontsConstants";
import { selectOTPInformation } from "../../../store/reducers/user/UserAccountSlice";

const CountDown = (props) => {
  const { setExpired, resendOTP } = props;
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(59);
  const otpInformation = useSelector(selectOTPInformation);

  const handleResendOtp = () => {
    const { correo, numero } = otpInformation;
    resendOTP(correo, numero);
    setMinutes(1);
    setSeconds(59);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
          setExpired(true);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [minutes, seconds, setExpired]);
  return (
    <Box className="countdown-text">
      {seconds > 0 || minutes > 0 ? (
        <Typography
          variant="subtitle2"
          sx={{
            fontFamily: FONTS.URBANISTSEMIBOLD,
            color: MAIN_COLORS.WHITE_COLOR,
            fontSize: 16,
            marginTop: 2,
            cursor: "pointer",
          }}
        >
          Tiempo Restante: {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </Typography>
      ) : (
        <Typography
          sx={{
            fontFamily: FONTS.URBANISTSEMIBOLD,
            color: MAIN_COLORS.WHITE_COLOR,
            fontSize: 16,
            marginTop: 2,
            cursor: "pointer",
          }}
          variant="subtitle2"
          onClick={handleResendOtp}
        >
          Reenviar Código
        </Typography>
      )}


    </Box>
  );
};

export default CountDown;
