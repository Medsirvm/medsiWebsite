import { Box } from "@mui/material";
import React from "react";

import ImageBanner from "../sharedComponents/ImageBanner";
import RigthDrawer from "../../components/Layout/RigthDrawer";
import WelcomeMessage from "../../components/WelcomeMessage";
import { layoutPageStyles } from "./Layout.style";
import { useSelector } from "react-redux";
import { selectuserInformation } from "../../store/reducers/user/UserAccountSlice";
const Layout = (props) => {
  const classes = layoutPageStyles();
  const { children } = props;
  const userInformation = useSelector(selectuserInformation);
  const userName = `${userInformation.first_name} ${userInformation.last_name} ${userInformation.maternal_name}`

  return (
    <Box>
      <RigthDrawer>
        <Box className={classes.welcomeMessageContainer}>
          <Box className={classes.textWrapper}>
            <WelcomeMessage userName={userName} />
          </Box>
        </Box>
        <ImageBanner bannerStyle={classes.bannerImageContainer} />
        {children}
      </RigthDrawer>
    </Box>
  );
};

export default Layout;
