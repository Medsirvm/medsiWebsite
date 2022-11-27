import { Box } from "@mui/material";
import React from "react";
import { imageBannerStyles } from "./ImageBanner.styles";

const ImageBanner = () => {
  const classes = imageBannerStyles();
  return <Box className={classes.mainContainer} />;
};

export default ImageBanner;
