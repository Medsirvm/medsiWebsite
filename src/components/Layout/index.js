import { Box } from "@mui/material";
import React from "react";

import ImageBanner from "../../components/ImageBanner";
import RigthDrawer from "../../components/Layout/RigthDrawer";
import WelcomeMessage from "../../components/WelcomeMessage";
import { layoutPageStyles } from "./Layout.style";

const Layout = (props) => {
  const classes = layoutPageStyles();
  const { children } = props;
  const userName = "Rogelio Vazquez Mejia";

  return (
    <Box>
      <RigthDrawer>
        <Box className={classes.welcomeMessageContainer}>
          <Box className={classes.textWrapper}>
            <WelcomeMessage userName={userName} />
          </Box>
        </Box>
        <ImageBanner />
        {children}
      </RigthDrawer>
    </Box>
  );
};

export default Layout;
