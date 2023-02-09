import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom"; 
import ImageBanner from "../../components/sharedComponents/ImageBanner"; 
import { PUBLIC_ROUTES } from "../../constants/routesConstants";
import AnyQuestion from "./AnyQuestion";
// import BannerSave from "./BannerSave";
import CalculatorBanner from "./CalculatorBanner";
import ChangeOpinion from "./ChangeOpinion";
import Footer from "./Footer";
// import { LandingPageStyles } from "./LandingPage.styles";
import StepperContainer from "./StepperContainer";
import ui from './index.module.css';
import useWindowSize from '../../hooks/useWindowSize';
import BannerLogo from '../../assets/images/fig_tanda_ahorro_logo.png';
import AdviceBannerImage from '../../assets/images/fig_advice_banner.png';

const HeadSection = (props) => {

  const { size } = props;

  const {
    bannerImageContainer,
    headBanner,
    bannerLogoItem,
    bannerParrafs,
    bannerParraf1,
    bannerParraf2,
    bannerParraf3
  } = ui;

  return (
    <Box className={headBanner}>
      <Box component={"div"} className={bannerLogoItem} sx={{ backgroundImage: `url(${BannerLogo})` }}></Box>
      <Box component={"div"} className={bannerParrafs}>
        <p className={bannerParraf1}>Te presentamos</p>
        <p className={bannerParraf2}>Tanda Ahorro.</p>
        <p className={bannerParraf3}>¡La nueva solución de Medsi que complementa tu ahorro para ayudarte a alcanzar tus metas!</p>
      </Box>
      <ImageBanner bannerStyle={bannerImageContainer} size={size} />
    </Box>
  )
}

const AdviceBanner = () => {
  return (
    <div
      className={ui.adviceBannerContainer}
      style={{ backgroundImage: `url(${AdviceBannerImage})` }}>
    </div>
  )
}

const LandingPage = () => {

  const {
    landingWrapper,
    requestSaveButton
  } = ui;
  const navigate = useNavigate();
  const { size } = useWindowSize();

  return (
    <Box className={landingWrapper}>
      <HeadSection size={size} />
      <CalculatorBanner />
      <AdviceBanner />
      {/* <BannerSave /> */}
      <StepperContainer size={size} />
      <ChangeOpinion />
      <AnyQuestion>
        <button
          type="button"
          className={requestSaveButton}
          onClick={() => navigate(PUBLIC_ROUTES.LOGIN_PAGE)}
        >
          Contratar Tanda ahorro ahora
        </button>
      </AnyQuestion>
      <Footer />
    </Box>
  )
}

export default LandingPage;
