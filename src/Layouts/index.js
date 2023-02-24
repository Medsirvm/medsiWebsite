import React, { useState } from "react";
import AsideMenu from "./AsideMenu";
import { useSelector } from "react-redux";
import { selectuserInformation } from "../store/reducers/user/UserAccountSlice";
import useWindowsSize from '../hooks/useWindowSize'
import ui from './index.module.css';
import Main from "./Main";
import Header from "./Header";

export default function Layout({ children }) {

  const [open, setOpen] = useState(false);
  const userInformation = useSelector(selectuserInformation);
  const userName = `${userInformation.first_name} ${userInformation.last_name} ${userInformation.maternal_name}`
  const { size } = useWindowsSize();
  const {
    layoutWrapper
  } = ui;

  return (
    <div className={layoutWrapper}>
      <AsideMenu
        type={size}
        userName={userName}
        open={open}
        handleOpen={(e) => setOpen(e)}
      />
      <Main>
        <Header
          size={size}
          userName={userName}
          handleOpen={(e) => setOpen(e)}
        />
        {children}
      </Main>
    </div>
  );
}; 
