import moment from "moment";

export const nextCredit = () => {
  const STRING_MONTHS = [
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
    "Diciembre",
  ];
  const shortDate = moment();
  const todayDate = shortDate.date();
  const MM = shortDate.month();
  const YY = shortDate.year();
  let nextCredit = "";
  if (todayDate === 1) {
    nextCredit = moment(`${YY}-${MM + 1}-02`);
  }
  else if (todayDate >= 2 && todayDate < 17) {
    nextCredit = moment(`${YY}-${MM + 1}-17`);
  } else {
    nextCredit = moment(`${YY}-${MM + 1}-02`).add(2, 'month');
    nextCredit = nextCredit.add(15, 'd');
  }
  nextCredit = nextCredit.format('YYYY-MM-DD');

  const [nYear, nMonth, nDay] = nextCredit.split('-');
  
  return `${parseInt(nDay)} de ${STRING_MONTHS[parseInt(nMonth) - 1]}`
}