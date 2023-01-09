import { Typography } from "@mui/material";
import React from "react";
import ImageBanner from "../../../components/sharedComponents/ImageBanner";
import { MAIN_COLORS } from "../../../constants/colorConstants";
import { FONTS } from "../../../constants/fontsConstants";
import { bannerSavingStyles } from "./bannerSave.styles";

const BannerSave = () => {
  const classes = bannerSavingStyles();
  return (
    <ImageBanner bannerStyle={classes.bannerImageContainer}>
      <Typography
        variant="subtitle2"
        sx={{
          fontFamily: FONTS.URBANISTSEMIBOLD,
          color: MAIN_COLORS.WHITE_COLOR,
          fontSize: 36,
        }}
      >
        ¡Con Tanda Ahorro de poco en poco grandes beneficios!
      </Typography>
    </ImageBanner>
  );
};

export default BannerSave;
