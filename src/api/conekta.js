import axios from "axios";
const { REACT_APP_API_HOST_URL, REACT_APP_API_BASE_URL } = process.env;

export const createClientConekta = (name, email, phone) => {
  const payload = {
    name: name,
    email: email,
    phone: phone,
  };

  const request = {
    host: `${REACT_APP_API_HOST_URL}`,
    method: "POST",
    url: `${REACT_APP_API_BASE_URL}conekta/crear-cliente`,
    data: payload,
    body: JSON.stringify(payload),
    headers: {
      "content-type": "application/json",
    },
  };

  return axios(request);
};

export const createOrderConekta = (custId, amount, phone, client, email) => {
  const payload = {
    customer_id: custId,
    producto: "Pago de tx 1/12",
    costo: amount * 100,
    telefono: phone,
    cliente: client,
    correo: email,
  };

  console.log(payload);

  const request = {
    host: `${REACT_APP_API_HOST_URL}`,
    method: "POST",
    url: `${REACT_APP_API_BASE_URL}conekta/crear-orden`,
    data: payload,
    body: JSON.stringify(payload),
    headers: {
      "content-type": "application/json",
    },
  };

  return axios(request);
};
