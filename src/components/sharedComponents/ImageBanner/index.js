
import React from "react";
import smallBanner from '../../../assets/images/fig_arte_banner_web-small.png';
import mediumBanner from '../../../assets/images/fig_arte_banner_web.png';
import largeBanner from '../../../assets/images/fig_arte_banner_web-large.png';
import ui from './index.module.css';

const ImageBanner = ({
  size,
  bannerStyle
}) => {


  const { imageBannerContainer } = ui;

  const isDesktop = (size === 'l' || size === 'xl' || size === 'xxl');

  const backgroundBanner = () => {
    if (size === 'xs' || size === 's') return `url(${smallBanner})`;
    if (size === 'm') return `url(${mediumBanner})`;
    return null;
  }
  return isDesktop
    ? <div className={imageBannerContainer} style={{ backgroundImage: `url(${largeBanner})` }}></div>
    : <div className={bannerStyle} style={{ backgroundImage: `url(${backgroundBanner})` }} />

};

export default ImageBanner;
