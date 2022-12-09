import { Box } from "@mui/system";
import React from "react";

const CenteredContent = (props) => {
  const { children, className, direction, style } = props;
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection={direction && direction}
      className={className}
      style={style && style}
    >
      {children}
    </Box>
  );
};

export default CenteredContent;
