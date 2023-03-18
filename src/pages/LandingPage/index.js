import { Box } from "@mui/material";
import React, { useEffect } from "react";
import ImageBanner from "../../components/sharedComponents/ImageBanner";
import AnyQuestion from "./AnyQuestion";
// import BannerSave from "./BannerSave";
import CalculatorBanner from "./CalculatorBanner";
import ChangeOpinion from "./ChangeOpinion";
import Footer from "./Footer";
// import { LandingPageStyles } from "./LandingPage.styles";
import StepperContainer from "./StepperContainer";
import ui from "./index.module.css";
import useWindowSize from "../../hooks/useWindowSize";
import BannerLogo from "../../assets/images/fig_tanda_ahorro_logo.png";
import AdviceBannerImage from "../../assets/images/fig_advice_banner.png";
import AdviceBannerImageLarge from "../../assets/images/fig_arte_banner_web-desk.png";
import PlayIcon from "../../assets/images/play-icon.png";
import { useDispatch } from "react-redux";
import {
  setCurrentNumberUserPayment,
  setOTPUserSemilla,
  setSimulationPayments,
  setUserAuth,
  setUserInformation,
  setWaitingForOtp,
} from "../../store/reducers/user/UserAccountSlice";

const HeadSection = (props) => {
  const { size } = props;

  const {
    bannerImageContainer,
    headBanner,
    bannerPresentation,
    bannerLogoItem,
    bannerParrafs,
    bannerParraf1,
    bannerParraf2,
    bannerParraf3,
    bannerDesktop,
    bannerPresentationDesk,
    bannerLogoItemDesk,
    bannerParrafsDesk,
    headBannerDesk,
  } = ui;

  const TandasHeadBanner = ({ variant }) => {
    const isDesktop = size === "l" || size === "xl" || size === "xxl";

    if (variant === "desktop" && isDesktop) {
      return (
        <Box className={headBannerDesk}>
          <Box component={"div"} className={bannerPresentationDesk}>
            <Box
              component={"div"}
              className={bannerLogoItemDesk}
              sx={{ backgroundImage: `url(${BannerLogo})` }}
            ></Box>
            <Box component={"div"} className={bannerParrafsDesk}>
              <p className={bannerParraf1}>Te presentamos</p>
              <p className={bannerParraf2}>Tanda Ahorro.</p>
              <p className={bannerParraf3}>
                ¡La nueva solución de Medsi que complementa tu ahorro para
                ayudarte a alcanzar tus metas!
              </p>
            </Box>
          </Box>
          <ImageBanner
            bannerStyle={bannerDesktop}
            size={size}
            isLanding={true}
          />
        </Box>
      );
    }

    return (
      <>
        <Box component={"div"} className={bannerPresentation}>
          <Box
            component={"div"}
            className={bannerLogoItem}
            sx={{ backgroundImage: `url(${BannerLogo})` }}
          ></Box>
          <Box component={"div"} className={bannerParrafs}>
            <p className={bannerParraf1}>Te presentamos</p>
            <p className={bannerParraf2}>Tanda Ahorro.</p>
            <p className={bannerParraf3}>
              ¡La nueva solución de Medsi que complementa tu ahorro para
              ayudarte a alcanzar tus metas!
            </p>
          </Box>
        </Box>
        <ImageBanner
          bannerStyle={bannerImageContainer}
          size={size}
          isLanding={true}
        />
      </>
    );
  };

  return (
    <Box className={headBanner}>
      <TandasHeadBanner variant="desktop" />
    </Box>
  );
};

const AdviceBanner = ({ size }) => {
  const {
    adviceBannerContainer,
    adviceBannerContent,
    adviceBannerParraf,
    playIcon,
  } = ui;

  const isDesktop = size === "l" || size === "xl" || size === "xxl";
  const backgroundPic = isDesktop ? AdviceBannerImageLarge : AdviceBannerImage;

  return (
    <div
      className={adviceBannerContainer}
      style={{ backgroundImage: `url(${backgroundPic})` }}
    >
      {isDesktop ? (
        <Box className={adviceBannerContent}>
          <p className={adviceBannerParraf}>
            ¡Con Tanda Ahorro, Medsi complementa tu ahorro y pone en tus manos
            una Línea de Crédito para tus tratamientos médicos!
          </p>
          <div
            className={playIcon}
            style={{ backgroundImage: `url(${PlayIcon})` }}
          ></div>
        </Box>
      ) : null}
    </div>
  );
};

const LandingPage = () => {
  const { landingWrapper } = ui;
  const { size } = useWindowSize();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSimulationPayments([]));
    dispatch(setUserInformation([]));
    dispatch(
      setOTPUserSemilla({
        correo: "",
        numero: "",
        semilla: "",
      })
    );
    dispatch(setWaitingForOtp(false))
    dispatch(setCurrentNumberUserPayment(0))
    dispatch(setUserAuth(false))
  }, [dispatch]);

  return (
    <Box className={landingWrapper}>
      <HeadSection size={size} />
      <CalculatorBanner size={size} />
      <AdviceBanner size={size} />
      {/* <BannerSave /> */}
      <StepperContainer size={size} />
      <ChangeOpinion size={size} />
      <AnyQuestion size={size} />
      <Footer size={size} />
    </Box>
  );
};

export default LandingPage;
