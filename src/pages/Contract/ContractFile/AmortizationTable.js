import React from "react";
import "./AmortizationTable.css";

const AmortizationTable = ({ totalAmount, biWeeklyPayment, payedAmount }) => {
  const tableRows = [];

  let paymentNumber = 1;
  let balance = totalAmount - payedAmount;
  let payment = biWeeklyPayment;
  let interest;
  let capital;
  let iva;
  let cat = 3.95;

  for (let index = 0; index < 8; index++) {
    interest = totalAmount * 0.0215518;
    iva = interest * 0.16;
    capital = payment - interest - iva;
    balance -= capital;

    tableRows.push(
      <tr key={paymentNumber}>
        <td>{paymentNumber}</td>
        <td>${payment.toFixed(2)}</td>
        <td>${interest.toFixed(2)}</td>
        <td>${capital.toFixed(2)}</td>
        <td>${iva.toFixed(2)}</td>
        <td>{cat}%</td>
        <td>${balance.toFixed(0)}</td>
      </tr>
    );

    paymentNumber++;
  }

  return (
    <table className="amortization-table">
      <thead>
        <tr>
          <th>Pago</th>
          <th>Monto Abonado</th>
          <th>Interes</th>
          <th>Capital</th>
          <th>IVA</th>
          <th>CAT</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
};

export default AmortizationTable;
