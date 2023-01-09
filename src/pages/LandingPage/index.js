import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CenteredContent from "../../components/CenteredContent";
import ImageBanner from "../../components/sharedComponents/ImageBanner";
import { FONTS } from "../../constants/fontsConstants";
import { PUBLIC_ROUTES } from "../../constants/routesConstants";
import AnyQuestion from "./AnyQuestion";
import BannerSave from "./BannerSave";
import CalculatorBanner from "./CalculatorBanner";
import ChangeOpinion from "./ChangeOpinion";
import Footer from "./Footer";
import { LandingPageStyles } from "./LandingPage.styles";
import StepperContainer from "./StepperContainer";

const LandingPage = () => {
  const classes = LandingPageStyles();
  const navigate = useNavigate();
  return (
    <Box>
      <ImageBanner bannerStyle={classes.bannerImageContainer} />
      <CalculatorBanner />
      <BannerSave />
      <StepperContainer />
      <ChangeOpinion />
      <AnyQuestion />
      <CenteredContent>
        <Button
          variant="contained"
          sx={{
            marginTop: 3,
            textTransform: "none",
            fontFamily: FONTS.URBANISTBOLD,
            borderRadius:10,
            marginBottom:10
          }}
          className={classes.requestSaveButton}
          onClick={() => navigate(PUBLIC_ROUTES.LOGIN_PAGE)}
        >
          Contratar Tanda ahorro ahora
        </Button>
      </CenteredContent>
      <Footer/>
    </Box>
  );
};

export default LandingPage;
