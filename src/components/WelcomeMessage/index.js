import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { MAIN_COLORS } from "../../constants/colorConstants";
import { FONTS } from "../../constants/fontsConstants";

const WelcomeMessage = (props) => {
  const { userName } = props;
  return (
    <Box>
      {" "}
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          fontSize: 22,
          fontFamily: FONTS.URBANISMEDIUM,
          color: MAIN_COLORS.DISABLED_TEXT,
        }}
      >
        {" "}
        Buenas noches{" "}
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          fontSize: 30,
          fontFamily: FONTS.URBANISTBOLD,
        }}
      >
        {" "}
        {userName}{" "}
      </Typography>
    </Box>
  );
};

export default WelcomeMessage;
