import React from "react";
import ContainerTitle from "../ContainerTitle";
import PaymentLink from "./paymentLink";
import ui from "./index.module.css";
import { useSelector } from "react-redux";
import { selectSimulationPaymentsInformation } from "../../store/reducers/user/UserAccountSlice";

const CalendarPayments = ({ paymentLinks, isSimulator }) => {
  const { paymentsCalendar } = ui;
  const reduxSimulationPayments = useSelector(
    selectSimulationPaymentsInformation
  );
  return reduxSimulationPayments.length > 0  ? (
    <>
      <ContainerTitle>Calendario de Próximos Pagos</ContainerTitle>
      <div className={paymentsCalendar}>
        {reduxSimulationPayments.map((payment, index) => {
          if (index === 3) {
            return (
              <PaymentLink
                key={payment.id}
                id={payment.id}
                date={payment.fecha_pago}
                amount={payment.monto}
                loan={payment.monto * 10}
              />
            );
          } else {
            return (
              <PaymentLink
                key={payment.id}
                id={payment.id}
                date={payment.fecha_pago}
                amount={payment.monto}
                type={payment.estado}
                index={index}
              />
            );
          }
        })}
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
  ) : null;
};

export default CalendarPayments;
