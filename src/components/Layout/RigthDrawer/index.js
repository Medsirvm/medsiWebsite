import { React, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import medsiLogo from "../../../assets/images/medsi.png";
import { drawerStyles } from "./RigthDrawer.styles";
//Import Icons
import homeIcon from "../../../assets/icons/home.svg";
// import payments from "../../../assets/icons/makePayment.svg";
// import calendar from "../../../assets/icons/paymentCalendar.svg";
// import movements from "../../../assets/icons/movements.svg";
// import faqs from "../../../assets/icons/questions.svg";
// import clientSupport from "../../../assets/icons/clientSupport.svg";
const drawerWidth = 320;

export default function RigthDrawer(props) {
  const { children } = props;
  const classes = drawerStyles();

  const LIST_ITEMS = [
    {
      index: 1,
      label: "inicio",
      path: "/dashboard",
      key: "inicioDashboard",
      icon: homeIcon,
    },
    // {
    //   index: 2,
    //   label: "Realizar un pago",
    //   path: "/realizarPago",
    //   key: "realizarUnPago",
    //   icon: payments,
    // },
    // {
    //   index: 3,
    //   label: "Calendario de próximos pagos",
    //   path: "/calendario",
    //   key: "calendarioDeProximosPagos",
    //   icon: calendar,
    // },
    // {
    //   index: 4,
    //   label: "Movimientos",
    //   path: "/movimientos",
    //   key: "movimientos",
    //   icon: movements,
    // },
    // {
    //   index: 5,
    //   label: "Preguntas frecuentes",
    //   path: "/faqs",
    //   key: "faqs",
    //   icon: faqs,
    // },
    // {
    //   index: 6,
    //   label: "Atención al cliente",
    //   path: "/atencionAlCliente",
    //   key: "atencionAlCliente",
    //   icon: clientSupport,
    // },
  ];

  const [selectedIndex, setSelectedIndex] = useState(1);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CssBaseline />
      <Drawer
        classes={{ paper: classes.paper }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            border: "none",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box className={classes.logoContainer}>
          <img src={medsiLogo} alt="LogoMedsi" className={classes.logo} />
        </Box>
        <List>
          {LIST_ITEMS.map((item) => (
            <ListItem
              key={item.key}
              classes={{ root: classes.root, selected: classes.selected }}
              className={classes.listItem}
              selected={selectedIndex === item.index}
              onClick={(event) => handleListItemClick(event, item.index)}
            >
              <ListItemIcon>
                <img src={item.icon} alt={item.label} />
              </ListItemIcon>
              <ListItemText
                disableTypography
                classes={{
                  primary: {
                    fontFamily: "urbanisticBold",
                  },
                }}
                primary={item.label}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default" }}>
        {children}
      </Box>
    </Box>
  );
}
