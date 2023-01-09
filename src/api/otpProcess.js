import axios from "axios";

const { REACT_APP_OTP_HOST_URL, REACT_APP_OTP_BASE_URL } = process.env;

export const generateOTPCode = (phoneNumber, email) => {
  const payload = {
    numero: phoneNumber,
    correo: email,
  };

  const request = {
    host: `${REACT_APP_OTP_HOST_URL}`,
    method: "POST",
    url: `${REACT_APP_OTP_BASE_URL}otp/generar-otp`,
    data: payload,
    body: JSON.stringify(payload),
    headers: {
      "content-type": "application/json",
    },
  };

  return axios(request);
};


export const verifyOTPCode = (email, phoneNumber, code, semilla) => {
  const payload = {
    correo: email,
    numero: phoneNumber,
    code: code,
    semilla: semilla,
  };

  const request = {
    host: `${REACT_APP_OTP_HOST_URL}`,
    method: "POST",
    url: `${REACT_APP_OTP_BASE_URL}otp/verificar-otp`,
    data: payload,
    body: JSON.stringify(payload),
    headers: {
      "content-type": "application/json",
    },
  };

  return axios(request);
};
