import axios from "axios";
const { REACT_APP_TANDAS_HOST_URL, REACT_APP_TANDAS_BASE_URL } = process.env;

export const getUserInformationByPhoneNumber = (phoneNumber) => {
  const payload = {
    phoneNumber: phoneNumber,
  };
  const request = {
    host: `${REACT_APP_TANDAS_HOST_URL}`,
    method: "POST",
    url: `${REACT_APP_TANDAS_BASE_URL}user-info/wait-list`,
    data: payload,
    body: JSON.stringify(payload),
    headers: {
      "content-type": "application/json",
    },
  };

  return axios(request);
};
