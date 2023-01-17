import { formatCurrency } from "../../utils/formats";
import ui from './index.module.css';
import { generateTransaction } from '../../utils/generateTransaction';

export default function MexPago({
  name = {},
  amount,
  email,
  phone
}) {
  const { maternal_name, last_name, first_name } = name;
  const testingArticulos = {
    articulos: [
      { descripcion: "Pago", monto: "1" }
    ]
  };
  // const userData = `{ "nombre": "${first_name}", "apPaterno": "${last_name}", "apMaterno": "${maternal_name}", "correo": "${email.replace('+101', '')}", "celular": "${phone.replace('+52', '')}" }`;
  const userData = {
    nombre: "Hector Manuel",
    apPaterno: "Rios",
    apMaterno: "Vazquez",
    correo: "hrios.isc@gmail.com",
    celular: "6631032623"
  };
  const transaction = generateTransaction([last_name, maternal_name, first_name]);

  return (
    <section className={ui.paymentSectionView}>
      <div className={ui.mxPayBoxData} >
        <div>
          <p>Ya casi, valida tus datos para terminar tu compra.</p>
          <p><strong>¡Paga utilizando MexPago!</strong></p>
          <p>Monto a pagar: <strong style={{ fontSize: "20px" }}>{formatCurrency(amount)}</strong></p>
        </div>
        <form action="https://dev.mexpago.com/app/pagoOnline" method="POST" >
          <input type="hidden" name="monto" value={1} />
          <input type="hidden" name="noTransaccion" value={transaction} />
          <input type="hidden" name="llave" value={process.env.REACT_APP_MEXPAGO_API_KEY + '='} />
          <input type="hidden" name="fecha" value={new Date().toLocaleString('sv')} />
          <input type="hidden" name="articulos" value={JSON.stringify(testingArticulos)} />
          <input type="hidden" name="precargaDatos" value={JSON.stringify(userData)} />
          <input type="hidden" name="enviarCorreo" value="false" />
          <input type="hidden" name="infoComercio" value="false" />
          <input type="hidden" name="lenguaje" value="es" />
          <br />
          <button type="submit" className={ui.submitPayment} >
            Proceder con el pago
            {/* <img src="https://www.mexpago.com/img/btn-mexpago.png" alt="mex_pago" /> */}
          </button>
        </form>
      </div>

      <div style={{ marginLeft: 'auto' }}>
        <img src="https://dev.mexpago.com/img/mexpago-154x32-1.png" alt="mex_pago" />
      </div>
    </section>
  )
}