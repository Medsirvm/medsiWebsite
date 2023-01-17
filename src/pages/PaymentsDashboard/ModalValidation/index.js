import ui from './index.module.css';
import validIcon from '../../../assets/icons/valid.svg';
import noValidIcon from '../../../assets/icons/noValid.svg';
import { formatCurrency } from '../../../utils/formats.js';

export default function ModalValidation({
  open,
  fecha,
  noTransaccion,
  paymentAmount,
  folioPago,
  authorized,
  closeModal = () => { }
}) {


  return !open ? null : (
    <div className={ui.modalValidation}>
      <span className={ui.modalBackground}></span>
      <div className={ui.modalContainer}>
        <ContainerHead authorized={authorized} />
        <div className={ui.containerBody}>
          <h1 className={ui.urbanistH1}>{formatCurrency(paymentAmount)}</h1>
          <p className={ui.urbanistH3}>Pago de Tanda Ahorro</p>
          <div style={{ marginTop: '29px', textAlign: 'center' }}>
            <p className={ui.urbanistH2}>Folio de pago</p>
            <p className={ui.urbanistBlack}>{folioPago}</p>
          </div>
          <div style={{ marginRight: 'auto', marginTop: '29px' }}>
            <p className={ui.urbanistH2}>Numero de contrato</p>
            <p className={ui.urbanistBlack}>{noTransaccion}</p>
          </div>
          <div style={{ marginRight: 'auto', marginTop: '29px' }}>
            <p className={ui.urbanistH2}>Fecha de pago</p>
            <p className={ui.urbanistBlack}>{fecha}</p>
          </div>
          <div style={{ marginRight: 'auto', marginTop: '29px' }}>
            <p className={ui.urbanistH2}>Tipo de pago</p>
            <p className={ui.urbanistBlack}>Pago parcial quincenal</p>
          </div>
        </div>
        <button
          className={ui.modalBodyButton}
          type='button'
          onClick={() => closeModal()}
        >
          <span>{authorized ? "Salir" : "Intentar de nuevo"}</span>
        </button>
      </div>
    </div>
  )
}

const ContainerHead = ({ authorized }) => {

  const HeadValidPayment = () => {
    return (
      <div className={ui.containerHead}>
        <img style={{ marginBottom: '1rem' }} src={validIcon} alt="icon" />
        <h1 className={ui.urbanistWhiteXL}>Pago completado</h1>
        <h2 style={{ marginBottom: '1rem' }} className={ui.urbanistWhiteL}>Gracias por tu pago</h2>
      </div>
    )
  }

  const HeadInvalidPayment = () => {
    return (
      <div className={ui.containerHead}>
        <img style={{ marginBottom: '1rem' }} src={noValidIcon} alt="icon" />
        <h1 className={ui.urbanistWhiteXL}>Pago fallido</h1>
        <h2 style={{ marginBottom: '1rem' }} className={ui.urbanistWhiteL}>Intente después de un tiempo</h2>
      </div>)
  }

  return authorized
    ? <HeadValidPayment />
    : <HeadInvalidPayment />
}
