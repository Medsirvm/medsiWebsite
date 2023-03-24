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
  "Diciembre",
];

export const formatCurrency = (amount) => {
  const options = { style: "currency", currency: "USD" };
  const numberFormat = new Intl.NumberFormat("en-US", options);
  return numberFormat.format(amount);
};

export const formatDate = (date) => {
  if (date === undefined || date === 0) return;
  const [YY, MM, DD] = date.split("-");
  return DD + "/" + MONTHS[parseInt(MM) - 1] + "/" + YY;
};

export const formatDateString = (date) => {
  let DATE = "";
  DATE = date.toLocaleDateString("SV");
  const [YY, MM, DD] = DATE.split("/");
  return MM + "/" + DD + "/" + YY;
};

export function formatNumberToText(numero) {
  const unidades = [
    "",
    "uno",
    "dos",
    "tres",
    "cuatro",
    "cinco",
    "seis",
    "siete",
    "ocho",
    "nueve",
  ];
  const especiales = [
    "",
    "once",
    "doce",
    "trece",
    "catorce",
    "quince",
    "dieciséis",
    "diecisiete",
    "dieciocho",
    "diecinueve",
  ];
  const decenas = [
    "",
    "diez",
    "veinte",
    "treinta",
    "cuarenta",
    "cincuenta",
    "sesenta",
    "setenta",
    "ochenta",
    "noventa",
  ];
  const centenas = [
    "",
    "ciento",
    "doscientos",
    "trescientos",
    "cuatrocientos",
    "quinientos",
    "seiscientos",
    "setecientos",
    "ochocientos",
    "novecientos",
  ];

  if (numero === 0) {
    return "cero";
  }

  if (numero < 0) {
    return "menos " + formatNumberToText(-numero);
  }

  if (numero < 10) {
    return unidades[numero];
  }

  if (numero < 20) {
    return especiales[numero - 10];
  }

  if (numero < 100) {
    const decena = Math.floor(numero / 10);
    const unidad = numero % 10;
    let resultado = decenas[decena];
    if (unidad > 0) {
      resultado += " y " + unidades[unidad];
    }
    return resultado;
  }

  if (numero < 1000) {
    const centena = Math.floor(numero / 100);
    const resto = numero % 100;
    let resultado = centenas[centena];
    if (resto > 0) {
      resultado += " " + formatNumberToText(resto);
    }
    return resultado;
  }

  if (numero < 1000000) {
    const millar = Math.floor(numero / 1000);
    const resto = numero % 1000;
    let resultado = formatNumberToText(millar) + " mil";
    if (resto > 0) {
      if (resto < 100) {
        resultado += " ";
      } else {
        resultado += " y ";
      }
      resultado += formatNumberToText(resto);
    }
    return resultado;
  }

  if (numero < 1000000000) {
    const millon = Math.floor(numero / 1000000);
    const resto = numero % 1000000;
    let resultado = formatNumberToText(millon) + " millones";
    if (resto > 0) {
      if (resto < 1000) {
        resultado += " ";
      } else {
        resultado += " y ";
      }
      resultado += formatNumberToText(resto);
    }
    return resultado;
  }

  return "Número demasiado grande";
}

export const getDayMonthAndAnio = () => {
  const nombresMeses = [
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
  // Obtener la fecha actual
  const fechaActual = new Date();
  // Extraer el día
  const dia = fechaActual.getDate();
  const mes = nombresMeses[fechaActual.getMonth()];
  // Extraer los últimos 2 dígitos del año
  const anio = fechaActual.getFullYear().toString().substr(-2);
  return { dia, mes, anio };
};
