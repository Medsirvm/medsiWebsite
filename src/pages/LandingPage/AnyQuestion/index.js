import { Box, Typography } from "@mui/material";
import React from "react";
import interrogante from "../../../assets/images/Interrogante.png";
import Questions from "./Question";
import ui from "./index.module.css";
import { useNavigate } from "react-router-dom";
import { PUBLIC_ROUTES } from "../../../constants/routesConstants";
import { FONTS } from "../../../constants/fontsConstants";

const AnyQuestion = (props) => {
  const { size } = props;

  const DescriptionComoFunciona = () => (
    <Box>
      <Typography sx={{ fontFamily: FONTS.URBANISTREGULAR, fontSize: 16 }}>
        TandaAhorro es una solución exclusiva que te permite ahorrar un poquito
        y a las pocas semanas tener acceso a los tratamientos o procedimientos
        que necesitas. Con TandaAhorro, te brindamos la flexibilidad para que tú
        decidas el monto de tu crédito y elijas el médico o clínica con quien te
        quieres tratar.
      </Typography>{" "}
      <br />
      <Typography sx={{ fontFamily: FONTS.URBANISTREGULAR, fontSize: 16 }}>
        ¡Usar TandaAhorro es muy fácil! Primero, tú decides cuánto dinero puedes
        ahorrar cada quincena y tu TandaAhorro inicia automáticamente cuando
        realizas tu primer depósito. En el momento que has depositado 4
        parcialidades, Medsi te presta 10 veces el monto de tu pago quincenal
        para recibir cualquier tratamiento médico o estético. Medsi le paga
        directamente al médico o clínica de tu preferencia. Una vez que has
        recibido tu tratamiento, continúas pagando el mismo monto quincenal
        durante 8 quincenas más para liquidar tu crédito. ¡Es así de fácil!
      </Typography>
      <br />
      <Typography sx={{ fontFamily: FONTS.URBANISTREGULAR, fontSize: 16 }}>
        Por ejemplo, si tú decides que puedes ahorrar $800 pesos cada dos
        semanas, Medsi te presta $8,000 para pagar cualquier tratamiento o
        procedimiento una vez que hiciste tus 4 depósitos quincenales.
      </Typography>
    </Box>
  );
  const DescriptionParaQuienEs = () => (
    <Box>
      <Typography sx={{ fontFamily: FONTS.URBANISTREGULAR, fontSize: 16 }}>
        ¿Nunca has tenido un crédito y no tienes historial? ¿No tienes ingresos
        fijos? ¿Tu score de Buró de Crédito es bajo o arrastras algunos adeudos
        pasados? ¡TandaAhorro es la solución para ti! Para obtener tu
        TandaAhorro, Medsi no te pide comprobantes de nómina, estados de cuenta
        bancarios y no tienes que contar con una tarjeta de crédito o débito.
      </Typography>{" "}
      <br />
      <Typography sx={{ fontFamily: FONTS.URBANISTREGULAR, fontSize: 16 }}>
        TandaAhorro te permite comenzar a construir o reparar tu historial de
        crédito. Haciendo oportunamente tus 4 depósitos quincenales, puedes
        obtener un crédito por 10 veces el monto de tu pago quincenal.
      </Typography>
    </Box>
  );
  const DescriptionParaObtener = () => (
    <Typography sx={{ fontFamily: FONTS.URBANISTREGULAR, fontSize: 16 }}>
      Ingresa al portal de Medsi en{" "}
      <a href="https://www.medsi.mx/login" target="_blank" rel="noreferrer">
        https://www.medsi.mx/login
      </a>{" "}
      y elige el monto que quieras ahorrar quincenalmente. Deberás completar tu
      proceso de validación de identidad subiendo una foto de tu identificación
      y grabando un video selfie, y firmar tu contrato de crédito. Al momento de
      realiza tu primer depósito, ¡quedará automáticamente activada tu
      TandaAhorro!
    </Typography>
  );

  const DescriptionComprobantes = () => (
    <Box>
      <Typography sx={{ fontFamily: FONTS.URBANISTREGULAR, fontSize: 16 }}>
        Para obtener tu TandaAhorro, Medsi no te pide comprobantes de nómina,
        estados de cuenta bancarios y no tienes que contar con una tarjeta de
        crédito o débito. También puedes obtener tu TandaAhorro aún si tus
        ingresos son variables
      </Typography>
      <br />
      <Typography sx={{ fontFamily: FONTS.URBANISTREGULAR, fontSize: 16 }}>
        Conseguir tu crédito está completamente en tus manos: si tú eres formal
        y puntual para realizar tus depósitos quincenales, Medsi te presta hasta
        10 veces el monto de tu pago quincenal. Tu comportamiento de pagos será
        reportado al Buró de Crédito, así que si has cumplido con todos tus
        pagos oportunamente, esto te permitirá construir un historial de crédito
        favorable que te beneficiará hacia adelante.
      </Typography>
      <br />
    </Box>
  );

  const DescriptionDistinto = () => (
    <Box>
      <Typography sx={{ fontFamily: FONTS.URBANISTREGULAR, fontSize: 16 }}>
        Una “tanda” es una forma muy común de ahorrar poco a poco para conseguir
        las cosas que deseas. Habitualmente, se reúne un grupo de personas y
        todos aportan la misma cantidad mensual o quincenalmente, y se sortea el
        orden en el que cada participante se va haciendo acreedor al bien.
      </Typography>
      <br />
      <Typography sx={{ fontFamily: FONTS.URBANISTREGULAR, fontSize: 16 }}>
        Con TandaAhorro, no hay necesidad de reunir a un grupo de acreditados y
        sabes exactamente cuándo podrás disponer de tu crédito. Medsi le paga
        directamente a tu médico o clínica una vez que has hecho 4 aportaciones
        quincenales. Así, puedes pagar el tratamiento que necesitas antes de
        haber juntado todo el dinero para pagarlo.
      </Typography>
    </Box>
  );
  const DescriptionTipoProc = () => (
    <Box>
      <Typography sx={{ fontFamily: FONTS.URBANISTREGULAR, fontSize: 16 }}>
        Medsi te permite pagar casi cualquier procedimiento o tratamiento médico
        o estético. Algunas de las especialidades médicas más frecuentes entre
        los pacientes Medsi incluyen: maternidad, odontología (ortodoncia,
        endodoncia, prótesis y estética dental, etc), dermatología, ortopedia,
        oftalmología, medicina deportiva, cirugía plástica y estética,
        diabetología, etc.
      </Typography>
      <br />
      <Typography sx={{ fontFamily: FONTS.URBANISTREGULAR, fontSize: 16 }}>
        Consulta nuestra página{" "}
        <a
          href="https://www.medsi.mx/procedure-type"
          target="_blank"
          rel="noreferrer"
        >
          (https://www.medsi.mx/procedure-type)
        </a>{" "}
        para conocer más de nuestras especialidades médicas y de los
        tratamientos y procedimientos que puedes pagar con tu crédito Medsi.
      </Typography>
    </Box>
  );
  const DescriptionHastaCuanto = () => (
    <Box>
      <Typography sx={{ fontFamily: FONTS.URBANISTREGULAR, fontSize: 16 }}>
        TandaAhorro te permite decidir el monto del crédito que recibes de
        Medsi, hasta por $50,000 pesos. Tú eliges el monto que puedes ahorrar de
        manera quincenal y nosotros te prestamos 10 veces esa cantidad.
      </Typography>
      <br />
      <Typography sx={{ fontFamily: FONTS.URBANISTREGULAR, fontSize: 16 }}>
        ara recibir tu crédito con TandaAhorro, tendrás que realizar cuatro
        depósitos quincenales por el monto elegido antes de contar con el
        crédito. Así, si hoy realizaras tu primer abono a tu TandaAhorro, y
        pagaras puntualmente los siguientes 3 depósitos quincenales restantes,
        podrás obtener tu préstamo en 6 semanas a partir de la presente fecha.
      </Typography>
    </Box>
  );
  const DescriptionTratamiento = () => (
    <Box>
      <Typography sx={{ fontFamily: FONTS.URBANISTREGULAR, fontSize: 16 }}>
        ¡Tú eliges con quien quieres tratarte! Con Medsi no estás limitado a una
        red cerrada de doctores, y puedes acudir con el médico de tu
        preferencia, siempre que cumpla con los criterios necesarios para poder
        operar en nuestra plataforma.
      </Typography>
      <br />
      <Typography sx={{ fontFamily: FONTS.URBANISTREGULAR, fontSize: 16 }}>
        Si tu médico aún no forma parte de nuestra red, ¡invítalo! Al momento de
        completar tu solicitud de desembolso, te pediremos nos proporciones
        también la información de contacto de tu médico (correo electrónico y
        teléfono de consultorio). En las siguientes 24 horas, nosotros nos
        pondremos en contacto con el consultorio para validar sus credenciales
        médicas y, si cumple con los criterios necesarios, recibirás el correo
        electrónico y mensaje de confirmación para que puedas ir adelante con tu
        procedimiento.
      </Typography>
    </Box>
  );

  const DescriptionNoAprovado = () => (
    <Box>
      <Typography sx={{ fontFamily: FONTS.URBANISTREGULAR, fontSize: 16 }}>
        Si tú ya has hecho tus 4 aportaciones quincenales y tu TandaAhorro está
        lista para su disposición, necesitarás proporcionarnos la información
        del médico o clínica (correo electrónico y teléfono de consultorio) con
        quien quieres recibir tu tratamiento o cirugía. En las siguientes 24
        horas, nosotros nos pondremos en contacto con el consultorio para
        validar sus credenciales médicas. Por tu seguridad, Medsi siempre se
        asegura de que las acreditaciones del médico seleccionado corresponden
        al procedimiento que te quieres realizar.
      </Typography>
      <br />
      <Typography sx={{ fontFamily: FONTS.URBANISTREGULAR, fontSize: 16 }}>
        En aquellos casos cuando no nos es posible realizar esta validación o si
        hay evidencia de fraude, te invitaremos a elegir otro médico o clínica.
        Nuestra plataforma de Concierge Médico se pondrá en contacto contigo y
        podrá brindarte recomendaciones de profesionales capacitados y
        verificados cerca de ti y apoyarte en todo tu proceso de selección. En
        caso de que no encontraras un médico o clínica a tu entera satisfacción,
        Medsi te reembolsará la totalidad de las aportaciones que hayas
        realizado hasta esa fecha (neto de gastos de administración).
      </Typography>
    </Box>
  );
  const DescriptionPlazo = () => (
    <Typography sx={{ fontFamily: FONTS.URBANISTREGULAR, fontSize: 16 }}>
      El producto de TandaAhorro tiene un plazo estándar de 6 meses: <br />
      i) en los primeros dos meses, tú realizas las 4 aportaciones quincenales
      para acerté acreedor al crédito; <br />
      ii) durante los siguientes cuatro meses, realizarás 8 pagos quincenales
      más, por el mismo importe, para repagar tu préstamo.
    </Typography>
  );

  const questionsArray = [
    {
      id: 1,
      question: "¿Qué es una Tanda?",
      description:
        "Una “tanda” es una forma muy común de ahorrar poco a poco para conseguir las cosas que deseas.  Con frecuencia puedes lograr adquirir aquello que necesitas aún antes de haber ahorrado todo el monto para pagarlo.",
    },
    {
      id: 2,
      question: "¿Cómo funciona TandaAhorro?",
      description: <DescriptionComoFunciona />,
    },
    {
      id: 3,
      question: "¿Para quién es TandaAhorro?",
      description: <DescriptionParaQuienEs />,
    },
    {
      id: 4,
      question: "¿Qué tengo que hacer para obtener mi TandaAhorro?",
      description: <DescriptionParaObtener />,
    },
    {
      id: 5,
      question: "¿En qué es distinto TandaAhorro de las “tandas” que conozco?",
      description: <DescriptionDistinto />,
    },
    {
      id: 6,
      question: "¿Qué monto tengo que aportar quincenalmente?",
      description:
        "Tú lo decides.  TandaAhorro te permite hacer aportaciones quincenales desde $500 y hasta $5,000, para que puedas obtener un crédito por un total de hasta $50,000 pesos",
    },
    {
      id: 7,
      question:
        "¿Puedo obtener mi crédito TandaAhorro si no cuento con tarjeta de crédito, comprobantes de nómina, etc?",
      description: <DescriptionComprobantes />,
    },
    {
      id: 8,
      question: "¿Qué tipo de procedimientos puedo financiar?",
      description: <DescriptionTipoProc />,
    },
    {
      id: 9,
      question:
        "¿Solamente puedo financiar tratamientos para mi? ¿Puedo financiar procedimientos para otros miembros de mi familia? ",
      description:
        "Medsi te brinda la flexibilidad de utilizar tu crédito TandaAhorro para poder pagar el tratamiento de cualquier miembro de tu familia o persona cercana (pareja, etc).  A la hora de completar tu Solicitud de Desembolso, solamente tendrás que indicar quién será el paciente que recibirá el tratamiento, para que podamos validar la información con el médico o clínica que has señalado. ",
    },
    {
      id: 10,
      question:
        "¿Hasta cuánto me pueden prestar? ¿Cuándo puedo disponer del dinero?",
      description: <DescriptionHastaCuanto />,
    },
    {
      id: 11,
      question:
        "¿Qué pasa si cambio de opinión del procedimiento, o si no quiero / puedo seguir haciendo mis aportaciones quincenales?",
      description:
        "Ante cualquier cambio en tu situación personal o familiar antes del desembolso, o si simplemente decides no ir adelante con el tratamiento que tenías previsto, Medsi te devuelve todas las aportaciones que hayas realizado hasta ese momento.  El monto de las aportaciones te será reembolsado a través del mismo medio de pago utilizado, menos una penalización por gastos de administración del [8%]",
    },
    {
      id: 12,
      question:
        "¿Mi dinero está seguro? ¿Cómo puedo estar seguro de que me devolverán mi dinero en caso de que decido no recibir algún tratamiento médico?",
      description:
        "Medsi es una institución financiera establecida y, tanto la compañía como sus accionistas, tienen una larga y destacada trayectoria en la industria.  Las aportaciones individuales a TandaAhorro nunca son utilizadas para prestarse a otras personas, y se mantienen segregadas en una cuenta individual a nombre del acreditado hasta el momento de la dispersión del crédito.  Tu dinero se encuentra resguardado y listo para su devolución en caso de que decidas no ir adelante con tu crédito o con tu tratamiento.",
    },
    {
      id: 13,
      question:
        "¿Cómo puedo realizar mis depósitos quincenales? ¿Dónde puedo hacer mis pagos? ",
      description:
        "Tres días antes de la fecha de tu próximo pago, recibirás un correo electrónico y un mensaje por WhatsApp con un recordatorio y con una liga para realizarlo.  Usando esa liga, puedes realizar tu pago con una transferencia vía SPEI, con una tarjeta de crédito o débito, o en efectivo en tiendas de conveniencia o sucursales bancarias. Asimismo, desde la página principal o desde el App, podrás ingresar a tu Tablero de Control, donde tienes acceso a tus estados de cuenta, relación de pagos realizados y pagos futuros, etc.  Desde allí puedes realizar pagos también por cualquiera de los medios antes mencionados.",
    },
    {
      id: 14,
      question:
        "¿Puedo tratarme con cualquier médico de mi preferencia? ¿Qué información necesitan para aprobar mi tratamiento con un médico que no es aún parte de la red de Medsi? ",
      description: <DescriptionTratamiento />,
    },
    {
      id: 15,
      question:
        "¿Qué pasa si Medsi no puede aprobar el tratamiento con el médico de mi preferencia?",
      description: <DescriptionNoAprovado />,
    },
    {
      id: 16,
      question: "¿Hasta qué plazo puedo obtener para mi crédito?",
      description: <DescriptionPlazo />,
    },
  ];

  const {
    anyQuestionContainer,
    anyQuestionSubcontainer,
    sectionTitle,
    sectionParraf,
    anyQuestionImage,
    sectionTitleBox,
    anyQuestionList,
    anyQuestionSplitBox,
    requestSaveButton,
  } = ui;

  const navigate = useNavigate();

  const AnyQuestionImage = () => {
    return (
      <div
        className={anyQuestionImage}
        style={{ backgroundImage: `url(${interrogante}` }}
      ></div>
    );
  };

  const AnyQuestionParraf = () => {
    return (
      <Box className={anyQuestionSplitBox}>
        <div className={sectionTitleBox}>
          <p className={sectionTitle}>¿Tienes alguna pregunta?</p>
        </div>
        <div>
          <p className={sectionParraf}>
            Medsi siempre está para apoyarte. Repondemos a todas tus preguntas y
            te ofrecemos la ayuda que necesitas.
          </p>
        </div>
      </Box>
    );
  };

  const AnyQuestionButton = ({ variant }) => {
    const isDesktop = size === "l" || size === "xl" || size === "xxl";

    if (isDesktop && variant === "desktop") {
      return (
        <button
          type="button"
          className={requestSaveButton}
          onClick={() => navigate(PUBLIC_ROUTES.LOGIN_PAGE)}
        >
          Contratar Tanda ahorro ahora
        </button>
      );
    }
    if (!isDesktop && variant === undefined) {
      return (
        <button
          type="button"
          className={requestSaveButton}
          onClick={() => navigate(PUBLIC_ROUTES.LOGIN_PAGE)}
        >
          Contratar Tanda ahorro ahora
        </button>
      );
    }
  };

  return (
    <>
      <Box className={anyQuestionContainer}>
        <Box className={anyQuestionSubcontainer}>
          <AnyQuestionParraf />
          <AnyQuestionImage />
        </Box>
        <Box className={anyQuestionList}>
          {questionsArray.map((qs) => (
            <Questions
              key={qs.id}
              question={qs.question}
              description={qs.description}
            />
          ))}
        </Box>
        <AnyQuestionButton />
      </Box>
      <AnyQuestionButton variant="desktop" />
    </>
  );
};

export default AnyQuestion;
