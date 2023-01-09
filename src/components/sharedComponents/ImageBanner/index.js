import { Box } from "@mui/material";
import React from "react";

const ImageBanner = (props) => {
  const { bannerStyle, children } = props;
  if (children) {
    return <Box className={bannerStyle}>{children}</Box>;
  } else {
    return <Box className={bannerStyle} />;
  }
};

export default ImageBanner;
