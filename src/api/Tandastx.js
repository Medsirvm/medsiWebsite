import axios from "axios";

const { REACT_APP_API_HOST_URL, REACT_APP_API_BASE_URL } = process.env;


/**
 *     correo = event['correo']
    fecha_pago = event['fecha_pago']
    estado = event['estado']
    tipo_tx = event['tipo_tx']
    monto = event['monto']
    id_pago = event['id_pago']
    id_orden_pago = event['id_orden_pago']
 */
export const insertUserPaymentInformation = (payload) => {
  const request = {
    host: `${REACT_APP_API_HOST_URL}`,
    method: "POST",
    url: `${REACT_APP_API_BASE_URL}otp/verificar-otp`,
    data: payload,
    body: JSON.stringify(payload),
    headers: {
      "content-type": "application/json",
    },
  };

  return axios(request);
};
