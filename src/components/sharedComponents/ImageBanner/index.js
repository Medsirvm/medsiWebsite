import { Box } from "@mui/material";
import React from "react";
import landingBanner from '../../../assets/images/Medsi_TandaAhorro_Banner_Landing_Page.svg';
import smallBanner from '../../../assets/images/fig_arte_banner_web-small.png';
const ImageBanner = ({ bannerStyle, size, children }) => {


  const backgroundBanner = () => {
    if (size === 'xs' || size === 's') return `url(${smallBanner})`;
    if (size === 'm') return `url(${landingBanner})`;
    return `url(${landingBanner})`
  }

  return children
    ? <Box className={bannerStyle} sx={{ backgroundImage: backgroundBanner }}>{children}</Box>
    : <Box className={bannerStyle} sx={{ backgroundImage: backgroundBanner }} />
};

export default ImageBanner;
