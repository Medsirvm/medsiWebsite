import { React, useState } from "react";
import MenuMedsiLogo from '../assets/images/fig_burger_menu_logo.png'
import { Link, useNavigate } from "react-router-dom";
import ui from './index.module.css';
import MedsiLogo from '../assets/images/medsi.png';

export default function AsideMenu({
  type,
  userName,
  open,
  handleOpen = () => { }
}) {

  const navigate = useNavigate();

  const portableDeviceSizes = ["xs", "s", "m"];
  const isPortableDevice = portableDeviceSizes.includes(type);

  const listItems = [
    {
      label: "Inicio",
      path: "/dashboard/tandaAhorro",
      key: "inicioDashboard",
      icon: "home",
    },
    // {
    //   label: "Realizar un pago",
    //   path: "/realizarPago",
    //   alt: "realizarUnPago",
    //   icon: "payments",
    // },
    // {
    //   label: "Calendario de próximos pagos",
    //   path: "/calendario",
    //   alt: "calendarioDeProximosPagos",
    //   icon: "calendar",
    // },
    // {
    //   label: "Movimientos",
    //   path: "/movimientos",
    //   alt: "movimientos",
    //   icon: "movements",
    // },
    // {
    //   label: "Preguntas frecuentes",
    //   path: "/faqs",
    //   alt: "faqs",
    //   icon: "help_outline",
    // },
    // {
    //   label: "Atención al cliente",
    //   path: "/atencionAlCliente",
    //   alt: "atencionAlCliente",
    //   icon: "support_agent",
    // },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    navigate(listItems[index].path);
  };

  const {
    asideMenuWrapper,
    asideMenuContainer,
    menuList,
    menuButton,
    selectedItem,
    menuListItem,
    menuListLabel,
    asideMenuTopNav,
    asideMenuLeftNav,
    username,
    profile,
    asideMenuWrapperDesk,
    wrapperDeskHead,
    headMedsiLogo,
    wrapperDeskBody,
    leftNavContainer,
    asideLink,
    isOpenedMenu
  } = ui;

  if (isPortableDevice) {
    return (
      <div className={open ? `${asideMenuWrapper} ${isOpenedMenu}` : asideMenuWrapper}>
        <div className={asideMenuContainer}>
          <nav className={asideMenuTopNav}>
            <img src={MenuMedsiLogo} alt="medsi-logo" />
            <button type="button" className={menuButton} onClick={() => { handleOpen(false) }}>
              <i className="material-icons-outlined">menu_open</i>
            </button>
          </nav>
          <nav className={asideMenuLeftNav}>
            <h1 className={username}>{userName}</h1>
            <p className={profile}>Perfil</p>
            <ul className={menuList}>
              {
                listItems.map((item, index) => {
                  const { icon, label } = item;
                  return (
                    <li
                      key={index}
                      className={`${menuListItem} ${index === selectedIndex ? selectedItem : null}`}
                      onClick={(e) => handleListItemClick(e, index)}
                    >
                      <Link className={menuListLabel}>
                        <i className="material-icons-outlined">{icon}</i>
                        {label}
                      </Link>
                    </li>
                  )
                }
                )
              }
            </ul>
          </nav>
        </div>
      </div>
    )
  } else {
    return (
      <div className={asideMenuWrapperDesk}>
        <div className={wrapperDeskHead}>
          <div className={headMedsiLogo}>
            <img alt="logo" src={MedsiLogo} />
          </div>
        </div>
        <div className={wrapperDeskBody}>
          <nav className={asideMenuLeftNav}>
            <ul className={leftNavContainer}>
              {
                listItems.map((item, index) => {
                  const { icon, label } = item;
                  return (
                    <li
                      key={index}
                      className={`${menuListItem} ${index === selectedIndex ? selectedItem : null}`}
                      onClick={(e) => handleListItemClick(e, index)}
                    >
                      <Link className={asideLink} onClick={() => { handleListItemClick(index) }}>
                        <i className="material-icons-outlined">{icon}</i>
                        <span>{label}</span>
                      </Link>
                    </li>
                  )
                }
                )
              }
            </ul>
          </nav>
        </div >
      </div >
    )
  }
}
