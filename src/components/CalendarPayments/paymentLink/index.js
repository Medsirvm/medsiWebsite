import React from "react";
import PaymentLinkIcon from "../../../assets/icons/paymentLink.svg";
import { MAIN_COLORS } from "../../../constants/colorConstants";
import { formatNumber } from "../../../utils/formatFieldsUtils";

import ui from '../index.module.css';

const PaymentLink = ({
  date,
  amount,
  loan,
  type = null,
  index
}) => {

  const backgroundColorType = () => {
    if (type === 'pagado') return "rgba(10, 204, 151, 0.5)";
    if (type === 'pendiente') return "#C4C4C4";
    if (type === 'retrazado') return "rgba(204, 33, 10, 0.5)";
  }

  const textColorType = () => {
    if (type === 'pagado') return "#000000";//MAIN_COLORS.BLACK_MEDIUM;
    if (type === 'pendiente') return "#000000";//MAIN_COLORS.BLACK_MEDIUM;
    if (type === 'retrazado') return "#000000";//MAIN_COLORS.BLACK_MEDIUM;
    return "#000000";//MAIN_COLORS.BLACK_MEDIUM;
  }

  const {
    paymentLink,
    paymentIcon,
    paymentDate,
    paymentLoan,
    paymentParraf,
    paymentAmount,
    firstPayment
  } = ui;

  const PaymentLoan = () => {

    return loan ? (
      <div className={paymentLoan}>
        <p className={paymentParraf} style={{ color: textColorType(), whiteSpace: 'nowrap'}} >
          {`$ ${formatNumber(loan)}`}
        </p>
      </div>
    ) :
      <div className={paymentLoan}> </div>
  }

  return (
    <div className={`${paymentLink} ${index === 0 ? firstPayment : null}`}
      style={{
        background: loan === undefined ? backgroundColorType() : MAIN_COLORS.BLUE_CONTRAST,
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)"
      }}
    >
      <div className={paymentIcon}>
        <img src={PaymentLinkIcon} alt="paymentLinkicn" />
      </div>
      <div className={paymentDate}>
        <p className={paymentParraf} style={{ color: textColorType(), }} >
          {date}
        </p>
      </div>
      <div className={paymentAmount}>
        <p className={paymentParraf} style={{ color: textColorType(), whiteSpace: "nowrap"}} >
          {`$ ${formatNumber(amount)}`}
        </p>
      </div>
      <PaymentLoan />
    </div>
  );
};

export default PaymentLink;
