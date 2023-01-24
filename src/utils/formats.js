const MONTHS = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

export const formatCurrency = (amount) => {
  const options = { style: 'currency', currency: 'USD' };
  const numberFormat = new Intl.NumberFormat('en-US', options);
  return numberFormat.format(amount);
}

export const formatDate = (date) => {
  if (date === undefined || date === 0) return;
  const [YY, MM, DD] = date.split("-");
  return DD + "/" + MONTHS[parseInt(MM) - 1] + "/" + YY;
}

export const formatDateString = (date) => {
  let DATE = "";
  DATE = date.toLocaleDateString('SV');
  const [YY, MM, DD] = DATE.split('/');
  return MM + '/' + DD + '/' + YY;
}