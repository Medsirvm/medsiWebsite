import { formatCurrency } from "../../utils/formats";
import ui from './index.module.css';
// import { generateTransaction } from '../../utils/generateTransaction';

export default function MexPago({
  name = {},
  amount,
  email,
  phone,
  noTransaction
}) {
  const { maternal_name, last_name, first_name } = name;
  const articulos = { articulos: [{ descripcion: "Pago", monto: amount }] };
  const userData = {
    nombre: first_name,
    apPaterno: last_name,
    apMaterno: maternal_name,
    correo: email,
    celular: phone.replace('+52', '')
  }

  return (
    <section className={ui.paymentSectionView}>
      <div className={ui.mxPayBoxData} >
        <div>
          <p>Ya casi, valida tus datos para terminar tu compra.</p>
          <p><strong>¡Paga utilizando MexPago!</strong></p>
          <p>Monto a pagar: <strong style={{ fontSize: "20px" }}>{formatCurrency(amount)}</strong></p>
        </div>
        <form action="https://dev.mexpago.com/app/pagoOnline" method="POST" >
          <input type="hidden" name="monto" value={amount} />
          <input type="hidden" name="noTransaccion" value={"M1674170994613VFR"} />
          <input type="hidden" name="llave" value={process.env.REACT_APP_MEXPAGO_API_KEY + '='} />
          <input type="hidden" name="fecha" value={new Date().toLocaleString('sv')} />
          <input type="hidden" name="articulos" value={JSON.stringify(articulos)} />
          <input type="hidden" name="precargaDatos" value={JSON.stringify(userData)} />
          <input type="hidden" name="enviarCorreo" value="false" />
          <input type="hidden" name="infoComercio" value="false" />
          <input type="hidden" name="lenguaje" value="es" />
          <br />
          <button type="submit" className={ui.submitPayment} >
            Proceder con el pago
          </button>
        </form>
      </div>

      <div style={{ marginLeft: 'auto' }}>
        <img src="https://dev.mexpago.com/img/mexpago-154x32-1.png" alt="mex_pago" />
      </div>
    </section>
  )
}