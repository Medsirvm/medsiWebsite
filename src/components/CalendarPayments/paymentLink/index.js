import { Box, Typography } from "@mui/material";
import React from "react";
import { paymentLinkStyles } from "./paymentLink.styles";
import paymentLink from "../../../assets/icons/paymentLink.svg";
import { FONTS } from "../../../constants/fontsConstants";
import { MAIN_COLORS } from "../../../constants/colorConstants";
import { formatNumber } from "../../../utils/formatFieldsUtils";

const PaymentLink = ({
  date,
  amount,
  loan,
  type = null
}) => {

  const classes = paymentLinkStyles();

  const backgroundColorType = () => {
    if (type === 'pagado') return "rgba(10, 204, 151, 0.5)";
    if (type === 'pendiente') return "#00263a";
    if (type === 'retrazado') return "#1b63db";
  }

  const textColorType = () => {
    if (type === 'pagado') return MAIN_COLORS.BLACK_MEDIUM;
    if (type === 'pendiente') return MAIN_COLORS.WHITE_COLOR;
    if (type === 'retrazado') return MAIN_COLORS.WHITE_COLOR;
    return MAIN_COLORS.BLACK_MEDIUM;
  }

  return (
    <Box
      className={classes.contentWrapper}
      sx={{ background: loan ? MAIN_COLORS.BLUE_CONTRAST : backgroundColorType, boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)", }}
    >
      {/* Icon container */}
      <Box className={classes.iconContainer}>
        <img src={paymentLink} alt="paymentLinkicn" />
      </Box>
      <Box className={classes.dateContainer}>
        <Typography sx={{ fontSize: 18, fontFamily: FONTS.URBANISTBOLD, color: textColorType, }} >
          {date}
        </Typography>
      </Box>
      <Box className={classes.paymentContainer}>
        <Typography sx={{ fontSize: 18, fontFamily: FONTS.URBANISTBOLD, color: textColorType, }} >
          {`$ ${formatNumber(amount)}`}
        </Typography>
      </Box>
      {loan && (
        <Box className={classes.loanContainer}>
          <Typography sx={{ fontSize: 18, fontFamily: FONTS.URBANISTBOLD, color: textColorType, }} >
            {`$ ${formatNumber(loan)}`}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default PaymentLink;
