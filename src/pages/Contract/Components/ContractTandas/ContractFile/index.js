import { Page, Text, View, Document, StyleSheet, Image, Link, } from '@react-pdf/renderer';
import { formatCurrency, formatNumberToText } from '../../../../../utils/formats';
import { useEffect } from 'react';


export default function ContractFile({
  user,
  paymentInfo,
  dates,
}) {

  const ui = StyleSheet.create({
    page: { padding: "1.27cm" },
    underline: { textDecoration: 'underline' },
    bold: { fontFamily: 'Helvetica-Bold', },
    lineBreak: { marginBottom: '10px' },
    uppercase: { textTransform: 'uppercase' },
    centerTitle: { fontFamily: 'Helvetica-Bold', fontSize: '11px', fontStyle: 'normal', color: '#000', textAlign: 'center', textTransform: 'uppercase' },
    center: { fontFamily: 'Helvetica-Bold', fontSize: '10px', fontStyle: 'normal', color: '#000', textAlign: 'center', },
    subNumber: { fontFamily: 'Helvetica-Bold', fontSize: '10px', fontStyle: 'normal', color: '#000', display: 'block', },
    parraf: { textAlign: 'justify', fontWeight: '400', fontFamily: 'Helvetica', fontSize: '10px', fontStyle: 'normal', lineHeight: 1.15 },
    parrafBold: { textAlign: 'justify', fontFamily: 'Helvetica-Bold', fontSize: '10px', fontStyle: 'normal', lineHeight: 1.15 },
    mayusUnderBold: { textTransform: 'uppercase', fontFamily: 'Helvetica-Bold', textDecoration: 'underline' },
    number: { fontFamily: 'Helvetica-Bold', fontSize: '10px', fontStyle: 'normal', color: '#000' },
    tableText: { fontFamily: 'Helvetica', fontWeight: 'normal', color: '#000' },
    tableTextBold: { fontFamily: 'Helvetica-Bold', fontWeight: 'bold', color: '#000' },
  });

  const Underline = ({ children }) => <Text style={ui.underline}>{children}</Text>
  const MayusUnderBold = ({ children }) => <Text style={ui.mayusUnderBold}>{children}</Text>
  const Uppercase = ({ children }) => <Text style={ui.uppercase}>{children}</Text>
  const ParrafBold = ({ children }) => <><Text style={ui.parrafBold}>{children}</Text><LineBreak /></>
  const LineBreak = () => <View style={ui.lineBreak}></View>
  const Parraf = ({ children }) => <><Text style={ui.parraf}>{children}</Text><LineBreak /></>
  const Bold = ({ children }) => <Text style={ui.bold}>{children}</Text>
  const CenterTitle = ({ children }) => <><Text style={ui.centerTitle}>{children}</Text><LineBreak /></>

  const RomanOne = ({ children }) => <Text style={ui.parraf}> <Text style={ui.number}>I. </Text> {children} </Text>
  const RomanTwo = ({ children }) => <Text style={ui.parraf}><Text style={ui.number}>II. </Text>{children}</Text>
  const RomanThree = ({ children }) => <Text style={ui.parraf}><Text style={ui.number}>III. </Text>{children}</Text>

  useEffect(() => {
    console.log({
      user,
      paymentInfo
    });
  }, [user,
    paymentInfo])

  let rows = [];

  const payment = paymentInfo.biWeeklyAmount;
  const totalAmount = payment * 10;
  const payedAmount = payment * 4
  let balance = totalAmount - payedAmount;
  let interest = 0;
  let capital = 0;
  let iva = 0.16;
  let cat = 3.95;

  for (let index = 0; index < 8; index++) {
    interest = totalAmount * 0.0215518;
    iva = interest * 0.16;
    capital = payment - interest - iva;
    balance -= capital;

    rows.push([
      (index + 1), // NO. PAGO
      dates[index], // FECHA DE PAGO      
      payment, // PAGO QUINCENAL,    
      payment, // PAGO QUINCENAL
      capital, // CAPITAL - 
      interest, // INTERESES ORDINARIOS - OK
      cat, // CAT
      iva, // IVA
      balance // BALANCE
    ]);
  }

  console.log({ rows });

  const SubNumbers = ({ children, subnumber }) => {
    return (
      <>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={ui.parrafBold}>{subnumber}</Text>
          <View style={{ width: '17.5cm' }}>
            {children}
          </View>
        </View>
      </>
    )
  }

  const SubNumbersTwo = ({ children, subnumber }) => {
    return (
      <>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', gap: "0.5cm" }}>
          <Text style={{ ...ui.parrafBold, marginLeft: 'auto' }}>{subnumber}</Text>
          <View style={{ width: '17cm' }}>
            {children}
          </View>
        </View>
      </>
    )
  }

  const SignatureContainer = () => {
    return (
      <View style={{ margin: '0 auto 0.2cm auto' }}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <View style={{ width: '6cm', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
            <Text style={ui.center}>ACREDITANTE</Text>
            <Text style={ui.center}>MUNBRUNN, S.A. DE C.V</Text>
          </View>
          <View style={{ width: '6cm', textAlign: 'center' }}>
            <Text style={ui.center}>ACREDITADO</Text>
          </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', maxWidth: '12cm' }}>
          <View style={{ borderBottom: '1px solid #000', width: '5.5cm', margin: '0 auto' }}>
            <Image style={{ width: "3cm", height: '3cm', margin: '0 auto', display: 'block' }} source={"https://tanda-ahorro.s3.us-west-2.amazonaws.com/FirmaPepeCabrerajpg.jpg"} />
          </View>
          <View style={{ borderBottom: '1px solid #000', width: '5.5cm', margin: '0 auto' }}></View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', maxWidth: '12cm' }}>
          <View style={{ width: '5.5cm', display: 'block', margin: '0 auto' }}>
            <Text style={{ ...ui.subNumber, textAlign: 'center', marginTop: '4px' }}>Representada en este acto por:</Text>
            <Text style={{ ...ui.parraf, textAlign: 'center' }}>José Magdaleno Cabrera González</Text>
          </View>
          <View style={{ width: '5.5cm', display: 'block', margin: '0 auto' }}>
            <Text style={{ ...ui.subNumber, textAlign: 'center', marginTop: '4px' }}>Por su propio derecho</Text>
            <Text style={{ ...ui.parraf, textAlign: 'center' }}>{[first_name, maternal_name, last_name].join(" ")}</Text>
          </View>
        </View>
      </View>
    )
  }

  const Table = ({ children, type }) => {

    const css = {
      width: type === "portrait" ? '18cm' : '23cm',
      margin: '0 auto',
      height: 'auto'
    };

    return (
      <View style={css}>{children}</View>
    )
  }

  const Row = ({
    children,
    breaking = false
  }) => {

    const css = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap'
    };

    return breaking === true
      ? <View style={{ ...css }} break={true}>{children}</View>
      : <View style={{ ...css }}>{children}</View>
  }

  const Cell = ({
    children,
    x,
    y,
    full,
    centered = true,
    borderColor,
    bg = "#FFFFFF"
  }) => {

    const size = { width: `${x}cm`, height: `${y}cm`, MaxWidth: `${x}cm`, MaxHeight: `${y}cm` };
    const grow = { flexGrow: full ? '1' : '0' };
    const bColor = { border: borderColor ? `1px solid ${borderColor}` : "1px solid #000" };
    const alignCenter = centered ? { display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' } : null;

    return (
      <View style={{ ...size, ...bColor, ...grow, ...alignCenter, padding: '4px', backgroundColor: bg }}>
        {children}
      </View>
    )
  }

  const Column = ({
    children,
    textCenter = false
  }) => {

    const css = {
      display: 'flex',
      flexDirection: 'column'
    };

    const jCenter = textCenter ? { justifyContent: 'center', alignItems: 'center' } : null;

    return (
      <View style={{
        ...css,
        ...jCenter
      }}>
        {children}
      </View>
    )
  }

  const CellText = ({ bold, size, children }) => {

    const stylish = bold ? ui.tableTextBold : ui.tableText;
    const fSize = { fontSize: `${size ? size : 10}px` };

    return (
      <Text style={{
        ...stylish,
        ...fSize
      }}>{children}</Text>
    )
  }

  const {
    rfc,
    curp,
    street,
    outside_no,
    inside_no,
    colony,
    cp,
    city,
    municipality,
    state,
    first_name,
    last_name,
    maternal_name
  } = user;

  const nombreCompleto = [first_name, maternal_name, last_name].join(" ")

  const MONTHS = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  const todayBrowserDate = new Date();

  const todayDate = todayBrowserDate.getDate();
  const monthDate = MONTHS[todayBrowserDate.getMonth()];
  const yearDate = todayBrowserDate.getFullYear();

  return (
    <Document>
      <Page size="A4" style={ui.page}>
        <ParrafBold>
          CONTRATO DE APERTURA DE CRÉDITO SIMPLE (EL “<Underline>CONTRATO</Underline>”) QUE CELEBRAN, POR UNA PARTE,
          MUNBRUNN, S.A. DE C.V., REPRESENTADA EN ESTE ACTO POR EL SEÑOR [JOSÉ MAGDALENO CABRERA GONZÁLEZ],
          A QUIEN EN LO SUCESIVO Y PARA LOS EFECTOS DEL PRESENTE CONTRATO SE LE DENOMINARÁ COMO EL “<Underline>ACREDITANTE</Underline>”,
          Y POR OTRA PARTE [NOMBRE DEL CLIENTE], POR SU PROPIO DERECHO, A QUIEN EN LO SUCESIVO Y PARA LOS EFECTOS
          DEL PRESENTE CONTRATO SE LE DENOMINARÁ COMO EL “<Underline>ACREDITADO</Underline>”, AL TENOR DE LOS SIGUIENTES ANTECEDENTES,
          DECLARACIONES Y CLÁUSULAS:
        </ParrafBold>
        <CenterTitle>A N T E C E D E N T E S</CenterTitle>
        <SubNumbers subnumber="I.">
          <Parraf>
            En esta misma fecha, el Acreditante celebró con el Acreditado cierto Contrato de Depósito (el “<Underline>Contrato de Depósito</Underline>”),
            mediante el cual el Acreditado se obligó a entregar al Acreditante la cantidad total de <Underline>{formatCurrency(payedAmount)}</Underline> M.N.
            (<Underline>{formatNumberToText(payedAmount)}</Underline> pesos 00/100 Moneda Nacional) (la “<Underline>Cantidad en Depósito</Underline>”), misma que deberá entregar en las fechas y cantidades
            establecidas en la Cláusula Primera del Contrato de Depósito.
          </Parraf>
        </SubNumbers>
        <CenterTitle>D E C L A R A C I O N E S</CenterTitle>
        <SubNumbers subnumber='I.'>
          <Parraf>
            Declara el <Bold>ACREDITANTE</Bold>, por conducto de su representante legal, que:
          </Parraf>
        </SubNumbers>
        <SubNumbersTwo subnumber='a)'>
          <Parraf>
            Es una sociedad mercantil, de nacionalidad mexicana, debidamente constituida conforme las leyes de los Estados Unidos Mexicanos (“<Underline>México</Underline>”),
            en los términos de la escritura pública número 45,988, de fecha 1 de septiembre de 2014, otorgada ante la fe del Licenciado Alfredo Ruíz del
            Río Prieto, Notario Público número 141 de la Ciudad de México, debidamente inscrita en el Registro Público de la Propiedad y del Comercio de
            dicha entidad en el folio mercantil electrónico número 524662-1.
          </Parraf>
        </SubNumbersTwo>
        <SubNumbersTwo subnumber="b)">
          <Parraf>
            Su representante legal cuenta con las facultades necesarias y suficientes para celebrar el presente Contrato facultades que, a la firma del mismo,
            no le han sido revocadas, limitadas ni modificadas en forma alguna.
          </Parraf>
        </SubNumbersTwo>
        <SubNumbersTwo subnumber="c)">
          <Parraf>
            Se encuentra inscrita en el Registro Federal de Contribuyentes del Servicio de Administración Tributaria bajo la clave MUN140901PR2.
          </Parraf>
        </SubNumbersTwo>
        <SubNumbersTwo subnumber="d)">
          <Parraf>
            Señala como su domicilio el ubicado en calle Emerson 316, Piso 2, Oficina 202, Colonia Polanco V Sección, Alcaldía Miguel Hidalgo, C.P. 11560,
            Ciudad de México, así como su dirección de internet o sitio web se encuentra disponible en <Link>https://www.medsi.mx</Link>
          </Parraf>
        </SubNumbersTwo>
        <SubNumbersTwo subnumber="e)">
          <Parraf>
            Es su voluntad celebrar el presente Contrato y obligarse conforme a los términos y condiciones que más adelante se indican.
          </Parraf>
        </SubNumbersTwo>
        <SubNumbers subnumber='I.'>
          <Parraf>
            Declara el <Bold>ACREDITADO</Bold>, por su propio derecho, que:
          </Parraf>
        </SubNumbers>
        <SubNumbersTwo subnumber='a)'>
          <Parraf>
            Es una persona física, mayor de edad, de nacionalidad mexicana, con personalidad y plena capacidad jurídica para obligarse en los términos del
            presente Contrato.
          </Parraf>
        </SubNumbersTwo>
        <SubNumbersTwo subnumber="b)">
          <Parraf>
            Cuenta con los recursos económicos suficientes y necesarios para dar cumplimiento a todas y cada una de las obligaciones que a su cargo deriven
            de este Contrato incluyendo, sin limitar el pago puntual del Crédito, mismos que han sido o serán generados u obtenidos por medio de una fuente
            de origen y de una actividad lícita.
          </Parraf>
        </SubNumbersTwo>
        <SubNumbersTwo subnumber="c)">
          <Parraf>
            Se encuentra inscrita en el Registro Federal de Contribuyentes del Servicio de Administración Tributaria bajo la clave <Underline>{rfc}</Underline> y Clave Única
            de Registro de Población <Underline>{curp}</Underline>.
          </Parraf>
        </SubNumbersTwo>
        <SubNumbersTwo subnumber="d)">
          <Parraf>
            Señala como su domicilio el ubicado en calle {[street, outside_no, inside_no, colony, cp, city, municipality, state].join(', ')}.
          </Parraf>
        </SubNumbersTwo>
        <SubNumbersTwo subnumber="e)">
          <Parraf>
            Conoce los términos generales y las características aplicables al Crédito a través del sitio <Link>https://www.medsi.mx.</Link> Por lo tanto, el contenido,
            alcance y efectos del Contrato son de su comprensión, manifestando estar de acuerdo en todo lo estipulado en el mismo, así como en los demás
            documentos a suscribir que forman parte integrante del presente Contrato.
          </Parraf>
        </SubNumbersTwo>
        <SubNumbersTwo subnumber="f)">
          <Parraf>
            “EL ACREDITANTE” hizo de su conocimiento, previo a la celebración del presente Contrato: (i) el monto total del Crédito; (ii) el número y
            monto de los pagos parciales o individuales y la forma y periodicidad para liquidarlos; (iii) las cargas financieras; (iv) las comisiones
            aplicables; (v) monto y detalle de cualquier cargo, si lo hubiera; (vii) el derecho que tiene a liquidar anticipadamente el presente Contrato
            y las condiciones para ello; (viii) los intereses y la forma de calcularlos, el monto de los intereses a pagar en cada período y el tipo de
            tasa de interés, y (ix) el CAT.
          </Parraf>
        </SubNumbersTwo>
        <SubNumbersTwo subnumber="g)">
          <Parraf>
            Es su deseo recibir de “EL ACREDITANTE”, un crédito simple hasta por la cantidad de $<Underline>{parseFloat(paymentInfo.biWeeklyAmount * 4).toFixed(2)}</Underline>.00 M.N. ([Quicena x 10] pesos 00/100 Moneda Nacional),
            mismo que le ha solicitado con anterioridad a la fecha de este Contrato.
          </Parraf>
        </SubNumbersTwo>
        <SubNumbersTwo subnumber="h)">
          <Parraf>
            Con anterioridad a la fecha de celebración de este Contrato, “EL ACREDITANTE”, le explicó el tratamiento que le dará a sus datos personales
            poniendo a su disposición el Aviso de Privacidad, en términos de la Ley Federal de Protección de Datos Personales en Posesión de los
            Particulares (la “<Underline>LFPDPPP</Underline>”) mismo que puede ser consultado a través del sitio <Link>https://www.medsi.mx</Link>, donde se señala, además del tratamiento
            que se le darán a sus datos personales, los derechos de acceso, rectificación, cancelación, oposición, revocación, limitación en el uso
            y/o divulgación con los que cuenta (Derechos ARCO) y la forma de cómo los puede hacer valer.
          </Parraf>
        </SubNumbersTwo>
        <SubNumbersTwo subnumber="i)">
          <Parraf>
            Es su voluntad celebrar este Contrato y obligarse conforme a los términos y condiciones que más adelante se indican en sus cláusulas.
          </Parraf>
        </SubNumbersTwo>
        <RomanThree>
          Declaran el <Bold>ACREDITANTE</Bold> a través de su representante legal y el <Bold>ACREDITADO</Bold> por su propio derecho (las “<Underline>Partes</Underline>”) que:
        </RomanThree>
        <CenterTitle>C L Á U S U L A S</CenterTitle>
        <Parraf>
          <MayusUnderBold>PRIMERA. OBJETO.</MayusUnderBold> Sujeto a los términos y condiciones pactados en el presente Contrato, el ACREDITANTE otorga y
          el ACREDITADO acepta recibir del ACREDITANTE un crédito simple por la cantidad de <Underline>{formatCurrency(totalAmount)}</Underline> M.N. (<Underline>{formatNumberToText(totalAmount)}</Underline> pesos 00/100, Moneda Nacional)
          (en lo sucesivo el “<Underline>Crédito</Underline>”); en el entendido que dentro del importe del Crédito no se encuentran comprendidos los intereses y demás accesorios
          que deba cubrir el ACREDITADO al ACREDITANTE en términos del presente Contrato. Por su parte, el ACREDITADO se obliga a restituir al ACREDITANTE
          el importe total del Crédito y los intereses ordinarios, de conformidad con lo establecido en la o las Disposiciones que realice, de conformidad
          con la tabla de pagos parciales que se detalle en cada uno de los <Bold>Anexos A</Bold> correspondientes a cada Disposición de conformidad con lo establecido
          en la Cláusula Tercera del presente Contrato.
        </Parraf>
        <Parraf>
          El ACREDITANTE podrá aumentar el límite del Crédito otorgado al ACREDITADO, siempre y cuando se encuentre al corriente en el cumplimiento de sus obligaciones.
          En caso de que el ACREDITANTE decida aumentar el monto del Crédito, se lo notificará al ACREDITADO a través de: (a) el estado de cuenta; (b) medios electrónicos;
          o (d) por cualquier otro medio que el ACREDITANTE determine. El ACREDITADO deberá manifestar su consentimiento para el aumento propuesto al momento de recibir
          la comunicación por cualquiera de los medios antes señalados.
        </Parraf>
        <Parraf>
          <MayusUnderBold>SEGUNDA. DESTINO DEL CRÉDITO.</MayusUnderBold> El ACREDITANTE acepta y está de acuerdo en que el ACREDITADO aplique el Crédito para el pago de los procedimientos que se especifiquen
          en cada una de las Disposiciones de conformidad con lo establecido en la Cláusula Tercera del presente Contrato (el “<Underline>Destino</Underline>”), por lo que el ACREDITADO se obliga
          expresamente a utilizar el Crédito única y exclusivamente para el Destino, por lo que, en el caso de que el ACREDITADO lo utilice (total o parcialmente) para un fin
          distinto sin la previa autorización del ACREDITANTE, se incurrirá en una causa de vencimiento anticipado en términos de la Cláusula Novena del presente Contrato.
          El ACREDITADO estará obligado a entregar al ACREDITANTE, dentro de los 5 (cinco) días naturales siguientes a la fecha en que se realice la solicitud de Disposición,
          toda aquella información y documentos en original (inclusive aquellos emitidos por terceras personas) que acrediten, a entera satisfacción del ACREDITANTE, el Destino del Crédito.
          En caso que el ACREDITADO no entregue los documentos antes referidos y/o no acredite el Destino del Crédito, a entera discreción del ACREDITANTE, podrá dar por vencido
          anticipadamente el plazo para el pago del Crédito, sin responsabilidad alguna, de conformidad con lo establecido en la Cláusula Novena del presente Contrato.
        </Parraf>
        <Parraf>
          Las Partes acuerdan que en caso de que el ACREDITADO se encuentre en mora en el pago del servicio del Crédito, el ACREDITANTE podrá solicitar al prestador de los procedimientos
          Destino del presente Contrato, para que interrumpa la prestación de los procedimientos al ACREDITADO. A su vez el ACREDITANTE podrá solicitar información al prestador de los
          procedimientos Destino del presente Contrato sobre el estado que guarda el procedimiento del ACREDITADO.
        </Parraf>
        <Parraf>
          <MayusUnderBold>TERCERA. SOLICITUD DE DISPOSICIÓN DEL CRÉDITO.</MayusUnderBold> El ACREDITADO podrá ejercer el importe del Crédito concedido en pesos Moneda Nacional, durante la vigencia del presente
          Contrato mediante una o varias solicitudes de disposición (las “<Underline>Disposiciones</Underline>”). En cada ocasión que el ACREDITADO desee hacer una Disposición del Crédito, deberá notificar
          al ACREDITANTE, mediante el envío de un documento suscrito por el ACREDITADO en términos sustancialmente similares al modelo que se agrega al presente Contrato como <Bold>Anexo A</Bold>
          (la “<Underline>Solicitud de Disposición</Underline>”). Dicha Solicitud de Disposición deberá enviarse al ACREDITANTE con una anticipación de por lo menos 5 (cinco) días naturales a la fecha
          en que se pretenda recibir el monto a disponer, con el fin de que el ACREDITANTE se encuentre en posibilidades de determinar si resulta procedente autorizar la Disposición,
          establecer las características y fechas de pago y, en su caso, llevar a cabo el abono correspondiente. Cada una de las Solicitudes de Disposición deberán contener,
          por lo menos, la información que se detalla en el <Bold>Anexo A</Bold> del presente, en el que se incluirá el Destino, así como la persona beneficiaria del Destino.
        </Parraf>
        <Parraf>
          Las Partes acuerdan que el ACREDITADO no podrá llevar a cabo la primera Disposición del Crédito hasta en tanto haya cumplido con todas las obligaciones y condiciones derivadas del
          Contrato de Depósito a que se refiere el Antecedente I del presente Contrato, específicamente entregar al ACREDITANTE íntegramente la Cantidad en Depósito en las fechas y cantidades establecidas en el mismo.
        </Parraf>
        <Parraf>
          Aunado a lo anterior, las Partes reconocen y aceptan que, para efectos de que el ACREDITADO pueda disponer del Crédito, deberá firmar un pagaré a favor
          del ACREDITANTE por el importe de cada Disposición, de acuerdo con el formato de pagaré que se adjunta al presente Contrato como <Bold>Anexo B</Bold>, al momento de que el ACREDITANTE acepte dicha Disposición.
        </Parraf>
        <Parraf>
          El comprobante bancario de la transferencia de fondos de la Disposición que corresponda, servirá como recibo más amplio que en derecho proceda, así como acuse de recepción
          de los fondos del Crédito a entera satisfacción del ACREDITADO.
        </Parraf>
        <Parraf>
          Cada Solicitud de Disposición y autorización se formalizará, ya sea de manera escrita o a través de las aplicaciones o de los medios electrónicos que el ACREDITANTE tenga
          habilitados. El ACREDITADO deberá manifestar su consentimiento expreso con los términos y condiciones de cada Disposición que solicite el ACREDITANTE.
        </Parraf>
        <Parraf>
          <MayusUnderBold>CUARTA. INTERESES ORDINARIOS.</MayusUnderBold> Las Partes convienen en que el importe del Crédito causará intereses ordinarios a razón de aplicar la tasa establecida al monto total del Contrato de Crédito
          (en lo sucesivo la “<Underline>Tasa de Intereses Ordinarios</Underline>”), más los impuestos que, en su caso, se generen, desde la fecha en que se reciban los fondos de la primera Disposición de Crédito por el ACREDITADO,
          hasta el día en que el ACREDITADO efectúe el pago total del Crédito al ACREDITANTE.
        </Parraf>
        <Parraf>
          Los intereses ordinarios se calcularán de forma quincenal, multiplicando el monto total del Contrato de Crédito, por la Tasa de Intereses Ordinarios anual y el resultado se dividirá entre 24.
        </Parraf>
        <Parraf>
          <MayusUnderBold>QUINTA. INTERSES MORATORIOS.</MayusUnderBold> En caso de falta de pago oportuno del monto total del Crédito (incluidos los intereses ordinarios y demás accesorios que deba cubrir el
          ACREDITADO al ACREDITANTE en términos de este documento), la cantidad no pagada causará intereses moratorios a razón de aplicar la tasa establecida (los “<Underline>Intereses Moratorios</Underline>”), los cuales se generarán diariamente,
          desde la fecha en que se incurra en mora hasta el día en que el ACREDITADO efectúe el pago total que correspondan al ACREDITANTE, sobre: (i) cualesquiera saldos vencidos no pagados oportunamente; (ii)
          el saldo total adeudado si éste se diere por vencido anticipadamente en términos del presente Contrato, y (iii) sobre el importe de otras obligaciones contractuales a cargo del ACREDITADO que no sean
          por capital o intereses, si no fueren cumplidas en los términos pactados en este instrumento, intereses que se aplicarán sobre el saldo total insoluto del Crédito, más intereses y demás accesorios que,
          en su caso, se generen conforme a este instrumento.
        </Parraf>
        <Parraf>
          Los Intereses Moratorios se pagarán de forma inmediata y sin perjuicio del derecho que tendrá el ACREDITANTE para exigir la totalidad de las cantidades vencidas y aquellas pendientes
          por vencer (así como los intereses ordinarios), por lo que, en caso de incumplimiento, todas las cantidades establecidas en este contrato (incluyendo, sin limitar, los intereses ordinarios)
          se entenderán vencidas en la fecha en que se dé el incumplimiento por parte del ACREDITADO. Para efectos del cálculo, la cantidad que resulte de aplicar dicha tasa de interés moratorio
          deberá de dividirse entre 30 (treinta) días naturales y multiplicar el resultado por el número de días naturales que se retrase el pago.
        </Parraf>
        <Parraf>
          <MayusUnderBold>SEXTA. RESTRICCIÓN Y DENUNCIA.</MayusUnderBold> De conformidad con el artículo 294 de la Ley General de Títulos y Operaciones de Crédito, el ACREDITANTE se
          reserva el derecho de restringir o reducir: (i) el monto del Crédito, y/o (ii) el plazo de disponibilidad del Crédito; pudiendo también denunciar el presente Contrato en cualquier
          tiempo y sin necesidad de cumplir otro requisito que el de dar aviso por escrito al ACREDITADO, quedando limitado o extinguido, según sea el caso, el derecho del ACREDITADO para
          hacer uso del saldo no dispuesto del Crédito y/o el plazo de pago del mismo, a partir de la fecha de dicha notificación. En caso de que el ACREDITANTE notifique la denuncia del presente
          Contrato, las Partes acuerdan que el ACREDITADO seguirá obligado al pago de la suma principal insoluta, intereses, gastos, costos y demás accesorios del Crédito,
          respecto de la parte del mismo que efectivamente hubiere dispuesto.
        </Parraf>
        <Parraf>
          <MayusUnderBold>SÉPTIMA. LUGAR, FORMA Y PRELACIÓN EN EL PAGO.</MayusUnderBold> El Crédito, accesorios y demás cantidades estipuladas en el presente Contrato deberán ser pagadas por el ACREDITADO al ACREDITANTE conforme a lo siguiente:
        </Parraf>
        <SubNumbers subnumber="1.">
          <Parraf>
            Los pagos deberán de hacerse mediante depósito o transferencia electrónica de fondos libremente disponibles y transferibles el mismo día de
            su pago sin deducción y libres de cualesquiera impuestos, contribuciones, cargas, deducciones o retenciones de cualquier naturaleza que se
            impongan o graven en cualquier tiempo por cualquier autoridad, en la cuenta bancaria número 0118858527, CLABE 012180001188585273, del Banco
            BBVA  de la que es titular el ACREDITANTE, en pesos mexicanos (Moneda Nacional en México), o también podrá realizarse por cualquier otro medio
            que le sea notificado por el ACREDITANTE. No obstante, el ACREDITANTE se reserva el derecho de modificar el banco y la cuenta en la que han
            de efectuarse los pagos, bajo la condición de que avise por escrito el cambio de cuenta y banco al ACREDITADO con una anticipación de cuando
            menos 5 (cinco) días hábiles, en caso contrario la modificación no surtirá efectos.
          </Parraf>
        </SubNumbers>
        <SubNumbers subnumber="2.">
          <Parraf>
            El ACREDITADO está obligado al pago de las parcialidades pactadas en cada Disposición, conforme a lo establecido en la tabla de amortizaciones
            establecida para cada una de las Disposiciones.
          </Parraf>
        </SubNumbers>
        <SubNumbers subnumber="3.">
          <Parraf>
            Por ningún motivo el ACREDITADO tendrá derecho a retener ningún tipo de pago que deba realizarse conforme al presente Contrato; sin embargo,
            en el supuesto que estuviere obligado, por ley o por disposición judicial, a hacer alguna retención por concepto de impuestos o por cualquier
            otro motivo sobre pagos del principal o cualquier otra cantidad accesoria pagadera al ACREDITANTE, el ACREDITADO pagará al ACREDITANTE las
            cantidades adicionales que se requieran para asegurar que el ACREDITANTE reciba la cantidad íntegra que debía recibir si no se hubiere hecho
            la retención, y entregará las constancias de retención correspondientes en original dentro de los 2 (dos) días hábiles siguientes a aquel en
            que se haya realizado la misma.
          </Parraf>
        </SubNumbers>
        <SubNumbers subnumber="4.">
          <Parraf>
            En caso que el día en que deba efectuarse algún pago, sea del principal o cualquier otra cantidad accesoria del Crédito, no fuere día hábil,
            el pago correspondiente deberá hacerse el día hábil inmediato siguiente a la fecha convenida para su pago. Para los efectos del presente
            Contrato, las Partes acuerdan que se entenderá por “días hábiles” todos los días salvo los sábados y domingos y aquellos días que sean
            considerados como días de descanso obligatorio en México de conformidad con la Ley Federal del Trabajo o en los que las instituciones de
            crédito se encuentren debidamente autorizadas para cerrar sus puertas al público en general.
          </Parraf>
        </SubNumbers>
        <SubNumbers subnumber="5.">
          <Parraf>
            Salvo pacto expreso en contrario que con posterioridad a la firma del presente Contrato las Partes celebren, éstas convienen en que los
            pagos que se efectúen se aplicarán con la siguiente prelación: (i) los impuestos que se generen y que se trasladen a o estén a cargo del
            ACREDITADO; (ii) el pago de todos y cada uno de los gastos y costas en que hubiere incurrido el ACREDITANTE con motivo de exigir el
            cumplimiento y/o ejecución de las obligaciones derivadas del presente Contrato (iii) el pago de comisiones accesorios y gastos que en
            su caso hubiere generado el Crédito (iv) los intereses moratorios; (v) los intereses ordinarios que se generen en los términos del
            presente Contrato; y (vi) al pago del principal.
          </Parraf>
        </SubNumbers>
        <Parraf>
          <MayusUnderBold>OCTAVA. PAGOS ANTICIPADOS. </MayusUnderBold>En cualquier fecha, y siempre que se encuentre al corriente de sus obligaciones
          de pago, el ACREDITADO podrá efectuar pagos anticipados, sin penalidad alguna, mediante aviso por escrito que dirija al ACREDITANTE.
          Todo pago realizado de manera anticipada por el ACREDITADO será aplicado de conformidad con el numeral 5 de la Cláusula Séptima anterior.
          En caso de que se apliquen al pago del saldo insoluto no se modificará el <Underline></Underline> del presente Contrato.
        </Parraf>
        <Parraf>
          Será responsabilidad del ACREDITADO notificar y comprobar por correo electrónico al ACREDITANTE a la dirección electrónica contacto@medsi.mx,
          cuando haya llevado a cabo un pago anticipado a cuenta del Crédito. Por la misma vía de manera pronta y expedita, el ACREDITANTE deberá
          acusar recibo del pago anticipado al ACREDITADO. A solicitud del ACREDITADO, el ACREDITANTE se obliga a expedir y entregarle por correo
          electrónico a la dirección del ACREDITADO mencionada en la Cláusula Décimo Quinta de éste Contrato que refleje los pagos anticipados,
          el monto del saldo insoluto, los pagos mensuales restantes, cálculo de los intereses ordinarios, y cualquier otra información.
        </Parraf>
        <Parraf>
          Los pagos anticipados no eximen al ACREDITADO de la obligación de efectuar los pagos inmediatos siguientes, según corresponda conforme
          a la Tabla de Amortizaciones de cada Disposición.
        </Parraf>
        <Parraf>
          Las Partes acuerdan que (i) una vez que el ACREDITADO haya entregado íntegramente al ACREDITANTE la Cantidad en Depósito de conformidad
          con los términos y condiciones del Contrato de Depósito; y (ii) el ACREDITADO haga la Solicitud de la primera Disposición; el ACREDITANTE
          aplicará el monto total de la Cantidad en Depósito al pago por anticipado de intereses ordinarios y amortización.
        </Parraf>
        <Parraf>
          <MayusUnderBold>NOVENA. CAUSAS DE VENCIMIENTO ANTICIPADO. </MayusUnderBold>Las Partes acuerdan que el ACREDITANTE podrá dar por
          vencido anticipadamente el plazo para el pago del Crédito y demás accesorios, de pleno derecho y sin necesidad de declaración judicial
          o extrajudicial alguna, en cuyo caso todas las cantidades adeudadas por parte del ACREDITADO al ACREDITANTE, conforme a este instrumento,
          serán debidas y pagaderas de forma inmediata, cuando se presente cualquiera de las causas de vencimiento anticipado que a continuación se mencionan:
        </Parraf>
        <SubNumbers subnumber="1.">
          <Parraf>
            Si el ACREDITADO incumpliera, en tiempo y forma, con cualquiera de sus obligaciones que se establecen en el presente Contrato, sin limitar, el retraso o no pago de cualquier amortización del Crédito, así como cualquier otro accesorio que corresponda conforme a este instrumento (incluido el pago de cualquier pagaré emitido a favor del ACREDITANTE);
          </Parraf>
        </SubNumbers>
        <SubNumbers subnumber="2.">
          <Parraf>
            Si el ACREDITADO entrega información falsa al ACREDITANTE;
          </Parraf>
        </SubNumbers>
        <SubNumbers subnumber="3.">
          <Parraf>
            Si emplea el importe del Crédito o parte de él, en su caso, para fines distintos a los pactados en la Solicitud de Disposición
            correspondiente o si el ACREDITADO no proporciona al ACREDITANTE, cuando así se lo solicite, la información o documentos relacionados
            con el Destino del Crédito;
          </Parraf>
        </SubNumbers>
        <SubNumbers subnumber="4.">
          <Parraf>
            Si el ACREDITADO fallece o es declarado con cualquier incapacidad, ya sea, total, parcial, permanente o legal (sin limitar), o es
            declarado en estado de interdicción o en estado de insolvencia por autoridad correspondiente;
          </Parraf>
        </SubNumbers>
        <SubNumbers subnumber="5.">
          <Parraf>
            Si el ACREDITADO incumple a cualquiera de sus obligaciones derivadas del Contrato de Depósito;
          </Parraf>
        </SubNumbers>
        <SubNumbers subnumber="6.">
          <Parraf>
            Si en cualquier tiempo y por cualquier motivo se denuncia el presente Contrato; y
          </Parraf>
        </SubNumbers>
        <SubNumbers subnumber="7.">
          <Parraf>
            Por cualquier causa que al efecto prevea la legislación aplicable.
          </Parraf>
        </SubNumbers>
        <Parraf>
          La omisión del ACREDITANTE en el ejercicio de los derechos previstos en este Contrato en ningún caso tendrá el efecto de una renuncia
          de los mismos. Asimismo, ni el ejercicio singular o parcial de cualquier derecho derivado de este Contrato por parte del ACREDITANTE
          excluye algún otro derecho, facultad o privilegio.
        </Parraf>

        <Parraf>
          <MayusUnderBold>DÉCIMA. OBLIGACIÓN SOLIDARIA. </MayusUnderBold><Bold>Se omite intencionalmente</Bold>
        </Parraf>
        <Parraf>
          <MayusUnderBold>DÉCIMO PRIMERA. CANCELACIÓN.</MayusUnderBold> En un periodo de 5 (cinco) días hábiles posteriores a la firma del Contrato,
          el ACREDITADO mediante escrito firmado presentado al ACREDITANTE podrá cancelar el crédito sin responsabilidad alguna, siempre y cuando no
          haya dispuesto cantidad alguna del monto del Crédito otorgado, lo anterior de conformidad con lo establecido en el artículo 56 de la Ley
          Federal de Protección al Consumidor. Una vez verificada la solicitud de cancelación, el ACREDITANTE dará por terminado el Contrato.
        </Parraf>
        <Parraf>
          <MayusUnderBold>DÉCIMO SEGUNDA. VIGENCIA.</MayusUnderBold> La vigencia del presente Contrato será de 1 (un) año contados a partir de la fecha de firma.
          La vigencia del presente Contrato se entenderá renovada automáticamente por periodos iguales en caso de que ninguna de las Partes notifique su deseo de
          dar por terminado el Contrato con por lo menos 15 (quince) días naturales de anticipación a la fecha en que se pretenda darlo por terminado.
          El presente Contrato estará vigente durante todo el tiempo en que exista alguna cantidad pendiente de pago o cualquier otra obligación
          derivada del mismo a cargo del ACREDITADO a favor del ACREDITANTE, sin embargo, en ningún caso, el ACREDITADO podrá solicitar Disposiciones
          cuyo vencimiento sea en una fecha posterior a la vigencia del presente Contrato.
        </Parraf>
        <Parraf>
          Los plazos de pago y vigencia de cada disposición del Crédito serán pactados por el ACREDITANTE y el ACREDITADO, en cada Disposición
          que se autorice de conformidad con la Cláusula Tercera del presente Contrato.
        </Parraf>
        <Parraf>
          <MayusUnderBold>DÉCIMO TERCERA. IMPUESTOS.</MayusUnderBold> Las Partes acuerdan que todos los impuestos derivados del presente Contrato
          serán por cuenta única y exclusiva del ACREDITADO. En el supuesto que el ACREDITADO no liquide la totalidad de los impuestos a que se
          refiere la presente Cláusula, el ACREDITANTE podrá realizar el pago de los mismos a cuenta y a cargo del ACREDITADO, quien deberá
          reembolsarle todas las cantidades pagadas por dicho concepto dentro de los 5 (cinco) días hábiles siguientes a la fecha en que el
          ACREDITANTE los hubiere pagado, so pena en caso contrario de pagar los Intereses Moratorios que resulten de aplicar la tasa a que
          se refiere la Cláusula Quinta de este Contrato, sobre el saldo insoluto adeudado, intereses que se generarán diariamente, a partir
          del día en que se incurra en mora y hasta el día en que se efectúe el pago del importe adeudado y sus intereses, sin perjuicio del
          derecho del ACREDITANTE de dar por vencido anticipadamente el presente Contrato.
        </Parraf>
        <Parraf>
          <MayusUnderBold>DÉCIMO CUARTA. COMISIONES.</MayusUnderBold> El ACREDITADO se obliga a pagar al ACREDITANTE sin necesidad de previo
          requerimiento las siguientes comisiones:
        </Parraf>
        <SubNumbers subnumber="1.">
          <Parraf>
            Una comisión por gastos de aprobación al momento de la formalización del Crédito, dicha comisión asciende a la cantidad de $0.00 M.N.
            (cero pesos 00/100 Moneda Nacional), más el Impuesto al Valor Agregado y será cobrada una sola ocasión.
          </Parraf>
        </SubNumbers>
        <SubNumbers subnumber="2.">
          <Parraf>
            Una comisión por cada disposición que realice del Crédito, equivalente al 0% (cero por ciento) de la cantidad que disponga,
            más el Impuesto al Valor Agregado. Esta comisión será pagada por el ACREDITADO en pagos parciales, por la misma cantidad cada
            uno de ellos, junto con los demás pagos que el ACREDITADO debe efectuar en relación con la cantidad dispuesta, conforme al plazo
            que pacten el ACREDITADO y la ACREDITANTE en cada Disposición.
          </Parraf>
        </SubNumbers>
        <SubNumbers subnumber="3.">
          <Parraf>
            Una comisión por gastos de cobranza, la cual, el ACREDITADO se obliga a cubrir al ACREDITANTE por cualquier gasto de cobranza
            originado por el incumplimiento de sus obligaciones de pago en los términos pactados en el presente Contrato, misma que asciende
            a la cantidad de $200.00 M.N. (Doscientos pesos 00/100 Moneda Nacional), más el Impuesto al Valor Agregado correspondiente,
            cantidad que se deberá cubrir por cada Amortización vencida. Esta comisión será cobrada por cada ocasión que el ACREDITANTE
            deba realizar gestiones de cobranza en caso de incumplimiento del ACREDITADO a sus obligaciones contenidas en el presente Contrato.
          </Parraf>
        </SubNumbers>
        <SubNumbers subnumber="4.">
          <Parraf>
            Una comisión por mantenimiento, la cual, el ACREDITADO deberá pagar mensualmente durante toda la vigencia del presente Contrato,
            misma que asciende a la cantidad de $<Underline>{paymentInfo.biWeeklyAmount * 2}</Underline>.00 M.N. (<Underline>{formatNumberToText(paymentInfo.biWeeklyAmount * 2)}</Underline> pesos 00/100 Moneda Nacional).
          </Parraf>
        </SubNumbers>
        <Parraf>
          El ACREDITANTE no efectuará cargos por comisiones distintos a los especificados en este Contrato. Asimismo, durante la vigencia
          del presente Contrato, el ACREDITANTE no podrá establecer nuevas comisiones ni incrementar el monto de las convenidas en el presente.
        </Parraf>
        <Parraf>
          El ACREDITADO deberá pagar cada una de las comisiones descritas en la presente Cláusula de conformidad con lo anteriormente
          señalado. Específicamente la comisión establecida en el numeral 4. anterior, deberá pagarse mensualmente por el ACREDITADO
          mediante transferencia bancaria de fondos inmediatamente disponibles a la cuenta No. 0118858527, CLABE 012180001188585273 que
          el ACREDITANTE mantiene abierta en Banco BBVA.
        </Parraf>
        <Parraf>
          En caso de que el ACREDITADO incumpla con el pago de cualesquiera de las comisiones señaladas en la presente Cláusula no
          podrá disponer de monto alguno del Crédito.
        </Parraf>
        <Parraf>
          <MayusUnderBold>DÉCIMO QUINTA. RESPONSABILIDAD Y CONTRATISTA INDEPENDIENTE. </MayusUnderBold>El ACREDITADO acepta que el ACREDITANTE
          es ajeno a la relación de consumo del destino del Crédito; por lo que el ACREDITANTE no fungirá como proveedor de los bienes o
          servicios objeto de la transacción. En este sentido, el ACREDITADO deja en paz y a salvo al ACREDITANTE de cualquier responsabilidad
          derivada del procedimiento señalado como Destino del Crédito en cada una de las Disposiciones. Las Partes convienen expresamente
          que el ACREDITANTE no asume ninguna responsabilidad sobre la actuación profesional del médico o persona que realice el servicio
          al cliente durante el procedimiento.
        </Parraf>
        <Parraf>
          En virtud de lo anterior, el ACREDITADO se obliga a indemnizar y sacar en paz y a salvo al ACREDITANTE y a cada uno de sus accionistas,
          socios, agentes, empleados, sucesores y cesionarios de y en contra de cualquier acción, demanda, procedimiento, reclamaciones, gastos
          (incluyendo honorarios de abogados), daños, pérdidas, sanciones, multas, perjuicios y responsabilidades (ya sean anteriores o
          posteriores a la terminación del presente Contrato), que surjan de o en relación con o por razón del Destino del Crédito y
          cualquier otra cantidad adeudada o que se adeudará a favor del ACREDITANTE, en un plazo no mayor a 5 (cinco) días hábiles
          posteriores al requerimiento que para tales efectos le haga el ACREDITANTE, so pena en caso contrario de pagar los intereses
          moratorios establecidos en la Cláusula Quinta de este instrumento.</Parraf>
        <Parraf>
          Las Partes operarán en forma independiente, sin que haya ninguna relación de subordinación o dependencia económica entre ellos,
          ni entre los empleados o representantes de uno y otro. En consecuencia, las Partes reconocen que no existirá relación laboral entre
          ellas o su personal y que todas las obligaciones derivadas de la relación de trabajo entre cada una de las Partes y su personal serán
          responsabilidad exclusiva de cada una, existiendo únicamente una relación de carácter comercial entre las Partes.
        </Parraf>
        <Parraf>
          <MayusUnderBold>DÉCIMO SEXTA. DOMICILIOS Y NOTIFICACIONES.</MayusUnderBold> Todos los avisos y notificaciones entre las Partes deberán realizarse por escrito y
          ser entregados ya sea (i) personalmente, (ii) por correo certificado con acuse de recibo, porte pagado, o (iii) vía correo electrónico,
          a los domicilios y correos electrónicos, a no ser que las Partes notifiquen su cambio de domicilio o correo electrónico en los términos de esta cláusula.
        </Parraf>
        <Parraf>
          Los avisos y notificaciones entre las Partes se considerarán efectivamente recibidos por su destinatario, (i) si se entregan personalmente,
          al momento de dicha entrega, (ii) si se envían por correo certificado, en la fecha que el acuse de recibo señale, y (iii) si se transmiten
          por vía correo electrónico, en la misma fecha en que sean enviados, siempre y cuando el remitente cuente con un comprobante de que la
          transmisión se efectuó correctamente.
        </Parraf>
        <Parraf>
          En caso de cambio de domicilio de alguna de las Partes, la parte que vaya a realizar dicho cambio deberá dar aviso de ello por escrito
          a las otras dentro de los 5 (cinco) días hábiles anteriores a la fecha en que se vaya a efectuar el cambio; en caso contrario, las
          notificaciones hechas al domicilio señalado en esta fecha surtirán plenos efectos legales entre las Partes.
        </Parraf>
        <Parraf>
          <MayusUnderBold>DÉCIMO SÉPTIMA. MODIFICACIONES AL CONTRATO.</MayusUnderBold> Este Contrato consigna el acuerdo íntegro entre las Partes y sustituye a cualquier
          contrato o acuerdo previo entre ellas, empero solamente podrá ser modificado o reformado y cualquier renuncia a sus disposiciones
          solo se podrá efectuar mediante el consentimiento expreso por escrito de las Partes, salvo por lo establecido en la Cláusula Sexta del presente Contrato.
        </Parraf>
        <Parraf>
          <MayusUnderBold>DÉCIMO OCTAVA. INDEPENDENCIA DE LAS PARTES.</MayusUnderBold> Las Partes son independientes una de la otra, por lo que ninguna de ellas podrá asumir
          obligaciones a nombre o representación de la otra, salvo consentimiento previo y por escrito que al efecto suscriban.
        </Parraf>
        <Parraf>
          <MayusUnderBold>DÉCIMO NOVENA. INTEGRIDAD DEL CONTRATO.</MayusUnderBold> Las disposiciones de este Contrato son independientes y por tanto la nulidad o cancelación
          de cualquiera de tales disposiciones no afecta la validez de las demás. Asimismo, el hecho de que cualquiera de las Partes, en algún
          momento, no exija de la otra el cumplimiento de cualesquiera de las obligaciones consignadas en el presente, de ninguna manera
          significará una renuncia o afectará el derecho de dicha parte a exigir el cumplimiento de la obligación de que se trate.
        </Parraf>
        <Parraf>
          VIGÉSIMA. CESIÓN. Las Partes convienen que el ACREDITANTE podrá ceder, transferir, prendar, otorgar garantías y delegar o disponer
          de los derechos u obligaciones derivados del presente Contrato, total o parcialmente, a favor de cualquier persona, física o moral,
          sin previa autorización por escrito del ACREDITADO, teniendo la única obligación de informar al mismo la persona y lugar en donde a
          partir de dicha notificación deberá realizar los pagos correspondientes.
        </Parraf>
        <Parraf>
          <MayusUnderBold>VIGÉSIMO PRIMERA. CASO FORTUITO O FUERZA MAYOR.</MayusUnderBold> El ACREDITADO se obliga a cumplir íntegramente las obligaciones que contrae en el
          presente Contrato, aún en caso fortuito o de fuerza mayor y acepta expresamente esta responsabilidad en términos de lo dispuesto
          en el artículo 2,111 (dos mil ciento once) del Código Civil Federal.
        </Parraf>
        <Parraf>
          <MayusUnderBold>VIGÉSIMO SEGUNDA. ENCABEZADOS DE LAS CLÁUSULAS.</MayusUnderBold> Los encabezados de las Cláusulas que aparecen en el presente Contrato se han
          colocado por conveniencia de las Partes con el exclusivo propósito de facilitar su lectura, por tanto, no necesariamente definen
          ni limitan el contenido de las mismas. Para efectos de interpretación de cada cláusula deberá atenderse exclusivamente a su
          contenido y de ninguna manera a su título, por lo que no afectarán la interpretación y validez de este contrato, ni los términos,
          condiciones, obligaciones y derechos pactados en el mismo.
        </Parraf>
        <Parraf>
          <MayusUnderBold>VIGÉSIMO TERCERA. DECLARACIONES.</MayusUnderBold> Para todos los efectos legales a que haya lugar, lo establecido en las Declaraciones del
          presente Contrato, se tiene aquí por reproducido como si a la letra se insertase.
        </Parraf>
        <Parraf>
          <MayusUnderBold>VIGÉSIMO CUARTA. AUTORIZACIÓN DEL CLIENTE.</MayusUnderBold> Mediante el presente Contrato, el ACREDITADO otorga al ACREDITANTE: (i) su
          consentimiento expreso para la recolección y tratamiento de sus datos personales con la finalidad de celebrar el presente Contrato,
          así como para las finalidades previstas en el aviso de privacidad, el cual reconoce conocer plenamente y está enterado que
          puede consultarlo a través del sitio <Underline>www.medsi.mx</Underline>; (ii) su autorización por escrito incluyendo medios electrónicos, para que
          realice la investigación sobre su historial crediticio en los términos de lo previsto en las disposiciones legales aplicables
          celebra el presente Contrato a cuenta y nombre propio, y que el origen de los fondos que entregará al ACREDITANTE a través de
          las parcialidades para pagar el Importe Total del Crédito, procederán de su propiedad.
        </Parraf>
        <Parraf>
          Nombre y Firma del Cliente <Underline>{nombreCompleto}</Underline>
        </Parraf>
        <Parraf>
          <MayusUnderBold>VIGÉSIMO QUINTA. AVISO DE PRIVACIDAD.</MayusUnderBold> En cumplimiento con lo dispuesto en los artículos 15, 16, 17  y demás aplicables de la
          Ley Federal de Protección de Datos Personales en Posesión de los Particulares, el ACREDITADO manifiesta que el ACREDITANTE:
          (i) ha puesto a su disposición su aviso de privacidad, (ii) conoce y acepta el alcance de dicho aviso y la forma en que serán
          utilizados sus datos personales, y (iii) otorga, en este acto, su autorización expresa para que el ACREDITANTE maneje y
          disponga de sus datos personales en los términos establecidos en su aviso de privacidad y el presente Contrato.
        </Parraf>
        <Parraf>
          Para el caso que deseé limitar el uso o divulgación de su información personal, ejercitar sus derechos de acceder, rectificar
          y cancelar sus datos personales, así como de oponerse al tratamiento de los mismos y revocar el consentimiento que para tal
          fin nos haya otorgado, lo podrá realizar mediante notificación escrita con acuse de recibo al domicilio de EL ACREDITANTE,
          de acuerdo a lo establecido en el aviso de privacidad.
        </Parraf>
        <Parraf>
          <MayusUnderBold>VIGÉSIMO SEXTA. JURISDICCIÓN Y LEGISLACIÓN APLICABLE.</MayusUnderBold> Para la interpretación, cumplimiento y ejecución del presente Contrato,
          las Partes expresamente se someten a las leyes aplicables y a los tribunales competentes de la Ciudad de México, renunciando a
          cualquier otro fuero que les pudiera corresponder por motivo de sus domicilios actuales o futuros o por cualquier otra causa.
        </Parraf>
        <Parraf>
          <MayusUnderBold>VIGÉSIMO SÉPTIMA. RECONOCIMIENTO DE CONTENIDO.</MayusUnderBold> Las Partes manifiestan estar debidamente enteradas del contenido y alcance de
          todas y cada una de las disposiciones legales que se citan en el presente Contrato y desde luego de aquéllas a cuyos beneficios renuncian.
        </Parraf>
        <Parraf>
          <MayusUnderBold>VIGÉSIMO OCTAVA. BURÓ DE CRÉDITO.</MayusUnderBold> Conforme lo establece lo Artículo 23 Bis 1 de la Ley para la Transparencia y Ordenamiento
          de los Servicios Financieros, cualquier incumplimiento del ACREDITADO a las obligaciones de pago que a su cargo establece el
          Contrato, será registrado en el Buró de Crédito con claves de observación establecidas en los reportes de crédito respectivos,
          las cuales podrán afectar el historial crediticio del ACREDITADO.
        </Parraf>
        <Parraf>
          <MayusUnderBold>VIGÉSIMO NOVENA. MEDIOS ELECTRÓNICOS.</MayusUnderBold> En este acto, EL ACREDITADO autoriza a EL ACREDITANTE para que pueda enviar toda
          clase de avisos, notificaciones, modificaciones a este Contrato, promociones, publicidad, Estados de Cuenta e información
          adicional a través del correo electrónico, mensajes de texto y demás medios electrónicos, ópticos o de cualquier otra
          tecnología que por avances tecnológicos faciliten las comunicaciones con EL ACREDITADO.
        </Parraf>
        <Parraf>
          Las disposiciones del Código de Comercio relativas al comercio electrónico le serán aplicables a este Contrato, por
          lo que todos los documentos emitidos por EL ACREDITANTE a través de medios electrónicos acreditarán la creación,
          transmisión, modificación o extinción de derechos y obligaciones de las Partes y los saldos resultantes a cargo o a favor
          del propio ACREDITADO serán los que resulten de dichos documentos, los cuales, relacionados con el Estado de Cuenta
          certificado por Contador Público autorizado por EL ACREDITANTE, tendrán fuerza ejecutiva en juicio.
        </Parraf>
        <Parraf>
          <MayusUnderBold>TRIGÉSIMA. ESTADO DE CUENTA.</MayusUnderBold> El ACREDITADO instruye expresamente al ACREDITANTE para que éste ponga a su disposición
          su estado de cuenta a través de la página de internet o por algún otro medio electrónico que señale el ACREDITANTE.
        </Parraf>
        <Parraf>
          En el estado de cuenta se indicará, entre otros aspectos: (a) nombre del ACREDITADO; (b) número de Contrato; (c) las
          cantidades cargadas y abonadas; (d) el saldo insoluto del Crédito; (e) las fechas de pago; (f) los datos necesarios
          para realizar el cálculo de los intereses a pagar, así como (g) cualquier otro movimiento que se lleve a cabo con respecto al Crédito otorgado.
        </Parraf>
        <Parraf>
          En el supuesto que el ACREDITADO no solicite la expedición del estado de cuenta, no quedará por este hecho eximido
          de efectuar el pago del monto del Crédito y los intereses y comisiones señalados en el presente Contrato que se causen.
        </Parraf>
        <Parraf>
          <MayusUnderBold>TRIGÉSIMA PRIMERA. FIRMA ELECTRÓNICA.</MayusUnderBold> Las Partes acuerdan que en lugar de una firma original autógrafa, este Contrato,
          así como cualquier consentimiento, aprobación u otros documentos relacionados con el mismo, podrán ser firmados por
          medio del uso de firmas electrónicas, digitales, numéricas, alfanuméricas, huellas de voz, biométricas o de cualquier
          otra forma y que dichos medios alternativos de firma y los registros en donde sean aplicadas dichas firmas, serán
          consideradas para todos los efectos, incluyendo pero no limitado a la legislación civil, mercantil, protección al
          consumidor, de transparencia y a la NOM-151-SCFI-2016, con la misma fuerza y consecuencias que la firma autógrafa
          original física de la parte firmante. Si el presente Contrato o cualquier otro documento relacionado con el mismo
          es firmado por medios electrónicos o digitales, las PARTES acuerdan que los formatos del Contrato y los demás documentos
          firmados de tal modo serán conservados y estarán a disposición del ACREDITADO, por lo que convienen que cada una y toda
          la información enviada por el ACREDITANTE a la dirección de correo electrónico proporcionada por el ACREDITADO al momento
          de celebrar el presente Contrato será considerada como entregada en el momento en que la misma es enviada.
        </Parraf>
        <Parraf>
          Enteradas las Partes del contenido y alcance del presente Contrato, lo firman de conformidad, por triplicado,
          en la Ciudad de México, México, el día <Underline>{todayDate}</Underline> de <Underline>{monthDate}</Underline> del <Underline>{yearDate}</Underline>.
        </Parraf>
        <SignatureContainer />
      </Page>


      <Page orientation='landscape' size="A4" style={ui.page}>
        <ParrafBold>
          ANEXO “A” DEL CONTRATO DE APERTURA DE CRÉDITO (EL “<Underline>CONTRATO</Underline>”) QUE CELEBRARON EN ESTA FECHA, POR UNA PARTE,
          MUNBRUNN, S.A. DE C.V., A QUIEN EN LO SUCESIVO Y PARA LOS EFECTOS DEL PRESENTE ANEXO SE LE DENOMINARÁ COMO EL
          “<Underline>ACREDITANTE</Underline>”, Y POR OTRA PARTE, <Underline>{nombreCompleto}</Underline>, A QUIEN EN LO SUCESIVO Y PARA LOS EFECTOS DEL PRESENTE ANEXO SE LE DENOMINARÁ
          COMO EL “<Underline>ACREDITADO</Underline>”.
        </ParrafBold>
        <CenterTitle>SOLICITUD DE DISPOSICIÓN</CenterTitle>
        <Parraf>
          <MayusUnderBold>PRIMERA. PAGO DEL CRÉDITO.</MayusUnderBold> En cumplimiento a lo establecido en la Cláusula
          Tercera del Contrato, las Solicitudes de Disposición del Crédito deberán incluir lo siguiente:
        </Parraf>

        <Table type="landscape">
          <Row>
            <Cell x={23} y={0.8} bg="#ddd9c4"></Cell>
          </Row>
          <Row>
            <Cell x={11.5} y={2}><CellText bold size={9}>ACREDITADO: [*]</CellText></Cell>
            <Cell x={11.5} y={2} full><CellText bold size={9}>NÚMERO DE CONTRATO: [*]</CellText></Cell>
          </Row>
          <Row>
            <Column>
              <Cell x={5} y={1} centered><CellText bold size={9}>TASA DE INTERESES ORDINARIOS Anual:</CellText></Cell>
              <Row>
                <Cell x={2.5} y={1} centered><CellText bold size={9}>Mensual (...)</CellText></Cell>
                <Cell x={2.5} y={1} centered><CellText bold size={9}>Quincenal (*)</CellText></Cell>
              </Row>
            </Column>
            <Cell x={4} y={2} centered><CellText bold size={9}>TASA DE INTERÉS MORATORIO:</CellText></Cell>
            <Cell x={4} y={2} centered><CellText bold size={9}>MONTO DEL CRÉDITO:</CellText></Cell>
            <Cell x={10} y={2} centered full><CellText bold size={9}>MONTO TOTAL ADEUDADO A LA FECHA DE DISPOSICIÓN:</CellText></Cell>
          </Row>
          <Row>
            <Cell x={5} y={2}></Cell>
            <Cell x={4} y={2} centered><CellText size={9}>[*]%</CellText></Cell>
            <Cell x={4} y={2} centered><CellText size={9}>$[*].00 M.N.</CellText></Cell>
            <Cell x={10} y={2} centered full><CellText size={9}>$[En blanco].00 M.N.</CellText></Cell>
          </Row>
          <Row>
            <Cell x={5} y={1}><CellText bold>PLAZO DEL CRÉDITO:</CellText></Cell>
            <Cell x={18} y={1}><CellText>Fecha límite de pago: [*] de 20[*]</CellText></Cell>
          </Row>
          <Row>
            <Cell x={23} y={0.8} bg="#ddd9c4"></Cell>
          </Row>
          <Row>
            <Cell x={23} y={0.8} centered><CellText bold>DISPOSICIÓN</CellText></Cell>
          </Row>
          <Row>
            <Cell x={5} y={1}><CellText bold size={9}>MONTO POR DIPONER:</CellText></Cell>
            <Cell x={18} y={1}><CellText size={9}>$[*].00 M.N.</CellText></Cell>
          </Row>
          <Row>
            <Cell x={5} y={1}><CellText bold size={9}>FECHA DE DISPOSICIÓN</CellText></Cell>
            <Cell x={18} y={1}><CellText size={9}>[*] de [*]de 20[*]</CellText></Cell>
          </Row>
          <Row>
            <Cell x={5} y={1}><CellText bold size={9}>PERIOCIDAD DE PAGO:</CellText></Cell>
            <Cell x={9} y={1}><CellText bold size={9}>Mensual (...)</CellText></Cell>
            <Cell x={9} y={1}><CellText bold size={9}>Quincenal (*)</CellText></Cell>
          </Row>
        </Table>
        <View break></View>
        <Table type="landscape">
          <Row>
            <Cell x={23} y={0.8} bg="#ddd9c4"></Cell>
          </Row>
          <Row>
            <Cell x={23} y={0.8} centered><CellText bold>DESTINO:</CellText></Cell>
          </Row>
          <Row>
            <Cell x={3.28} y={3} bg="#d9d9d9"><CellText bold size={9}>Tipo de Procedimiento:</CellText></Cell>
            <Cell x={3.28} y={3} bg="#d9d9d9"><CellText bold size={9}>Paciente:</CellText></Cell>
            <Cell x={3.28} y={3} bg="#d9d9d9"><CellText bold size={9}>Fecha del Procedimiento:</CellText></Cell>
            <Cell x={3.28} y={3} bg="#d9d9d9"><CellText bold size={9}>Nombre o razón social del proveedor que realizará el Procedimiento:</CellText></Cell>
            <Cell x={3.28} y={3} bg="#d9d9d9"><CellText bold size={9}>Instrucción de pago a nombre de:</CellText></Cell>
            <Cell x={3.28} y={3} bg="#d9d9d9"><CellText bold size={9}>Clabe bancaria del proveedor:</CellText></Cell>
            <Cell x={3.28} y={3} bg="#d9d9d9"><CellText bold size={9}>Monto del Procedimiento:</CellText></Cell>
          </Row>
          <Row>
            <Cell x={3.28} y={4.8}><CellText bold size={9}>Tipo de Procedimiento:</CellText></Cell>
            <Column>
              <Cell x={3.28} y={1.2} centered={false}><CellText size={9}>Nombre:</CellText></Cell>
              <Cell x={3.28} y={1.2} centered={false}><CellText size={9}>Sexo:</CellText></Cell>
              <Cell x={3.28} y={1.2} centered={false}><CellText size={9}>Edad:</CellText></Cell>
              <Cell x={3.28} y={1.2} centered={false}><CellText size={9}>Relación con el Acreditado:</CellText></Cell>
            </Column>
            <Cell x={3.28} y={4.8}><CellText bold size={9}>[*]</CellText></Cell>
            <Cell x={3.28} y={4.8}><CellText bold size={9}>[*]</CellText></Cell>
            <Cell x={3.28} y={4.8}><CellText bold size={9}>[*]</CellText></Cell>
            <Cell x={3.28} y={4.8}><CellText bold size={9}>[*]</CellText></Cell>
            <Cell x={3.28} y={4.8}><CellText bold size={9}>[*]</CellText></Cell>
          </Row>
          <Row>
            <Cell x={23} y={0.8} bg="#ddd9c4"></Cell>
          </Row>
          <Row>
            <Cell x={23} y={0.8} centered><CellText bold>COMISIONES RELEVANTES</CellText></Cell>
          </Row>
          <Row>
            <Cell x={11.5} y={1} centered bg='#d9d9d9'><CellText bold size={9}>Comision por Apertura</CellText></Cell>
            <Cell x={11.5} y={1} centered bg='#d9d9d9'><CellText bold size={9}>Comision por gastos de Cobranza:</CellText></Cell>
          </Row>
          <Row>
            <Cell x={23} y={1.5} centered><CellText size={9}>0% sobre el monto del crédito</CellText></Cell>
            <Cell x={23} y={1.5} centered><CellText size={9}>$200.00 M.N. (Doscientos pesos 00/100 Moneda Nacional), más el Impuesto al Valor Agregado, por cada Amortización vencida.</CellText></Cell>
          </Row>
          <Row>
            <Cell x={23} y={0.8} bg="#ddd9c4"></Cell>
          </Row>

          <Row>
            <Cell x={23} y={0.8} centered><CellText bold>ADVERTENCIAS</CellText></Cell>
          </Row>
          <Row>
            <Cell x={23} y={2.5} centered>
              <CellText bold>Incumplir tus obligaciones te puede generar Comisiones e intereses moratorios. Contratar créditos que excedan tu capacidad de pago afecta tu historial crediticio. Cuide su capacidad de pago, generalmente no debe de exceder del 35% de sus ingresos periódicos, los costos por mora son muy elevados.
              </CellText>
            </Cell>
          </Row>
        </Table>
        <View break></View>
        <Table type="landscape">
          <Row>
            <Cell x={23} y={0.8} bg="#ddd9c4"></Cell>
          </Row>
          <Row>
            <Cell x={23} y={0.8} bg="#d9d9d9" centered>
              <CellText bold size={9}>TABLA DE AMORTIZACIÓN</CellText>
            </Cell>
          </Row>
          <Row>
            <Cell x={2} y={1.5} centered><CellText bold size={9}>No. Pago</CellText></Cell>
            <Cell x={2.625} y={1.5} centered><CellText bold size={9}>Fecha de pago</CellText></Cell>
            <Cell x={2.625} y={1.5} centered><CellText bold size={9}>Importe de Pagos Quincenales</CellText></Cell>
            <Cell x={2.625} y={1.5} centered><CellText bold size={9}>Pago inicial</CellText></Cell>
            <Cell x={2.625} y={1.5} centered><CellText bold size={9}>Capital</CellText></Cell>
            <Cell x={2.625} y={1.5} centered><CellText bold size={9}>Intereses ordinarios</CellText></Cell>
            <Cell x={2.625} y={1.5} centered><CellText bold size={9}>CAT</CellText></Cell>
            <Cell x={2.625} y={1.5} centered><CellText bold size={9}>I.V.A.</CellText></Cell>
            <Cell x={2.625} y={1.5} centered><CellText bold size={9}>Balance</CellText></Cell>
          </Row>
          <View style={{ display: 'flex', flexDirection: 'row', }}>
            <View style={{ width: '2cm', height: '0.5cm', border: '1px solid #000', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
              <Text style={{ color: "#000", fontFamily: "Helvetica", fontSize: "9px" }}>0</Text>
            </View>
            <View style={{ width: '2.625cm', height: '0.5cm', border: '1px solid #000', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}></View>
            <View style={{ width: '2.625cm', height: '0.5cm', border: '1px solid #000' }}></View>
            <View style={{ width: '2.625cm', height: '0.5cm', border: '1px solid #000', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
              <Text style={{ color: "#000", fontFamily: "Helvetica", fontSize: "9px" }}>{formatCurrency(payedAmount)}</Text>
            </View>
            <View style={{ width: '2.625cm', height: '0.5cm', border: '1px solid #000' }}></View>
            <View style={{ width: '2.625cm', height: '0.5cm', border: '1px solid #000' }}></View>
            <View style={{ width: '2.625cm', height: '0.5cm', border: '1px solid #000' }}></View>
            <View style={{ width: '2.625cm', height: '0.5cm', border: '1px solid #000' }}></View>
            <View style={{ width: '2.625cm', height: '0.5cm', border: '1px solid #000' }}></View>
          </View>
          {
            rows?.map((item, index) => {
              return (
                <View style={{ display: 'flex', flexDirection: 'row', }} key={index}>
                  <View style={{ width: '2cm', height: '0.5cm', border: '1px solid #000', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
                    <Text style={{ color: "#000", fontFamily: "Helvetica", fontSize: "9px" }}>{item[0]}</Text>
                  </View>
                  <View style={{ width: '2.625cm', height: '0.5cm', border: '1px solid #000', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
                    <Text style={{ color: "#000", fontFamily: "Helvetica", fontSize: "9px" }}></Text>
                  </View>
                  <View style={{ width: '2.625cm', height: '0.5cm', border: '1px solid #000', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
                    <Text style={{ color: "#000", fontFamily: "Helvetica", fontSize: "9px" }}>{formatCurrency(item[2])}</Text>
                  </View>
                  <View style={{ width: '2.625cm', height: '0.5cm', border: '1px solid #000', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
                    <Text style={{ color: "#000", fontFamily: "Helvetica", fontSize: "9px" }}>{formatCurrency(item[3])}</Text>
                  </View>
                  <View style={{ width: '2.625cm', height: '0.5cm', border: '1px solid #000', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
                    <Text style={{ color: "#000", fontFamily: "Helvetica", fontSize: "9px" }}>{formatCurrency(item[4])}</Text>
                  </View>
                  <View style={{ width: '2.625cm', height: '0.5cm', border: '1px solid #000', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
                    <Text style={{ color: "#000", fontFamily: "Helvetica", fontSize: "9px" }}>{formatCurrency(item[5])}</Text>
                  </View>
                  <View style={{ width: '2.625cm', height: '0.5cm', border: '1px solid #000', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
                    <Text style={{ color: "#000", fontFamily: "Helvetica", fontSize: "9px" }}>{formatCurrency(item[6])}</Text>
                  </View>
                  <View style={{ width: '2.625cm', height: '0.5cm', border: '1px solid #000', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
                    <Text style={{ color: "#000", fontFamily: "Helvetica", fontSize: "9px" }}>{formatCurrency(item[7])}</Text>
                  </View>
                  <View style={{ width: '2.625cm', height: '0.5cm', border: '1px solid #000', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
                    <Text style={{ color: "#000", fontFamily: "Helvetica", fontSize: "9px" }}>{formatCurrency(item[8])}</Text>
                  </View>
                </View>
              )
            }
            )
          }
          <Row>
            <Cell x={11.5} y={0.8} bg="#ddd9c4"><CellText bold size={9}>ESTADO DE CUENTA:</CellText></Cell>
            <Cell x={11.5} y={0.8} bg="#ddd9c4"><CellText bold size={9}>DUDAS, ACLARACIONES Y RECLAMACIONES</CellText></Cell>
          </Row>
          <Row>
            <Cell x={11.5} y={4} centered={false}>
              <CellText size={9}>Estado de cuenta con periodicidad:</CellText>
              <LineBreak />
              <Row>
                <Cell x={3} y={1.25} centered>
                  <Column textCenter>
                    <Text style={{ fontSize: '10px', fontFamily: 'Helvetica', textAlign: 'center' }}>Mensual</Text>
                    <Text style={{ fontSize: '10px', fontFamily: 'Helvetica', textAlign: 'center' }}>( )</Text>
                  </Column>
                </Cell>
                <Cell x={3} y={1.25} centered>
                  <Column textCenter>
                    <Text style={{ fontSize: '10px', fontFamily: 'Helvetica', textAlign: 'center' }}>Quincenal</Text>
                    <Text style={{ fontSize: '10px', fontFamily: 'Helvetica', textAlign: 'center' }}>(*)</Text>
                  </Column>
                </Cell>
              </Row>
              <LineBreak />
              <CellText size={9}>Consulta vía Internet: <Link>www.medsi.mx</Link></CellText>
              <LineBreak />
              <CellText size={9}>Consulta vía correo electrónico: <Link>contacto@medsi.mx</Link></CellText>
            </Cell>
            <Cell x={11.5} y={4} centered={false}>
              <CellText size={9}>Para cualquier duda, aclaración o reclamación, favor de dirigirse a:</CellText>
              <LineBreak />
              <CellText size={9}><Bold>Domicilio:</Bold> Emerson 316, Oficina 201, Piso 2, Colonia Polanco V Sección, Alcaldía Miguel Hidalgo, Ciudad de México, México C.P. 11570</CellText>
              <CellText size={9}><Bold>Teléfono:</Bold> 56 3181 5000</CellText>
              <CellText size={9}><Bold>Corréo electrónico:</Bold><Link> contacto@medsi.mx</Link></CellText>
              <CellText size={9}><Bold>Página de Internet:</Bold> <Link> www.medsi.mx</Link></CellText>
              <CellText size={9}><Bold>Ó en su caso a PROFECO:</Bold> Teléfono. 800 468 87 22. Página de Internet. <Link>www.profeco.gob.mx</Link></CellText>
            </Cell>
          </Row>
        </Table>

        <LineBreak />
        <Parraf>
          Enteradas las Partes del contenido y alcance del presente Anexo, lo firman de conformidad, por triplicado, en la Ciudad de México, México, el día <Underline>{todayDate}</Underline> de <Underline>{monthDate}</Underline> de <Underline>{yearDate}</Underline>.
        </Parraf>
        <SignatureContainer />
      </Page>
      <Page size="A4" style={ui.page}>
        <ParrafBold>
          ANEXO “B” DEL CONTRATO DE APERTURA DE CRÉDITO (EL “CONTRATO”)QUE CELEBRARON EN ESTA FECHA, POR UNA PARTE, MUNBRUNN, S.A. DE C.V., A QUIEN EN LO SUCESIVO Y
          PARA LOS EFECTOS DEL PRESENTE ANEXO SE LE DENOMINARÁ COMO EL “<Underline>ACREDITANTE</Underline>”, Y POR OTRA PARTE, <Underline> {nombreCompleto}</Underline>, A QUIEN EN LO SUCESIVO Y PARA LOS EFECTOS DEL PRESENTE
          ANEXO SE LE DENOMINARÁ COMO EL “<Underline>ACREDITADO</Underline>”.
        </ParrafBold>
        <CenterTitle>P A G A R É</CenterTitle>
        <Parraf>
          POR VALOR RECIBIDO, el Suscrito, (el “<Bold>Suscriptor</Bold>”), <Underline>{nombreCompleto}</Underline>, por medio de este PAGARÉ promete incondicionalmente pagar a la orden de <Bold>MUNBRUNN, S.A. DE C.V.</Bold> (el “<Bold>Acreedor</Bold>”),
          la cantidad principal de <Underline>{formatCurrency(payedAmount)}</Underline> (<Underline>{formatNumberToText(payedAmount)}</Underline> DE PESOS 00/100 M.N.), cuyo monto será pagado en cada una de las Fechas de Pago y en las cantidades establecidas a continuación,
          debiendo cubrir cualesquier saldo insoluto a más tardar en la Fecha de Vencimiento, conforme a la siguiente tabla de parcialidades:
        </Parraf>
        <Table type="portrait">
          <Row>
            <Cell x={2} y={1.54} centered><CellText size={9} bold>No. Pago</CellText></Cell>
            <Cell x={2.57} y={1.54} centered><CellText size={9} bold>Fecha de pago</CellText></Cell>
            <Cell x={2.57} y={1.54} centered><CellText size={9} bold>Importe de Pagos</CellText></Cell>
            <Cell x={2.57} y={1.54} centered><CellText size={9} bold>Capital</CellText></Cell>
            <Cell x={2.57} y={1.54} centered><CellText size={9} bold>Intereses ordinarios</CellText></Cell>
            <Cell x={2.57} y={1.54} centered><CellText size={9} bold>CAT</CellText></Cell>
            <Cell x={2.57} y={1.54} centered><CellText size={9} bold>I.V.A.</CellText></Cell>
            <Cell x={2.57} y={1.54} centered><CellText size={9} bold>Balance</CellText></Cell>
          </Row>
          {
            rows?.map((item, index) => {
              return (
                <View style={{ display: 'flex', flexDirection: 'row', }} key={index}>
                  <View style={{ width: '2cm', height: '0.5cm', border: '1px solid #000', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
                    <Text style={{ color: "#000", fontFamily: "Helvetica", fontSize: "9px" }}>{item[0]}</Text>
                  </View>
                  <View style={{ width: '2.57cm', height: '0.5cm', border: '1px solid #000', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
                    <Text style={{ color: "#000", fontFamily: "Helvetica", fontSize: "9px" }}></Text>
                  </View>
                  <View style={{ width: '2.57cm', height: '0.5cm', border: '1px solid #000', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
                    <Text style={{ color: "#000", fontFamily: "Helvetica", fontSize: "9px" }}>{formatCurrency(item[2])}</Text>
                  </View>
                  <View style={{ width: '2.57cm', height: '0.5cm', border: '1px solid #000', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
                    <Text style={{ color: "#000", fontFamily: "Helvetica", fontSize: "9px" }}>{formatCurrency(item[3])}</Text>
                  </View>
                  <View style={{ width: '2.57cm', height: '0.5cm', border: '1px solid #000', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
                    <Text style={{ color: "#000", fontFamily: "Helvetica", fontSize: "9px" }}>{formatCurrency(item[5])}</Text>
                  </View>
                  <View style={{ width: '2.57cm', height: '0.5cm', border: '1px solid #000', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
                    <Text style={{ color: "#000", fontFamily: "Helvetica", fontSize: "9px" }}>{formatCurrency(item[6])}</Text>
                  </View>
                  <View style={{ width: '2.57cm', height: '0.5cm', border: '1px solid #000', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
                    <Text style={{ color: "#000", fontFamily: "Helvetica", fontSize: "9px" }}>{formatCurrency(item[7])}</Text>
                  </View>
                  <View style={{ width: '2.57cm', height: '0.5cm', border: '1px solid #000', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
                    <Text style={{ color: "#000", fontFamily: "Helvetica", fontSize: "9px" }}>{formatCurrency(item[8])}</Text>
                  </View>
                </View>
              )
            }
            )
          }
        </Table>
        <LineBreak />
        <Parraf>
          El Suscriptor, asimismo, promete incondicionalmente pagar al Acreedor intereses ordinarios sobre el monto total de este PAGARÉ, en cada Fecha de Pago,
          por periodos vencidos, desde la fecha de suscripción del presente PAGARÉ, hasta la fecha en que dicho monto total sea pagado en su totalidad, a una tasa
          de interés anual igual a la Tasa Ordinaria, conforme a la tabla anterior. Los intereses serán pagaderos de forma vencida en cada Fecha de Pago, conforme al calendario anterior.
        </Parraf>
        <Parraf>
          El Suscriptor acepta y conviene irrevocablemente que la falta de cumplimiento de una o más de cualquiera de las parcialidades que ha prometido
          incondicionalmente pagar en este PAGARÉ en cada Fecha de Pago será causa de vencimiento anticipado de este Pagaré, facultando al Acreedor a ejercer
          todos los derechos que la ley confiere, desde el momento en que se llegara a presentar esa causa de incumplimiento, caso en el cual el Suscriptor
          deberá pagar todo el adeudo, incluyendo los accesorios correspondientes.
        </Parraf>
        <Parraf>
          Todos los pagos que deban hacerse conforme a este PAGARÉ deberán realizarse al tenor de este PAGARÉ a más tardar a las 14:00 (catorce) horas
          (hora de la Ciudad de México) en la fecha en que deban hacerse, mediante transferencia bancaria de fondos inmediatamente disponibles a la
          cuenta No. 0118858527, CLABE 012180001188585273 que el Acreedor mantiene abierta en Banco BBVA.
        </Parraf>
        <Parraf>
          El Acreedor se obliga que contra el pago de cada amortización, a realizar la anotación correspondiente en el cuerpo del presente PAGARÉ,
          sobre la cantidad pagada reduciéndose así el monto principal del presente PAGARÉ.
        </Parraf>
        <Parraf>
          Para todo lo relacionado con el PAGARÉ, el Suscriptor designa como su domicilio el siguiente: {[street, outside_no, inside_no, colony, cp, city, municipality, state].join(', ')}.
        </Parraf>
        <Parraf>
          Este PAGARÉ se regirá e interpretará conforme a las leyes aplicables en los Estados Unidos Mexicanos.
        </Parraf>
        <Parraf>
          Para cualquier demanda, acción o procedimiento que derive o se relacione con este PAGARÉ, el Suscriptor expresa e irrevocablemente se
          somete a la jurisdicción de los tribunales competentes en la Ciudad de México y en este acto renuncia expresa e irrevocablemente a
          cualquier otra jurisdicción a la que pudiera tener derecho por razón de su domicilio presente o futuro, o por razón del lugar de pago
          de este PAGARÉ o por cualquier otro motivo.
        </Parraf>
        <Parraf>
          El Suscriptor en este acto dispensa al tenedor del presente PAGARÉ de realizar previamente cualquier diligencia, demanda, protesto,
          presentación, notificación de no aceptación y notificación o demanda alguna de cualquier naturaleza, para obtener el pago del presente
          PAGARÉ a lo cual el Suscriptor en este acto renuncia irrevocablemente, de forma expresa.
        </Parraf>
        <Parraf>
          Ningún ejercicio parcial o individual de cualquier derecho, facultad o privilegio conforme a este PAGARÉ impide o limita cualquier
          otro o futuro ejercicio de dichos derechos, facultades o privilegios o el ejercicio de cualquier otro derecho, facultad o privilegio conforme a este PAGARÉ.
        </Parraf>
        <Parraf>
          El Suscriptor extiende el plazo para la presentación para pago de este PAGARÉ hasta 1 (un) año después de la última Fecha de Pago
          conforme a la tabla anterior, en los términos del artículo 128 de la Ley General de Títulos y Operaciones de Crédito.
        </Parraf>
        <Parraf>
          Este PAGARÉ consta de <Underline>13</Underline> páginas, las cuales constituyen un solo documento y se suscribe en la Ciudad de México, el <Underline>{todayDate}</Underline> de <Underline>{monthDate}</Underline> del <Underline>{yearDate}</Underline>.
        </Parraf>

        <View style={{ margin: '0 auto' }}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <View style={{ width: '6cm', textAlign: 'center' }}>
              <Text style={ui.center}>EL ACREDITADO</Text>
            </View>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', maxWidth: '12cm' }}>
            <View style={{ borderBottom: '1px solid #000', width: '5.5cm', height: "2.5cm", margin: '0 auto' }}></View>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', maxWidth: '12cm' }}>
            <View style={{ width: '5.5cm', display: 'block', margin: '0 auto' }}>
              <Text style={{ ...ui.parraf, textAlign: 'center' }}>{nombreCompleto}</Text>
            </View>
          </View>
        </View>

      </Page>
    </Document >
  )
}