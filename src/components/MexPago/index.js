import { formatCurrency } from "../../utils/formats";
import ui from './index.module.css';
// import { generateTransaction } from '../../utils/generateTransaction'; 
import Parraf from '../../components/Parraf';
import useWindowSize from "../../hooks/useWindowSize";

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

  const {
    paymentContainer,
    containerBox,
    boxContent,
    mexPagoContainer
  } = ui;

  const { size } = useWindowSize();

  const isTabletOrDesktop = (size !== 'xs' || size !== 's');

  const parrafSize = () => isTabletOrDesktop ? 18 : 16;

  return (
    <section className={paymentContainer}>
      <div className={mexPagoContainer}>
        <img src="https://dev.mexpago.com/img/mexpago-154x32-1.png" alt="mex_pago" />
      </div>
      <div className={containerBox} >
        <div className={boxContent}>
          <Parraf type="Medium" size={parrafSize()} color="#00000080">Ya casi, valida tus datos para terminar tu compra.</Parraf>
          <Parraf type="Medium" size={parrafSize()} color="#000"><strong>¡Paga utilizando MexPago!</strong></Parraf>
          <Parraf type="Medium" size={parrafSize()} color="#00000080">Monto a pagar: <strong style={{ color: "#000", fontSize: "20px" }}>{formatCurrency(amount)}</strong></Parraf>
        </div>
        <form action="https://dev.mexpago.com/app/pagoOnline" method="POST" >
          <input type="hidden" name="monto" value={amount} />
          <input type="hidden" name="noTransaccion" value={noTransaction} />
          <input type="hidden" name="llave" value={process.env.REACT_APP_MEXPAGO_API_KEY + '='} />
          <input type="hidden" name="fecha" value={new Date().toLocaleString('sv')} />
          <input type="hidden" name="articulos" value={JSON.stringify(articulos)} />
          <input type="hidden" name="precargaDatos" value={JSON.stringify(userData)} />
          <input type="hidden" name="enviarCorreo" value="false" />
          <input type="hidden" name="infoComercio" value="false" />
          <input type="hidden" name="lenguaje" value="es" />
          <br />
          <button type="submit" className="gradientButton">
            <span>Proceder con el pago</span>
          </button>
        </form>
      </div>
    </section>
  )
}