import { Page, Text, View, Document, StyleSheet, Image, } from '@react-pdf/renderer';
import { formatCurrency, formatNumberToText, getDayMonthAndAnio } from '../../../../../utils/formats';

export default function ContractFile({ 
  user, 
  paymentInfo, 
  paymentsList 
}) {

  const { dia, mes, anio } = getDayMonthAndAnio()



  const firstFourPayments = paymentsList.slice(0, 4)
  const {
    biWeeklyAmount: weekly,
  } = paymentInfo;
  

  const styles = StyleSheet.create({
    page: {
      padding: "1cm 2cm"
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    },
    h1: {
      fontFamily: 'Times-Bold',
      fontSize: '10px',
      fontStyle: 'normal',
      color: '#000'
    },
    number: {
      fontFamily: 'Times-Bold',
      fontSize: '10px',
      fontStyle: 'normal',
      color: '#000'
    },
    center: {
      fontFamily: 'Times-Bold',
      fontSize: '10px',
      fontStyle: 'normal',
      color: '#000',
      textAlign: 'center',
      marginTop: '10px',
      marginBottom: '10px'
    },
    underline: {
      textDecoration: 'underline'
    },
    lineBreak: {
      marginBottom: '10px'
    },
    parraf: {
      textAlign: 'justify',
      fontWeight: '400',
      fontFamily: 'Times-Roman',
      fontSize: '10px',
      fontStyle: 'normal'
    },
    subNumber: {
      fontFamily: 'Times-Bold',
      fontSize: '10px',
      fontStyle: 'normal',
      color: '#000',
      display: 'block',
    },
    bold: {
      fontFamily: 'Times-Bold'
    },
    table: {
      border: '1px solid red',
      width: '50%',
      height: '4cm',
      margin: '0 auto',
      display: 'block'
    },
    sign: {
      border: '1px solid red',
      width: '50%',
      height: '4cm',
      margin: '0 auto',
      display: 'block'
    },
    upper: {
      textTransform: 'uppercase'
    }


  });

  const { page, h1, underline, center, lineBreak, parraf, number, subNumber, bold, sign, table, upper } = styles;

  const Underline = ({ children }) => <Text style={underline}>{children}</Text>
  const H1 = ({ children }) => <Text style={h1}>{children}</Text>
  const Center = ({ children }) => <Text style={center}>{children}</Text>
  const LineBreak = () => <View style={lineBreak}></View>
  const RomanOne = ({ children }) => <Text style={parraf}><Text style={number}>I. </Text>{children}</Text>
  const RomanTwo = ({ children }) => <Text style={parraf}><Text style={number}>II. </Text>{children}</Text>
  const RomanThree = ({ children }) => <Text style={parraf}><Text style={number}>III. </Text>{children}</Text>
  const One = ({ children }) => <Text style={parraf}><Text style={number}>1. </Text>{children}<LineBreak /></Text>
  const Two = ({ children }) => <Text style={parraf}><Text style={number}>2. </Text>{children}<LineBreak /></Text>
  const Three = ({ children }) => <Text style={parraf}><Text style={number}>3. </Text>{children}<LineBreak /></Text>
  const SubOne = ({ children }) => <Text style={{ ...parraf, marginTop: '5px', paddingLeft: '16px' }}><Text style={subNumber}>1. </Text>{children}</Text>
  const SubTwo = ({ children }) => <Text style={{ ...parraf, marginTop: '5px', paddingLeft: '16px' }}><Text style={subNumber}>2. </Text>{children}</Text>
  const SubThree = ({ children }) => <Text style={{ ...parraf, marginTop: '5px', paddingLeft: '16px' }}><Text style={subNumber}>3. </Text>{children}</Text>
  const Bold = ({ children }) => <Text style={bold}>{children}</Text>
  const UpperBold = ({ children }) => <Text style={{ ...bold, upper }}>{children}</Text>

  const Parraf = ({ children }) => {
    return (
      <>
        <Text style={parraf}>{children}</Text>
        <LineBreak />
      </>

    )
  }

  const TableAmountPayments = () => {

    const thead = {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: 'rgb(217, 217, 217)',
      border: '1px solid #000'
    }

    const trow = {
      display: 'flex',
      flexDirection: 'row',
      borderBottom: '1px solid #000',
      borderRight: '1px solid #000',
    }

    const tcell = {
      width: '4cm',
      padding: '2px'
    };

    const tcellfirst = {
      width: '4cm',
      padding: '2px',
      borderLeft: '1px solid #000',
      borderRight: '1px solid #000',
    };

    const tcelllast = {
      width: '4cm',
      padding: '2px',
    }

    const td = {
      ...parraf,
      textAlign: 'center'
    }

    return (
      <View style={{ margin: '0 auto' }}>
        <View style={thead}>
          <View style={tcell}><Text style={td}>Monto</Text></View>
          <View style={tcell}><Text style={td}>Fecha</Text></View>
        </View>
        {
          firstFourPayments.length > 0 && (
            firstFourPayments.map(item => (
            <View style={trow} key={item.id}>
              <View style={tcellfirst}><Text style={td}>{formatCurrency(item.monto)}</Text></View>
              <View style={tcelllast}><Text style={td}>{item.fecha_pago}</Text></View>
            </View>
            ))
          )
        }
      </View>
    )
  }

  const {
    first_name,
    last_name,
    maternal_name,
    rfc,
    curp,
    email,
    city,
    colony,
    municipality,
    outside_no,
    inside_no,
    state,
    cp,
    street
  } = user;

  const address = [street, inside_no, outside_no, colony, cp, city, municipality, state,].join(', ');




  const EmailAdressContainer = () => {
    return (
      <View style={{ margin: '0 auto' }}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <View style={{ width: '6cm', textAlign: 'center' }}><Text style={center}>Depositario</Text></View>
          <View style={{ width: '6cm', textAlign: 'center' }}><Text style={center}>Depositante</Text></View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', padding: '2px 8px' }}>
          <View style={{ display: 'flex', flexFlow: 'row wrap', width: '6cm', maxWidth: '6cm' }}><Text style={subNumber}>Domicilio: </Text><Text style={parraf}>Emerson 316, Piso 2, Oficina 202, Colonia Polanco V Sección, Alcaldía Miguel Hidalgo, C.P. 11560, Ciudad de México.</Text></View>
          <View style={{ display: 'flex', flexFlow: 'row wrap', width: '6cm', maxWidth: '6cm', marginLeft: '10px' }}><Text style={subNumber}>Domicilio: </Text><Text style={parraf}>{address}</Text></View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', padding: '2px 8px' }}>
          <View style={{ display: 'flex', flexFlow: 'row wrap', width: '6cm', maxWidth: '6cm' }}><Text style={subNumber}>Correo electrónico: </Text><Text style={parraf}>contacto@medsi.mx</Text></View>
          <View style={{ display: 'flex', flexFlow: 'row wrap', width: '6cm', maxWidth: '6cm', marginLeft: '10px' }}><Text style={subNumber}>Correo electrónico: </Text><Text style={parraf}>{email}</Text></View>
        </View>
      </View>
    )
  }

  const SignatureContainer = () => {
    return (
      <View style={{ margin: '0 auto' }}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <View style={{ width: '6cm', textAlign: 'center' }}><Text style={center}>EL DEPOSITANTE</Text></View>
          <View style={{ width: '6cm', textAlign: 'center' }}><Text style={center}>EL DEPOSITARIO</Text></View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', maxWidth: '12cm' }}>
          <View style={{ borderBottom: '1px solid #000', width: '5.5cm', margin: '0 auto' }}></View>
          <View style={{ borderBottom: '1px solid #000', width: '5.5cm', margin: '0 auto' }}>
             <Image
                source={{
                  uri: "https://tanda-ahorro.s3.us-west-2.amazonaws.com/FirmaPepeCabrerajpg.jpg",
                  headers: { Pragma: 'no-cache', 'Cache-Control': 'no-cache' },
                }}
              />
          </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', maxWidth: '12cm' }}>
          <View style={{ width: '5.5cm', display: 'block', margin: '0 auto' }}></View>
          <View style={{ width: '5.5cm', display: 'block', margin: '0 auto' }}>
            <Text style={{ ...subNumber, textAlign: 'center', marginTop: '4px' }}>MUNBRUNN, S.A. DE C.V.</Text>
            <Text style={{ ...parraf, textAlign: 'center' }}>representada por el señor</Text>
            <Text style={{ ...parraf, textAlign: 'center' }}>JOSÉ MAGDALENO CABRERA GONZÁLEZ</Text>
          </View>
        </View>
      </View>
    )
  }

  return (
    <Document>
      <Page size="A4" style={page}>
        <H1>CONTRATO DE DEPÓSITO (EL “<Underline>CONTRATO</Underline>”) QUE CELEBRAN, POR UNA PARTE, EL SEÑOR <UpperBold><Underline>{[first_name.toUpperCase(), last_name.toUpperCase(), maternal_name.toUpperCase()].join(' ')}</Underline></UpperBold>,
          POR SU PROPIO DERECHO, A QUIEN EN LO SUCESIVO SE LE DENOMINARÁ COMO EL “<Underline>DEPOSITANTE</Underline>”,
          Y POR LA OTRA PARTE, LA SOCIEDAD DENOMINADA MUNBRUNN, S.A. DE C.V., REPRESENTADA EN ESTE ACTO
          POR EL SEÑOR <UpperBold><Underline>JORGE MAGDALENO CABRERA GONZÁLEZ</Underline></UpperBold>, A QUIEN EN LO SUCESIVO SE LE DENOMINARÁ COMO EL “<Underline>DEPOSITARIO</Underline>” Y CONJUNTAMENTE
          CON EL DEPOSITANTE, LAS “<Underline>PARTES</Underline>”, AL TENOR DE LOS SIGUIENTES ANTECEDENTES, DECLARACIONES Y CLÁUSULAS.
        </H1>
        <View>
          <Center>ANTECEDENTES</Center>
          <RomanOne>
            Con esta misma fecha, el Depositante celebró cierto Contrato de Apertura de Crédito en calidad de acreditado
            con el Depositario como acreditante, mediante el cual, el Depositario otorga un crédito en cuenta corriente
            por la cantidad de {formatCurrency((weekly*4))} M.N. ({formatNumberToText((weekly*4))} pesos 00/100, Moneda Nacional) (en lo sucesivo, el “Contrato de Crédito”).
          </RomanOne>
          <LineBreak />
          <RomanTwo> Todos los derechos y obligaciones de las Partes establecidos en el Contrato de Crédito, se encuentran sujetos a la condición suspensiva de que el Depositante cumpla con las obligaciones derivadas del presente Contrato de Depósito. </RomanTwo>
        </View>
        <View>
          <Center> DECLARACIONES </Center>
          <View>
            <RomanOne> Declara el <Bold>Depositante</Bold>, por su propio derecho, que: </RomanOne>
            <SubOne> Es una persona física, mayor de edad, de nacionalidad mexicana, con capacidad legal suficiente para celebrar el presente Contrato. </SubOne>
            <SubTwo> Se encuentra registrado como contribuyente ante la Secretaría de Hacienda y Crédito Público, con la Clave de Registro Federal de Contribuyentes <Bold><Underline>{rfc}</Underline></Bold> y se identifica con la clave única de contribuyente <Bold><Underline>{curp}</Underline></Bold>  . </SubTwo>
            <SubThree> Es su voluntad otorgar en Depósito al Depositario las cantidades en numerario a que se refiere la Cláusula Primera del presente Contrato. </SubThree>
          </View>
          <LineBreak />
          <View>
            <RomanTwo>Declara el <Bold>Depositario</Bold>, por conducto de su representante legal, que:</RomanTwo>
            <SubOne> Es una persona moral, debidamente constituida y existente de acuerdo con la legislación de la República Mexicana, según consta en la Escritura Pública número 45,988, de fecha 1 de septiembre de 2014, otorgada ante la fe del Licenciado Alfredo Ruíz del Río Prieto, Notario Público número 141 de la Ciudad de México, debidamente inscrita en el Registro Público de la Propiedad y del Comercio de dicha entidad en el folio mercantil electrónico número 524662-1. </SubOne>
            <SubTwo> Cuenta con las facultades suficientes y necesarias para obligar a su representada, según consta en la Escritura Pública descrita en el numeral anterior, mismas que a la fecha no le han sido revocadas o modificadas en forma alguna. </SubTwo>
            <SubThree> Es su deseo recibir en Depósito del Depositante las cantidades en numerario a que se refiere la Cláusula Primera del presente Contrato. </SubThree>
          </View>
          <LineBreak />
          <View>
            <RomanThree><Bold>Declaran ambas Partes, que: </Bold></RomanThree>
            <SubOne>En la firma del presente Contrato no existió violencia, dolo, lesión, mala fe o cualquier otro vicio del consentimiento. </SubOne>
            <SubTwo>Comparecen a la celebración del presente Contrato de común acuerdo y se sujetan a las disposiciones contenidas en las siguientes:</SubTwo>
          </View>
        </View>
        <View>
          <Center>CLÁUSULAS</Center>
          <Text style={parraf}>Las Partes acuerdan que el Depositante deberá entregar la Cantidad en Depósito en las fechas y cantidades siguientes: </Text>
          <Text style={parraf}><Bold>Primera. Objeto. </Bold>Mediante el presente Contrato, el Depositante se obliga a entregar al Depositario, en calidad de Depósito, la cantidad total de {formatCurrency((weekly*4))} M.N. ({formatNumberToText(weekly*4)} pesos 00/100 Moneda Nacional) (la “Cantidad en Depósito”). A su vez, el Depositario se obliga a la custodia y conservación de la Cantidad en Depósito.</Text>
          <LineBreak />
          <Text style={parraf}>Las Partes acuerdan que el Depositante deberá entregar la Cantidad en Depósito en las fechas y cantidades siguientes: </Text>
          <LineBreak />


          <TableAmountPayments />


          <LineBreak />
          <Text style={parraf}>El Depositante deberá entregar todas las cantidades que integren la Cantidad en Depósito mediante transferencia bancaria de fondos inmediatamente disponibles a la cuenta No. 0118858527, CLABE 012180001188585273 que el Depositario mantiene abierta en Banco BBVA .</Text>
          <LineBreak />
          <Text style={parraf}><Bold>Segunda. Contraprestación. </Bold>Ambas Partes convienen que el Depósito, objeto del presente Contrato, será a título gratuito, por lo que el Depositario no obtendrá remuneración alguna en el desempeño de su cargo.</Text>
          <LineBreak />
          <Text style={parraf}>Sin embargo, convienen que en caso de que el Depositante no cumpla con su obligación de depositar la Cantidad en Depósito en las cantidades y fechas establecidas en la Cláusula anterior y, por consecuencia no se cumpla con la condición suspensiva establecida en el Contrato de Crédito, el Depositario devolverá al Depositante las cantidades efectivamente entregadas en depósito descontando el 3.9% (tres punto nueve por ciento) de dichas cantidades, que el Depositario tomará para cubrir los gastos de administración, guarda y custodia de las cantidades depositadas.</Text>
          <LineBreak />
          <Text style={parraf}><Bold>Tercera. Guarda y custodia. </Bold>El Depositario se obliga a guardar, conservar y administrar la cantidad entregada en Depósito.</Text>
          <Parraf>Sin embargo, de acuerdo con el Contrato de Crédito a que se refiere el Antecedente I del presente Contrato, y con fundamento en el Artículo 338 del Código de Comercio, las Partes convienen que en la fecha en la que el Depositante liquide en su totalidad la Cantidad en Depósito, de acuerdo con el Contrato de Crédito, el Depositario deberá liberar la Cantidad en Depósito, con la finalidad de pagar parte de los intereses del crédito anticipadamente.</Parraf>
          <Parraf>Una vez entregada íntegramente la Cantidad en Depósito, el Depositario quedará liberado de la obligación de guarda y custodia de la Cantidad en Depósito, por lo que el Depositante le otorga el finiquito más amplio que en derecho proceda por la liberación de la Cantidad en Depósito de conformidad con lo establecido en el párrafo anterior.</Parraf>
          <Parraf style={parraf}><Bold>Cuarta. Obligaciones del Depositario. </Bold>Con la firma del presente Contrato, el Depositario se obliga a: </Parraf>
          <One><Parraf>Guardar, conservar y administrar las cantidades entregadas en Depósito, y que se encuentra descrita en la Cláusula Primera anterior.</Parraf></One>
          <LineBreak />
          <Two><Parraf>Una vez entregada íntegramente la Cantidad en Depósito por parte del Depositante, liberar dicha cantidad para el pago anticipado de los intereses devengados de conformidad con lo establecido en el Contrato de Crédito.</Parraf></Two>
          <LineBreak />
          <Three><Parraf>En caso de que el Depositante no entregue en tiempo y forma las cantidades establecidas en la Cláusula Primera del presente Contrato, dar por terminado el presente Contrato y el Contrato de Crédito y devolver las cantidades entregadas en depósito al Depositante, restando el porcentaje establecido en el segundo párrafo de la Cláusula Segunda del presente.</Parraf></Three>
          <LineBreak />
          <Parraf><Bold>Quinta. Vigencia. </Bold>El presente Contrato estará vigente desde el momento de su firma hasta el momento en que el Depositario (i) aplique la Cantidad en Depósito al pago anticipado de intereses de conformidad con lo establecido en el Contrato de Crédito; o (ii) devuelva las cantidades entregadas por el Depositario, de conformidad con lo establecido en los numerales 2 y 3 de la Cláusula Cuarta anterior, respectivamente.</Parraf>
          <Parraf><Bold>Sexta. Causas de Terminación. </Bold>El presente Contrato se dará por terminado por cualquiera de las siguientes causas: (i) por haberse cumplido el plazo o vigencia establecido en la Cláusula Quinta; y (ii) por acuerdo escrito entre las Partes.</Parraf>
          <Parraf><Bold>Séptima. Rescisión. </Bold>Procederá la rescisión del presente Contrato por incumplimiento de cualquiera de las obligaciones pactadas. En caso de que el Depositante incumpla con las aportaciones señaladas en la Cláusula Primera del presente Contrato, de acuerdo con lo pactado entre las Partes, se dará por terminado el presente Contrato y el Contrato de Crédito.</Parraf>
          <Parraf><Bold>Octava. Avisos y Notificaciones. </Bold>Todos los avisos y notificaciones entre las Partes deberán realizarse por escrito y ser entregados ya sea (i) personalmente, (ii) por correo certificado con acuse de recibo, porte pagado, o (iii) vía correo electrónico, a los domicilios y correos electrónicos, a no ser que las Partes notifiquen su cambio de domicilio o correo electrónico en los términos de esta cláusula:</Parraf>


          <EmailAdressContainer />


        </View>
        <View>
          <LineBreak />
          <Parraf>Los avisos y notificaciones entre las Partes se considerarán efectivamente recibidos por su destinatario, (i) si se entregan personalmente, al momento de dicha entrega, (ii) si se envían por correo certificado, en la fecha que el acuse de recibo señale, y (iii) si se transmiten por vía correo electrónico, en la misma fecha en que sean enviados, siempre y cuando el remitente cuente con un comprobante de que la transmisión se efectuó correctamente.</Parraf>
          <Parraf>En caso de cambio de domicilio de alguna de las Partes, la parte que vaya a realizar dicho cambio deberá dar aviso de ello por escrito a las otras dentro de los 5 (cinco) días hábiles anteriores a la fecha en que se vaya a efectuar el cambio; en caso contrario, las notificaciones hechas al domicilio señalado en esta fecha surtirán plenos efectos legales entre las Partes.</Parraf>
          <Parraf><Bold>Novena. Vicios del Consentimiento. </Bold>Las Partes manifiestan que en la celebración del presente no existe dolo, error, mala fe, violencia física o moral o cualquier otro vicio del consentimiento que pudiese afectar la eficacia del presente Contrato.</Parraf>
          <Parraf><Bold>Décima. Jurisdicción y Legislación aplicable. </Bold>Para la solución de los conflictos que pudieren derivarse del presente Contrato, las Partes aceptan someterse a las leyes vigentes en la República Mexicana y a la jurisdicción de los Tribunales competentes en la Ciudad de México, renunciado expresamente al fuero que por razón de sus domicilios, presentes o futuros, o por cualquier otro que por cualquier causa pudieren corresponderles.</Parraf>
          <Parraf>En virtud de lo anterior, las Partes firman el presente Contrato en 2 (dos) ejemplares, cada uno de los cuales se considera un original y en su conjunto el mismo Contrato, en la Ciudad de México, el día {dia} de {mes} del año 20{anio}</Parraf>
        </View>
        <SignatureContainer />
        {/* <Text style={{ paddingTop: "4pt", paddingLeft: "10pt", textIndent: "0pt", textAlign: "justify" }}><span class="h1">CONTRATO DE
          DEPÓSITO (EL “</span><span class="s1">CONTRATO</span><span class="h1">”) QUE CELEBRAN, POR UNA PARTE, EL
            SEÑOR [</span><span class="s2" style={{ backgroundColor: "#FF0" }}>*</span><span class="h1">], POR SU PROPIO
              DERECHO, A QUIEN EN LO SUCESIVO SE LE DENOMINARÁ COMO EL “</span><span class="s1">DEPOSITANTE</span><span
                class="h1">”, Y POR LA OTRA PARTE, LA SOCIEDAD DENOMINADA MUNBRUNN, S.A. DE C.V., REPRESENTADA EN ESTE ACTO
            POR EL SEÑOR [</span><span class="s2" style={{ backgroundColor: "#FF0" }}>*</span><span class="h1">], A QUIEN
              EN LO SUCESIVO SE LE DENOMINARÁ COMO EL “</span><span class="s1">DEPOSITARIO</span><span class="h1">” Y
                CONJUNTAMENTE CON EL DEPOSITANTE, LAS “</span><span class="s1">PARTES</span><span class="h1">”, AL TENOR DE
                  LOS SIGUIENTES ANTECEDENTES, DECLARACIONES Y CLÁUSULAS.</span>
        </Text> */}
        {/* <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
      <h1 style={{ textIndent: "0pt", textAlign: "center" }}>ANTECEDENTES</h1>
      <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
      <ol id="l1">
        <li data-list-text="I.">
          <p style={{ paddingLeft: "39pt", textIndent: "-28pt", textAlign: "justify" }}><span class="p">Con esta misma fecha,
            el Depositante celebró cierto Contrato de Apertura de Crédito en calidad de acreditado con el
            Depositario como acreditante, mediante el cual, el Depositario otorga un crédito en cuenta corriente
            por la cantidad de $[</span><span class="s3" style={{ backgroundColor: "#FF0" }}>*</span><span class="p">].00
              M.N. ([</span><span class="s3" style={{ backgroundColor: "#FF0" }}>*</span><span class="p">] pesos 00/100, Moneda
                Nacional) (en lo sucesivo, el “Contrato de Crédito”).</span></p>
          <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
        </li>
        <li data-list-text="II.">
          <p style={{ paddingLeft: "39pt", textIndent: "-28pt", textAlign: "justify" }}>Todos los derechos y obligaciones de
            las Partes establecidos en el Contrato de Crédito, se encuentran sujetos a la condición suspensiva de
            que el Depositante cumpla con las obligaciones derivadas del presente Contrato de Depósito.</p>
        </li>
      </ol>
      <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
      <h1 style={{ textIndent: "0pt", textAlign: "center" }}>DECLARACIONES</h1>
      <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
      <ol id="l2">
        <li data-list-text="I.">
          <p style={{ paddingLeft: "39pt", textIndent: "-28pt", textAlign: "left" }}>Declara el <b>Depositante</b>, por su
            propio derecho, que:</p>
          <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
          <ol id="l3">
            <li data-list-text="1.">
              <p style={{ paddingLeft: "67pt", textIndent: "-28pt", textAlign: "justify" }}>Es una persona física, mayor
                de edad, de nacionalidad mexicana, con capacidad legal suficiente para celebrar el presente
                Contrato.</p>
              <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
            </li>
            <li data-list-text="2.">
              <p style={{ paddingLeft: "67pt", textIndent: "-28pt", textAlign: "justify" }}><span class="p">Se encuentra
                registrado como contribuyente ante la Secretaría de Hacienda y Crédito Público, con la Clave
                de Registro Federal de Contribuyentes [</span><span class="s3"
                  style={{ backgroundColor: "#FF0" }}>*</span><span class="p">] y se identifica con la credencial
                    para votar número [</span><span class="s3" style={{ backgroundColor: "#FF0" }}>*</span><span class="p">],
                      expedida por el Instituto Nacional Electoral.</span></p>
              <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
            </li>
            <li data-list-text="3.">
              <p style={{ paddingLeft: "67pt", textIndent: "-28pt", textAlign: "justify" }}>Es su voluntad otorgar en
                Depósito al Depositario las cantidades en numerario a que se refiere la Cláusula Primera del
                presente Contrato.</p>
              <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
            </li>
          </ol>
        </li>
        <li data-list-text="II.">
          <p style={{ paddingLeft: "39pt", textIndent: "-28pt", textAlign: "left" }}>Declara el <b>Depositario</b>, por
            conducto de su representante legal, que:</p>
          <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
          <ol id="l4">
            <li data-list-text="1.">
              <p style={{ paddingLeft: "67pt", textIndent: "-28pt", textAlign: "justify" }}>Es una persona moral,
                debidamente constituida y existente de acuerdo con la legislación de la República Mexicana,
                según consta en la Escritura Pública número 45,988, de fecha 1 de septiembre de 2014, otorgada
                ante la fe del Licenciado Alfredo Ruíz del Río Prieto, Notario Público número 141 de la Ciudad
                de México, debidamente inscrita en el Registro Público de la Propiedad y del Comercio de dicha
                entidad en el folio mercantil electrónico número 524662-1.</p>
              <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
            </li>
            <li data-list-text="2.">
              <p style={{ paddingTop: "4pt", paddingLeft: "67pt", textIndent: "-28pt", textAlign: "justify" }}><span class="p">Cuenta
                con las facultades suficientes y necesarias para obligar a su representada,
              </span><span class="s3" style={{ backgroundColor: "#FF0" }}>según</span><span class="p">
                </span><span class="s3" style={{ backgroundColor: "#FF0" }}>consta en la Escritura Pública descrita
                  en el numeral anterior</span><span class="p">, mismas que a la fecha no le han sido
                    revocadas o modificadas en forma alguna.</span></p>
            </li>
            <li data-list-text="3.">
              <p style={{ paddingTop: "4pt", paddingLeft: "67pt", textIndent: "-28pt", textAlign: "left" }}>Es su deseo
                recibir en Depósito del Depositante las cantidades en numerario a que se refiere la Cláusula
                Primera del presente Contrato.</p>
              <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
            </li>
          </ol>
        </li>
        <li data-list-text="III.">
          <h1 style={{ paddingLeft: "39pt", textIndent: "-28pt", textAlign: "left" }}>Declaran ambas Partes, que:</h1>
          <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
          <ol id="l5">
            <li data-list-text="1.">
              <p style={{ paddingLeft: '67pt', textIndent: '-28pt', textAlign: 'left' }}>En la firma del presente Contrato
                no existió violencia, dolo, lesión, mala fe o cualquier otro vicio del consentimiento.</p>
              <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
            </li>
            <li data-list-text="2.">
              <p style={{ paddingLeft: '67pt', textIndent: '-28pt', textAlign: 'left' }}>Comparecen a la celebración del
                presente Contrato de común acuerdo y se sujetan a las disposiciones contenidas en las
                siguientes:</p>
            </li>
          </ol>
        </li>
      </ol>
      <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
      <h1 style={{ textIndent: "0pt", textAlign: "center" }}>CLÁUSULAS</h1>
      <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
      <p style={{ paddingLeft: '10pt', textIndent: '0pt', textAlign: 'justify' }}><span class="h1">Primera. Objeto. </span><span
        class="p">Mediante el presente Contrato, el Depositante se obliga a entregar al Depositario, en calidad de
        Depósito, la cantidad total de $[</span><span class="s3" style={{ backgroundColor: "#FF0" }}>*</span><span
          class="p">].00 M.N. ([</span><span class="s3" style={{ backgroundColor: "#FF0" }}>*</span><span class="p">]
            pesos 00/100 Moneda Nacional) (la “Cantidad en Depósito”). A su vez, el Depositario se obliga a la custodia
            y conservación de la Cantidad en Depósito.</span></p>
      <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
      <p style={{ paddingLeft: '10pt', textIndent: '0pt', textAlign: 'justify' }}>Las Partes acuerdan que el Depositante deberá
        entregar la Cantidad en Depósito en las fechas y cantidades siguientes:</p>
      <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
      <table style={{ borderCollapse: 'collapse', margin: '0 auto' }} cellspacing="0">
        <tr style={{ height: '17pt' }}>
          <td
            style={{ width: '235pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', backgroundColor: "#D9D9D9" }}>
            <p class="s4"
              style={{ paddingTop: '2pt', paddingLeft: '87pt', paddingRight: '86pt', textIndent: '0pt', textAlign: 'center', }}>
              Fecha</p>
          </td>
          <td
            style={{ width: '235pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt', backgroundColor: "#D9D9D9" }}>
            <p class="s4"
              style={{ paddingTop: '2pt', paddingLeft: '87pt', paddingRight: '86pt', textIndent: '0pt', textAlign: 'center', }}>
              Monto</p>
          </td>
        </tr>
        <tr style={{ height: '17pt' }}>
          <td
            style={{ width: '235pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt' }}>
            <p style={{ paddingTop: '2pt', paddingLeft: '87pt', paddingRight: '86pt', textIndent: '0pt', textAlign: 'center', }}>
              <span class="5">[</span><span class="s6" style={{ backgroundColor: "#FF0" }}>*</span><span class="5">]</span>
            </p>
          </td>
          <td
            style={{ width: '235pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt' }}>
            <p style={{ paddingTop: '2pt', paddingLeft: '87pt', paddingRight: '86pt', textIndent: '0pt', textAlign: 'center', }}>
              <span class="5">$[</span><span class="s6" style={{ backgroundColor: "#FF0" }}>*</span><span class="5">].00
                M.N.</span>
            </p>
          </td>
        </tr>
        <tr style={{ height: '18pt' }}>
          <td
            style={{ width: '235pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt' }}>
            <p style={{ paddingTop: '2pt', paddingLeft: '87pt', paddingRight: '86pt', textIndent: '0pt', textAlign: 'center', }}>
              <span class="5">[</span><span class="s6" style={{ backgroundColor: "#FF0" }}>*</span><span class="5">]</span>
            </p>
          </td>
          <td
            style={{ width: '235pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt' }}>
            <p style={{ paddingTop: '2pt', paddingLeft: '87pt', paddingRight: '86pt', textIndent: '0pt', textAlign: 'center', }}>
              <span class="5">$[</span><span class="s6" style={{ backgroundColor: "#FF0" }}>*</span><span class="5">].00
                M.N.</span>
            </p>
          </td>
        </tr>
        <tr style={{ height: '17pt' }}>
          <td
            style={{ width: '235pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt' }}>
            <p style={{ paddingTop: '2pt', paddingLeft: '87pt', paddingRight: '86pt', textIndent: '0pt', textAlign: 'center', }}>
              <span class="5">[</span><span class="s6" style={{ backgroundColor: "#FF0" }}>*</span><span class="5">]</span>
            </p>
          </td>
          <td
            style={{ width: '235pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt' }}>
            <p style={{ paddingTop: '2pt', paddingLeft: '87pt', paddingRight: '86pt', textIndent: '0pt', textAlign: 'center', }}>
              <span class="5">$[</span><span class="s6" style={{ backgroundColor: "#FF0" }}>*</span><span class="5">].00
                M.N.</span>
            </p>
          </td>
        </tr>
        <tr style={{ height: '17pt' }}>
          <td
            style={{ width: '235pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt' }}>
            <p style={{ paddingTop: '2pt', paddingLeft: '87pt', paddingRight: '86pt', textIndent: '0pt', textAlign: 'center', }}>
              <span class="5">[</span><span class="s6" style={{ backgroundColor: "#FF0" }}>*</span><span class="5">]</span>
            </p>
          </td>
          <td
            style={{ width: '235pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt' }}>
            <p style={{ paddingTop: '2pt', paddingLeft: '87pt', paddingRight: '86pt', textIndent: '0pt', textAlign: 'center', }}>
              <span class="5">$[</span><span class="s6" style={{ backgroundColor: "#FF0" }}>*</span><span class="5">].00
                M.N.</span>
            </p>
          </td>
        </tr>
        <tr style={{ height: '17pt' }}>
          <td
            style={{ width: '235pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt' }}>
            <p class="s4" style={{ paddingTop: '2pt', paddingRight: '4pt', textIndent: '0pt', textAlign: 'right', }}>Total:</p>
          </td>
          <td
            style={{ width: '235pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt' }}>
            <p style={{ paddingTop: '2pt', paddingLeft: '87pt', paddingRight: '86pt', textIndent: '0pt', textAlign: 'center', }}>
              <span class="s4">$[</span><span class="s7" style={{ backgroundColor: "#FF0" }}>*</span><span class="s4">].00
                M.N.</span>
            </p>
          </td>
        </tr>
      </table >
      <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
      <p style={{ paddingLeft: '10pt', textIndent: '0pt', textAlign: 'justify' }}><span class="p">El Depositante deberá entregar
        todas las cantidades que integren la Cantidad en Depósito mediante transferencia bancaria de fondos
        inmediatamente disponibles a la cuenta No. [</span><span class="s3" style={{ backgroundColor: "#FF0" }}>*</span><span
          class="p">], CLABE [</span><span class="s3" style={{ backgroundColor: "#FF0" }}>*</span><span class="p">] que el
            Depositario mantiene abierta en Banco
            [</span><span class="s3" style={{ backgroundColor: "#FF0" }}>*</span><span class="p">].</span></p>
      <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
      <h1 style={{ paddingLeft: '10pt', textIndent: '0pt', textAlign: 'justify' }}>Segunda. Contraprestación. <span class="p">Ambas
        Partes convienen que el Depósito, objeto del presente Contrato, será a título gratuito, por
        lo que el Depositario no obtendrá remuneración alguna en el desempeño de su cargo.</span></h1>
      <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
      <p style={{ paddingLeft: '10pt', textIndent: '0pt', textAlign: 'justify' }}><span class="p">Sin embargo, convienen que en
        caso de que el Depositante no cumpla con su obligación de depositar la Cantidad en Depósito en las
        cantidades y fechas establecidas en la Cláusula anterior y, por consecuencia no se cumpla con la condición
        suspensiva establecida en el Contrato de Crédito, el Depositario devolverá al Depositante las cantidades
        efectivamente entregadas en depósito descontando el [</span><span class="s3"
          style={{ backgroundColor: "#FF0" }}>*</span><span class="p">]% ([</span><span class="s3"
            style={{ backgroundColor: "#FF0" }}>*</span><span class="p">] por ciento) de dichas cantidades, que el
              Depositario tomará para cubrir los gastos de administración, guarda y custodia de las cantidades
              depositadas.</span></p>
      <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
      <h1 style={{ paddingLeft: '10pt', textIndent: '0pt', textAlign: 'justify' }}>Tercera. Guarda y custodia. <span class="p">El
        Depositario se obliga a guardar, conservar y administrar la cantidad entregada en Depósito.</span></h1>
      <p style={{ paddingTop: '4pt', paddingLeft: '10pt', textIndent: '0pt', textAlign: 'justify' }}>Sin embargo, de acuerdo con el
        Contrato de Crédito a que se refiere el Antecedente I del presente Contrato, y con fundamento en el Artículo 338
        del Código de Comercio, las Partes convienen que en la fecha en la que el Depositante liquide en su totalidad la
        Cantidad en Depósito, de acuerdo con el Contrato de Crédito, el Depositario deberá liberar la Cantidad en
        Depósito, con la finalidad de pagar parte de los intereses del crédito anticipadamente.</p>
      <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
      <p style={{ paddingLeft: '10pt', textIndent: '0pt', textAlign: 'justify' }}>Una vez entregada íntegramente la Cantidad en
        Depósito, el Depositario quedará liberado de la obligación de guarda y custodia de la Cantidad en Depósito, por
        lo que el Depositante le otorga el finiquito más amplio que en derecho proceda por la liberación de la Cantidad
        en Depósito de conformidad con lo establecido en el párrafo anterior.</p>
      <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
      <h1 style={{ paddingLeft: '10pt', textIndent: '0pt', textAlign: 'justify' }}>Cuarta. Obligaciones del Depositario. <span
        class="p">Con la firma del presente Contrato, el Depositario se obliga a:</span></h1>
      <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
      <ol id="l6">
        <li data-list-text="1.">
          <p style={{ paddingLeft: "39pt", textIndent: "-28pt", textAlign: "justify" }}>Guardar, conservar y administrar las
            cantidades entregadas en Depósito, y que se encuentra descrita en la Cláusula Primera anterior.</p>
          <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
        </li>
        <li data-list-text="2.">
          <p style={{ paddingLeft: "39pt", textIndent: "-28pt", textAlign: "justify" }}>Una vez entregada íntegramente la
            Cantidad en Depósito por parte del Depositante, liberar dicha cantidad para el pago anticipado de los
            intereses devengados de conformidad con lo establecido en el Contrato de Crédito.</p>
          <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
        </li>
        <li data-list-text="3.">
          <p style={{ paddingLeft: "39pt", textIndent: "-28pt", textAlign: "justify" }}>En caso de que el Depositante no
            entregue en tiempo y forma las cantidades establecidas en la Cláusula Primera del presente Contrato, dar
            por terminado el presente Contrato y el Contrato de Crédito y devolver las cantidades entregadas en
            depósito al Depositante, restando el porcentaje establecido en el segundo párrafo de la Cláusula Segunda
            del presente.</p>
        </li>
      </ol>
      <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
      <h1 style={{ paddingLeft: '10pt', textIndent: '0pt', textAlign: 'justify' }}>Quinta. Vigencia. <span class="p">El presente
        Contrato estará vigente desde el momento de su firma hasta el momento en que el Depositario (i) aplique la
        Cantidad en Depósito al pago anticipado de intereses de conformidad con lo establecido en el Contrato de
        Crédito; o (ii) devuelva las cantidades entregadas por el Depositario, de conformidad con lo establecido en
        los numerales 2 y 3 de la Cláusula Cuarta anterior, respectivamente.</span></h1>
      <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
      <h1 style={{ paddingLeft: '10pt', textIndent: '0pt', textAlign: 'justify' }}>Sexta. Causas de Terminación. <span class="p">El
        presente Contrato se dará por terminado por cualquiera de las siguientes causas: (i) por
        haberse cumplido el plazo o vigencia establecido en la Cláusula Quinta; y (ii) por acuerdo escrito entre las
        Partes.</span></h1>
      <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
      <h1 style={{ paddingLeft: '10pt', textIndent: '0pt', textAlign: 'justify' }}>Séptima. Rescisión. <span class="p">Procederá
        la rescisión del presente Contrato por incumplimiento de cualquiera de las obligaciones pactadas. En caso de
        que el Depositante incumpla con las aportaciones señaladas en la Cláusula Primera del presente Contrato, de
        acuerdo con lo pactado entre las Partes, se dará por terminado el presente Contrato y el Contrato de
        Crédito.</span></h1>
      <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
      <h1 style={{ paddingLeft: '10pt', textIndent: '0pt', textAlign: 'justify' }}>Octava. Avisos y Notificaciones. <span
        class="p">Todos los avisos y notificaciones entre las Partes deberán realizarse por escrito y ser entregados
        ya sea (i) personalmente, (ii) por correo certificado con acuse de recibo, porte pagado, o (iii) vía correo
        electrónico, a los domicilios y correos electrónicos, a no ser que las Partes notifiquen su cambio de
        domicilio o correo electrónico en los términos de esta cláusula:</span></h1>
      <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
      <table style={{ borderCollapse: 'collapse', margin: '0 auto' }} cellspacing="0">
        <tr style={{ height: '63pt' }}>
          <td style={{ width: '238pt' }}>
            <p class="s4" style={{ paddingLeft: '78pt', textIndent: '0pt', lineHeight: '12pt', textAlign: 'left' }}>
              DEPOSITARIO</p>
            <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
            <p style={{ paddingLeft: '2pt', paddingRight: '5pt', textIndent: '0pt', lineheight: '13pt', textAlign: 'justify' }}>
              <span class="s4">Domicilio</span><span class="5">: </span><span class="s6"
                style={{ backgroundColor: "#FF0" }}>Emerson 316, Piso 2, Oficina 202,</span><span class="5">
              </span><span class="s6" style={{ backgroundColor: "#FF0" }}>Colonia Polanco V Sección, Alcaldía
                Miguel</span><span class="5"> </span><span class="s6" style={{ backgroundColor: "#FF0" }}>Hidalgo,
                  C.P. 11560, Ciudad de México</span><span class="5">.</span>
            </p>
          </td>
          <td style={{ width: "162pt" }}>
            <p class="s4" style={{ paddingLeft: '80pt', textIndent: '0pt', lineHeight: '12pt', textAlign: 'left' }}>
              DEPOSITANTE</p>
            <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
            <p style={{ paddingLeft: '5pt', textIndent: '0pt', textAlign: 'left' }}><span class="s4">Domicilio</span><span
              class="5">: [</span><span class="s6" style={{ backgroundColor: "#FF0" }}>*</span><span class="5">].</span>
            </p>
            <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
            <p style={{ paddingLeft: '5pt', textIndent: '0pt', lineHeight: '12pt', textAlign: 'left' }}><span class="s4">Correo
              electrónico</span><span class="5">: [</span><span class="s6" style={{ backgroundColor: "#FF0" }}>*</span><span
                class="5">]</span></p>
          </td>
        </tr>
      </table>
      <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
      <p style={{ textIndent: "0pt", textAlign: "left" }} />
      <h1 style={{ paddingTop: '4pt', paddingLeft: '10pt', textIndent: '0pt', textAlign: 'justify' }}>Correo electrónico<span
        class="p">: [*]</span></h1>
      <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
      <p style={{ paddingTop: '10pt', paddingLeft: '10pt', textIndent: '0pt', textAlign: 'justify' }}>Los avisos y notificaciones
        entre las Partes se considerarán efectivamente recibidos por su destinatario, (i) si se entregan personalmente,
        al momento de dicha entrega, (ii) si se envían por correo certificado, en la fecha que el acuse de recibo
        señale, y (iii) si se transmiten por vía correo electrónico, en la misma fecha en que sean enviados, siempre y
        cuando el remitente cuente con un comprobante de que la transmisión se efectuó correctamente.</p>
      <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
      <p style={{ paddingLeft: '10pt', textIndent: '0pt', textAlign: 'justify' }}>En caso de cambio de domicilio de alguna de las
        Partes, la parte que vaya a realizar dicho cambio deberá dar aviso de ello por escrito a las otras dentro de los
        5 (cinco) días hábiles anteriores a la fecha en que se vaya a efectuar el cambio; en caso contrario, las
        notificaciones hechas al domicilio señalado en esta fecha surtirán plenos efectos legales entre las Partes.</p>
      <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
      <h1 style={{ paddingLeft: '10pt', textIndent: '0pt', textAlign: 'justify' }}>Novena. Vicios del Consentimiento. <span
        class="p">Las Partes manifiestan que en la celebración del presente no existe dolo, error, mala fe,
        violencia física o moral o cualquier otro vicio del consentimiento que pudiese afectar la eficacia del
        presente Contrato.</span></h1>
      <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
      <h1 style={{ paddingLeft: '10pt', textIndent: '0pt', textAlign: 'justify' }}>Décima. Jurisdicción y Legislación aplicable.
        <span class="p">Para la solución de los conflictos que pudieren derivarse del presente Contrato, las Partes
          aceptan someterse a las leyes vigentes en la República Mexicana y a la jurisdicción de los Tribunales
          competentes en la Ciudad de México, renunciado expresamente al fuero que por razón de sus domicilios,
          presentes o futuros, o por cualquier otro que por cualquier causa pudieren corresponderles.</span>
      </h1>
      <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
      <p style={{ textIndent: "0pt", textAlign: "left" }} />
      <p style={{ textIndent: "0pt", textAlign: "left" }} />
      <p style={{ textIndent: "0pt", textAlign: "left" }} />
      <p style={{ textIndent: "0pt", textAlign: "left" }} />
      <p style={{ textIndent: "0pt", textAlign: "left" }} />
      <p style={{ paddingLeft: '10pt', textIndent: '0pt', textAlign: 'justify' }}>En virtud de lo anterior, las Partes firman el
        presente Contrato en 2 (dos) ejemplares, cada uno de los cuales se considera un original y en su conjunto el
        mismo Contrato, en la Ciudad de México, el día [*] de [*] del año 20[*].</p>
      <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
      <table style={{ borderCollapse: 'collapse', margin: '0 auto' }} cellspacing="0">
        <tr style={{ height: "81pt" }}>
          <td style={{ width: '207pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', }}>
            <p class="s4"
              style={{ paddingLeft: '54pt', paddingRight: '54pt', textIndent: '0pt', lineHeight: '12pt', textAlign: 'center', }}>
              EL DEPOSITANTE</p>
          </td>
          <td style={{ width: "43pt" }}>
            <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
          </td>
          <td style={{ width: '207pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', }}>
            <p class="s4" style={{ paddingLeft: '56pt', textIndent: '0pt', lineHeight: '12pt', textAlign: 'left' }}>EL
              DEPOSITARIO</p>
          </td>
        </tr>
        <tr style={{ height: "38pt" }}>
          <td style={{ width: '207pt', borderTopStyle: 'solid', borderTopWidth: '1pt', }}>
            <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
            <p class="s5" style={{ paddingLeft: '54pt', paddingRight: '54pt', textIndent: '0pt', textAlign: 'center', }}>[*]
            </p>
          </td>
          <td style={{ width: "43pt" }}>
            <p style={{ textIndent: "0pt", textAlign: "left" }}><br /></p>
          </td>
          <td style={{ width: '207pt', borderTopStyle: 'solid', borderTopWidth: '1pt', }}>
            <p class="s4"
              style={{ paddingLeft: '34pt', paddingRight: '34pt', textIndent: '0pt', lineHeight: '12pt', textAlign: 'center', }}>
              MUNBRUNN, S.A. DE C.V.<span class="5">,</span></p>
            <p class="s5"
              style={{ paddingLeft: '34pt', paddingRight: '34pt', textIndent: '0pt', lineheight: '13pt', textAlign: 'center', }}>
              representada por el señor</p>
            <p class="s5"
              style={{ paddingLeft: '34pt', paddingRight: '34pt', textIndent: '0pt', lineHeight: '12pt', textAlign: 'center', }}>
              [*]</p>
          </td>
        </tr>
      </table> */}
      </Page>
    </Document>
  )
}