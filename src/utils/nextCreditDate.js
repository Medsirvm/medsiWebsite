function obtenerFechaPagoInicial() {
  const hoy = new Date();
  const diaActual = hoy.getDate();

  let fechaPagoInicial;

  if (diaActual >= 1 && diaActual <= 2) {
    fechaPagoInicial = new Date(hoy.getFullYear(), hoy.getMonth(), 2);
  } else {
    fechaPagoInicial = new Date(hoy.getFullYear(), hoy.getMonth(), 17);
  }

  return fechaPagoInicial;
}

export function calcularProximosPagos(monto) {
  const pagos = [];
  let pagosList = []
  let fechaPagoInicial = obtenerFechaPagoInicial()
  let fechaPago = new Date(fechaPagoInicial);
  
  for (let i = 0; i <= 12; i++) {
    if (i === 0) {
      // El primer pago es la fecha de pago inicial
      pagos.push(new Date(fechaPago));
    } else {
      // Para los siguientes pagos, se usa la regla correspondiente según el día del mes
      if (fechaPago.getDate() <= 1) {
        fechaPago.setDate(2);
      } else if (fechaPago.getDate() <= 16) {
        fechaPago.setDate(17);
      } else {
        fechaPago.setMonth(fechaPago.getMonth() + 1);
        fechaPago.setDate(2);
      }
      pagos.push(new Date(fechaPago));
      pagosList.push({
        id:i,
        date:new Date(fechaPago).toLocaleDateString('es-MX', {month: '2-digit', day: '2-digit', year: 'numeric'}),
        amount: monto,
        status:"pendiente"               
      })

    }
  }

  const ultimoPago = pagos[3];
  const ultimoPagoFormateado = ultimoPago.toLocaleDateString('es-MX', { day: 'numeric', month: 'long' });
  return { pagos, ultimoPago: ultimoPagoFormateado, pagosList };
}

