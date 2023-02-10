import { Box } from "@mui/material";
import React from "react";
import smallBanner from '../../../assets/images/fig_arte_banner_web-small.png';
import mediumBanner from '../../../assets/images/fig_arte_banner_web.png';
const ImageBanner = (props) => {

  const TandasHeadBanner = ({ bannerStyle, size, children }) => {

    const isDesktop = (size === 'l' || size === 'xl' || size === 'xxl');

    const backgroundBanner = () => {
      if (size === 'xs' || size === 's') return `url(${smallBanner})`;
      if (size === 'm') return `url(${mediumBanner})`;
      return null;
    }

    if (isDesktop) {
      return (
        <Box>
          <div className={bannerStyle} style={{ backgroundImage: `url(${mediumBanner})` }}></div>
        </Box >
      )
    }

    return <Box className={bannerStyle} sx={{ backgroundImage: backgroundBanner }} />
  }

  return <TandasHeadBanner {...props} />
};

export default ImageBanner;
