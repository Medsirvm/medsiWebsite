import { React } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import medsiLogo from "../../../assets/images/medsi.png";
import { drawerStyles } from "./RigthDrawer.styles";
//Import Icons
import homeIcon from "../../../assets/icons/home.svg";
import payments from "../../../assets/icons/makePayment.svg";
import calendar from "../../../assets/icons/paymentCalendar.svg";
import movements from "../../../assets/icons/movements.svg";
import faqs from "../../../assets/icons/questions.svg";
import clientSupport from "../../../assets/icons/clientSupport.svg";
import { useLocation } from "react-router-dom";
import { MAIN_COLORS } from "../../../constants/colorConstants";
const drawerWidth = 320;

export default function RigthDrawer(props) {
  const { children } = props;
  const location = useLocation();
  const classes = drawerStyles();
  // const [selectHome, setSelectHome] = useState(false);

  // const handleSelectedHome = () => {
  //   setSelectHome(!selectHome);
  //   console.log(selectHome);
  // };
  // const handleSelectedDoPayment = () => {
  //   setSelectHome(!selectHome);
  //   console.log(selectHome);
  // };

  const LIST_ITEMS = [
    {
      label: "inicio",
      path: "/dashboard",
      key: "inicioDashboard",
      icon: homeIcon,
      // onClick: handleSelectedHome,
      isSelected: () => (location.pathname === "/dashboard" ? true : false),
    },
    {
      label: "Realizar un pago",
      path: "/realizarPago",
      key: "realizarUnPago",
      icon: payments,
      // onClick: handleSelectedDoPayment,
      // isSelected: () => (location.pathname === "/realizarPago" ? true : false),
    },
    {
      label: "Calendario de próximos pagos",
      path: "/calendario",
      key: "calendarioDeProximosPagos",
      icon: calendar,
      // onClick: handleSelectedDoPayment,
      // isSelected: () => (location.pathname === "/realizarPago" ? true : false),
    },
    {
      label: "Movimientos",
      path: "/movimientos",
      key: "movimientos",
      icon: movements,
      // onClick: handleSelectedDoPayment,
      // isSelected: () => (location.pathname === "/realizarPago" ? true : false),
    },
    {
      label: "Preguntas frecuentes",
      path: "/faqs",
      key: "faqs",
      icon: faqs,
      // onClick: handleSelectedDoPayment,
      // isSelected: () => (location.pathname === "/realizarPago" ? true : false),
    },
    {
      label: "Atención al cliente",
      path: "/atencionAlCliente",
      key: "atencionAlCliente",
      icon: clientSupport,
      // onClick: handleSelectedDoPayment,
      // isSelected: () => (location.pathname === "/realizarPago" ? true : false),
    },
  ];
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
              disablePadding
              className={classes.listItem}
              sx={{
                "& .Mui-selected": {
                  height: 70,
                  color: MAIN_COLORS.MAIN_PURPLE,
                  backgroundColor: "white",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                },
              }}
            >
              <ListItemButton
                className={classes.listItem}
                onClick={item.onClick}
                selected={item.isSelected}
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
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default" }}
      >
        {children}
      </Box>
    </Box>
  );
}
