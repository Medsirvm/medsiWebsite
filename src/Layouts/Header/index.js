import ui from './index.module.css';
import WelcomeMessage from '../../components/WelcomeMessage';
import ImageBanner from '../../components/sharedComponents/ImageBanner';
import smallMedsiLogo from '../assets/images/fig_medsi_small_logo.png';
import headBanner from '../assets/images/fig_tanda_ahorro_banner.png';
import { useNavigate } from 'react-router-dom';

export default function Header({
  size,
  userName,
  handleOpen = () => { }
}) {

  const isSmall = (size === 'xs' || size === 's' || size === 'm');
  const isLarge = (size === 'l' || size === 'xl' || size === 'xxl');
  const navigate = useNavigate();

  const {
    headerWrapper,
    welcomeSmallContainer,
    navLogoBox,
    navToolsBox,
    welcomeLargeContainer,
    textWrapper,
    bannerImageContainer,
    welcomeUser,
    username,
    welcomeBanner
  } = ui;

  const SmallContent = () => {

    const MedsiLogo = () => {
      return (
        <div className={navLogoBox}>
          <img src={smallMedsiLogo} alt="medsiLogo" width={'60px'} height={'60px'} />
        </div>
      )
    }

    const MedsiTools = () => {
      return (
        <div className={navToolsBox}>
          <button type='button'>
            <i class="material-icons-outlined">notifications</i>
          </button>
          <button type='button'>
            <i class="material-icons-outlined">power_settings_new</i>
          </button>
          <button type='button' onClick={() => { handleOpen(true) }}>
            <i className="material-icons-outlined">menu</i>
          </button>
        </div>
      )
    }

    const WelcomeUser = () => {
      return (
        <div className={welcomeUser}>
          <p>Buenas noches, <span className={username}>{userName}</span></p>
        </div>
      )
    }

    const MedsiBanner = () => {
      return (
        <div className={welcomeBanner} style={{ backgroundImage: `url(${headBanner})` }}></div>
      )
    }

    return isSmall ? (
      <>
        <div className={welcomeSmallContainer}>
          <nav>
            <button className="Header_backButton" type="button" onClick={() => navigate(-1)}>
              <i className="material-icons-outlined">arrow_back</i>
              <span>Regresar</span>
            </button>
            <MedsiLogo />
            <MedsiTools />
          </nav>
          <WelcomeUser />
        </div>
        <MedsiBanner />
      </>
    ) : null;
  }

  const LargeContent = () => {

    return isLarge ? (
      <>
        <div className={welcomeLargeContainer}>
          <div className={textWrapper}>
            <WelcomeMessage userName={userName} />
          </div>
        </div>
        <ImageBanner size={size} bannerStyle={bannerImageContainer} />
      </>
    ) : null
  }
 
  return (
    <header className={headerWrapper}>
      <SmallContent />
      <LargeContent />
    </header>
  )
}