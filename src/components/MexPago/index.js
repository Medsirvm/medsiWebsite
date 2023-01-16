import { formatCurrency } from "../../utils/formatCurrency";
import ui from './index.module.css';

export default function MexPago({
  name = {},
  amount,
  email,
  phone
}) {
  const { maternal_name, last_name, first_name } = name;
  const testingArticulos = `{ "articulos": [{ "descripcion": "Pago", "monto": "1" }] }`;
  // const userData = `{ "nombre": "${first_name}", "apPaterno": "${last_name}", "apMaterno": "${maternal_name}", "correo": "${email.replace('+101', '')}", "celular": "${phone.replace('+52', '')}" }`;
  const userData = `{ "nombre": "Hector Manuel", "apPaterno": "Rios", "apMaterno": "Vazquez", "correo": "hrios.isc@gmail.com", "celular": "6631032623", "calle":"#8", "numero":"9670", "codigoPostal": "22237"}`;

  return (
    <section className={ui.paymentSectionView}>
      <div className={ui.mxPayBoxData}>
        <span className={ui.titleBox}>Validar datos</span>
        <div className={ui.inputBox}>
          <span>Monto a pagar:</span>
          <input type="text" disabled value={formatCurrency(amount)} />
        </div>
        <div className={ui.inputBox}>
          <span>Nombre completo:</span>
          <input type="text" disabled={true} value={[first_name, last_name, maternal_name].join(" ")} />
        </div>
        <div className={ui.inputBox}>
          <span>Fecha:</span>
          <input type="text" disabled value={new Date().toLocaleString('sv').split(" ")[0]} />
        </div>
        <div className={ui.inputBox}>
          <span>Correo:</span>
          <input type="text" disabled value={email} />
        </div>
        <div className={ui.inputBox}>
          <span>Teléfono:</span>
          <input type="text" disabled value={phone} />
        </div>
        <div className={ui.checkBox}>
          <input type="checkbox" id='checkbox-email' />
          <label htmlFor="checkbox-email">¿Enviar comprobante a correo?</label>
        </div>
        <div className={ui.checkBox}>
          <input type="checkbox" id='checkbox-market' />
          <label htmlFor="checkbox-market">¿Mostrar datos de comercio?</label>
        </div>
        <form target="_blank" action="https://dev.mexpago.com/app/pagoOnline" method="POST" >
          <input type="hidden" name="monto" value={1} />
          <input type="hidden" name="noTransaccion" value="T5654121654" />
          <input type="hidden" name="llave" value={process.env.REACT_APP_MEXPAGO_API_KEY + '='} />
          <input type="hidden" name="fecha" value={new Date().toLocaleString('sv')} />
          <input type="hidden" name="articulos" value={testingArticulos} />
          <input type="hidden" name="precargaDatos" value={userData} />
          <input type="hidden" name="enviarCorreo" value="false" />
          <input type="hidden" name="infoComercio" value="true" />
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