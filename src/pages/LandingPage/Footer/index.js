import { Box } from "@mui/material";
import React from "react";
import logo from "../../../assets/images/medsiLogoFooter.svg";
import whatsAppIcon from "../../../assets/images/WhatsappIcon.png";
import instagramIcon from "../../../assets/images/instaIcon.png";
import facebookIcon from "../../../assets/images/facebookIcon.png";
import ui from './index.module.css';

const Footer = () => {

  const {
    footerSection,
    footerLogo,
    copyrights,
    socialMediaIcons,
    footerParraf,
    aboutAndContact,
    aboutList,
    contactList
  } = ui;

  return (
    <Box className={footerSection}>
      <div className={footerLogo}>
        <img src={logo} alt="medsiLog" />
      </div>
      <p className={copyrights}>&copy;medsi 2022 Todos los derechos reservados.</p>
      <Box className={aboutAndContact}>
        <p class>Medsi</p>
        <ul className={aboutList}>
          <li>Aviso de privacidad</li>
          <li>Términos y Condiciones</li>
        </ul>
        <p>Contacto</p>
        <ul className={contactList}>
          <li>Equipo de Atención a Clientes Medsi</li>
          <li>+52 56 3930 6489</li>
          <li>9:00 a.m. - 6:00 p.m.</li>
        </ul>
      </Box>
      <Box className={socialMediaIcons}>
        <img src={whatsAppIcon} alt="whatsAppLink" />
        <img src={instagramIcon} alt="instagramLink" />
        <img src={facebookIcon} alt="facebookLink" />
      </Box>
      <hr style={{ width: "100%", margin: '32px auto' }} />
      <p className={footerParraf}>
        Medsi es una marca en proceso de registro. El uso de este sitio
        implica la aceptación de los Términos y Condiciones, así como del
        Aviso de Privacidad de Munbrunn Sociedad Anónima de Capital
        Variable.
      </p>
      <br />
      <p className={footerParraf}>
        Munbrunn S.A. de C.V. para su constitución y operación no requiere
        autorización de la Secretaría de Hacienda y Crédito Público ni está
        sujeta a la supervisión de la Comisión Nacional Bancaria y de
        Valores.
      </p>
    </Box>
  );
};

export default Footer;
