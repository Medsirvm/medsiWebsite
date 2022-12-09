import { Box, Typography } from "@mui/material";
import React from "react";
import { paymentLinkStyles } from "./paymentLink.styles";
import paymentLink from "../../../assets/icons/paymentLink.svg";
import { FONTS } from "../../../constants/fontsConstants";
import { MAIN_COLORS } from "../../../constants/colorConstants";
const PaymentLink = (props) => {
  const classes = paymentLinkStyles();
  const { id, date, amount } = props;

  return (
    <Box
      className={classes.contentWrapper}
      sx={{
        background: "rgba(10, 204, 151, 0.5)",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
      }}
    >
      {/* Icon container */}
      <Box className={classes.iconContainer}>
        <img src={paymentLink} alt="paymentLinkicn" />
      </Box>
      <Box className={classes.amountContainer}>
        <Typography
          sx={{
            fontSize: 18,
            fontFamily: FONTS.URBANISTBOLD,
            color: MAIN_COLORS.BLACK_MEDIUM,
          }}
        >
          {date}
        </Typography>
      </Box>
      <Box className={classes.paymentContainer}>
        <Typography
          sx={{
            fontSize: 18,
            fontFamily: FONTS.URBANISTBOLD,
            color:   MAIN_COLORS.BLACK_MEDIUM,
          }}
        >
          {amount}
        </Typography>
      </Box>
    </Box>
  );
};

export default PaymentLink;
