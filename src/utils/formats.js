
export const formatCurrency = (amount) => {
  const options = { style: 'currency', currency: 'USD' };
  const numberFormat = new Intl.NumberFormat('en-US', options);
  return numberFormat.format(amount);
}

export const formatDate = (date) => {
  const [MM, DD, YY] = date.split("/");
  const MONTHS = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];

  return DD + "/" + MONTHS[parseInt(MM) - 1] + "/" + YY;
}