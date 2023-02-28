
import React from "react";
import smallBanner from '../../../assets/images/fig_arte_banner_web-small.png';
import mediumBanner from '../../../assets/images/fig_arte_banner_web.png';
import largeBanner from '../../../assets/images/fig_arte_banner_web-large.png';
import sectionBanner from '../../../assets/images/fig_arte_banner_web.png';
import ui from './index.module.css';

const ImageBanner = ({
  size,
  bannerStyle,
  isLanding
}) => {


  const { imageBannerContainer, imageBannerDesktop } = ui;

  const isDesktop = (size === 'l' || size === 'xl' || size === 'xxl');

  const backgroundBanner = () => {
    if (size === 'xs' || size === 's') return `url(${smallBanner})`;
    if (size === 'm') return `url(${mediumBanner})`;
    return null;
  }

  if (isDesktop && isLanding) {
    return <div className={imageBannerDesktop} style={{ backgroundImage: `url(${sectionBanner})` }}></div>
  }

  return isDesktop
    ? <div className={imageBannerContainer} style={{ backgroundImage: `url(${largeBanner})` }}></div>
    : <div className={bannerStyle} style={{ backgroundImage: backgroundBanner() }} />

};

export default ImageBanner;
