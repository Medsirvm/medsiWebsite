import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import logo from "../../../assets/images/medsiLogoFooter.svg";
import { FONTS } from "../../../constants/fontsConstants";
import whatsAppIcon from "../../../assets/images/WhatsappIcon.png";
import instagramIcon from "../../../assets/images/instaIcon.png";
import facebookIcon from "../../../assets/images/facebookIcon.png";
const Footer = () => {
  return (
    <Box sx={{ padding: 15 }}>
      <Grid container>
        <Grid item xs={12}>
          <img src={logo} alt="medsiLog" />
        </Grid>
        <Grid item xs={10}>
          <Typography
            sx={{
              fontFamily: FONTS.URBANISTREGULAR,
              fontSize: 18,
              marginTop: 2,
            }}
          >
            {" "}
            ©medsi 2022 Todos los derechos reservados.{" "}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              maxWidth: 180,
            }}
          >
            <img src={whatsAppIcon} alt="whatsAppLink" />
            <img src={instagramIcon} alt="instagramLink" />
            <img src={facebookIcon} alt="facebookLink" />
          </Box>
        </Grid>
        <hr style={{ width: "100vw", marginTop: 20 }} />
        <Grid item xs={12}>
          <Typography
            sx={{
              fontFamily: FONTS.URBANISTREGULAR,
              fontSize: 20,
              marginTop: 2,
              marginRight: 40,
            }}
          >
            Medsi es una marca en proceso de registro. El uso de este sitio
            implica la aceptación de los Términos y Condiciones, así como del
            Aviso de Privacidad de Munbrunn Sociedad Anónima de Capital
            Variable.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontFamily: FONTS.URBANISTREGULAR,
              fontSize: 20,
              marginTop: 2,
              marginRight: 40,
            }}
          >
            Munbrunn S.A. de C.V. para su constitución y operación no requiere
            autorización de la Secretaría de Hacienda y Crédito Público ni está
            sujeta a la supervisión de la Comisión Nacional Bancaria y de
            Valores.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
