import React from "react";
import { formatDate } from "../../utils/formats";
import ContainerTitle from "../ContainerTitle";
import PaymentLink from "./paymentLink";
import ui from './index.module.css';

const CalendarPayments = ({
  paymentLinks,
  isSimulator 
}) => {

  const {
    paymentsCalendar
  } = ui;
  
  return ((paymentLinks.length > 0 && isSimulator)) ? (
    <>
      <ContainerTitle>
        Calendario de Próximos Pagos
      </ContainerTitle>
      <div className={paymentsCalendar}>
        {
          paymentLinks.map((payment, index) => {
            if (index > 3) return null;

            if (index === 3) {
              return (
                <PaymentLink
                  key={payment.id}
                  id={payment.id}
                  date={formatDate(payment.fecha_pago)}
                  amount={payment.monto}
                  loan={payment.monto * 10}
                />
              );
            } else {
              return (
                <PaymentLink
                  key={payment.id}
                  id={payment.id}
                  date={formatDate(payment.fecha_pago)}
                  amount={payment.monto}
                  type={payment.estado}
                  index={index}
                />
              );
            }
          })
        }
      </div>
      {/* {
        paymentLinks.length > 0 &&
        paymentLinks.map((payment, index, array) => {
          const length = array.length;
          return index < (length - 1)
            ? <PaymentLink key={payment.id} id={payment.id} date={payment.date} amount={payment.amount} />
            : <PaymentLink key={payment.id} id={payment.id} date={payment.date} amount={payment.amount} loan={creditLineAmount} />
        })
      } */}
    </>
  ) : null
};

export default CalendarPayments;
