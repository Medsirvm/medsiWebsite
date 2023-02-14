import { Box } from "@mui/material";
import React from "react";
import logo from "../../../assets/images/medsiLogoFooter.svg";
import whatsAppIcon from "../../../assets/images/WhatsappIcon.png";
import instagramIcon from "../../../assets/images/instaIcon.png";
import facebookIcon from "../../../assets/images/facebookIcon.png";
import ui from './index.module.css';

const Footer = ({ size }) => {

  const {
    footerSection,
    footerLogo,
    copyrights,
    socialMediaIcons,
    footerParraf,
    aboutAndContact,
    aboutList,
    contactList,
    footerHead,
    footerLogoContainer
  } = ui;

  const SocialMediaIcons = ({ variant, device }) => {

    const Icons = () => {
      return (
        <Box className={socialMediaIcons}>
          <img src={whatsAppIcon} alt="whatsAppLink" />
          <img src={instagramIcon} alt="instagramLink" />
          <img src={facebookIcon} alt="facebookLink" />
        </Box>
      )
    }

    if (variant === "mobile" && (size === 'xs' || size === 's')) return <Icons />
    if (variant === "tablet" && size === 'm') return <Icons />
    if (variant === "desktop" && device === 'tablet' && size === "l") return <Icons />
    if (variant === "desktop" && device === 'desktop' && (size === "xl" || size === "xxl")) return <Icons />
    return null;
  }

  const FooterContact = () => {
    return (
      <Box>
        <p>Contacto</p>
        <ul className={contactList}>
          <li>Equipo de Atención a Clientes Medsi</li>
          <li>+52 56 3930 6489</li>
          <li>9:00 a.m. - 6:00 p.m.</li>
        </ul>
        <SocialMediaIcons variant="tablet" />
      </Box>
    )
  }

  const FooterAbout = () => {
    return (
      <Box>
        <p>Medsi</p>
        <ul className={aboutList}>
          <li>Aviso de privacidad</li>
          <li>Términos y Condiciones</li>
        </ul>
      </Box>
    )
  }

  const FooterParraf = () => {
    return (
      <>
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
      </>
    )
  }

  const FooterLogo = () => {
    return (
      <Box className={footerLogoContainer}>
        <div className={footerLogo}>
          <img src={logo} alt="medsiLog" />
        </div>
        <p className={copyrights}>&copy;medsi 2022 Todos los derechos reservados.</p>
      </Box>
    )
  }

  return (
    <Box className={footerSection}>
      <Box className={footerHead}>
        <FooterLogo />
        <Box className={aboutAndContact}>
          <FooterAbout />
          <FooterContact />
          <SocialMediaIcons variant="desktop" device="desktop" />
        </Box>
      </Box>
      <SocialMediaIcons variant="mobile" />
      <SocialMediaIcons variant="desktop" device="tablet" />
      <hr style={{ width: "100%", margin: '32px auto' }} />
      <FooterParraf />
    </Box>
  );
};

export default Footer;
