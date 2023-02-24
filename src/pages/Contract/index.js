import {
  Card,
  CardContent,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Container } from "@mui/system";
import CenteredContent from "../../components/CenteredContent";
import checkboxNotChecked from "../../assets/icons/checkboxNotChecked.svg";
import checkboxChecked from "../../assets/icons/checkedCheckbox.svg";
import { contratPageStyles } from "./ContractPage.styles";
import CanvaContainer from "./CanvaContainer";
import Layout from "../../Layouts";
import { useSelector } from "react-redux";
import { selectuserInformation } from "../../store/reducers/user/UserAccountSlice";
import ui from './index.module.css';
import Parraf from '../../components/Parraf';
import LineBreak from '../../components/LineBreak';

import ContainerTitle from '../../components/ContainerTitle';

const Contract = () => {
  const classes = contratPageStyles();
  const [open, setOpen] = useState(false);
  const [checkContractOption, setCheckContractOption] = useState(false);
  const userInformation = useSelector(selectuserInformation);
  const handleOpenContractCanva = () => {
    setCheckContractOption(!checkContractOption);
    setOpen(!open);
  };

  const checkboxContent = checkContractOption ? (
    <img
      src={checkboxChecked}
      alt="openCheckboxIcn"
      style={{ width: "18px", height: '18px', marginBottom: 'auto' }}
      onClick={handleOpenContractCanva}
    />
  ) : (
    <img
      src={checkboxNotChecked}
      alt="notOpenCheckboxIcn"
      style={{ width: "18px", height: '18px', marginBottom: 'auto' }}
      onClick={handleOpenContractCanva}
    />
  );

  const {
    sectionContainer,
    containerCard,
    cardHeader,
    headerCheckbox,
    headerTitle,
  } = ui;

  const CardHeader = () => {
    return (
      <div className={cardHeader} onClick={() => handleOpenContractCanva()}>
        <div className={headerCheckbox}>{checkboxContent}</div>
        <div className={headerTitle}>
          <Parraf type='SemiBold' size={14}> Firmar el contrato </Parraf>
          <Parraf type='Regular' size={12}>(Da click en esta barra para firmar contrato)</Parraf>
        </div>
        <IconButton aria-label="expand" size="small" >
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </div>
    )
  }

  return (
    <Layout>
      <section>
        <div className={sectionContainer}>
          <Card className={containerCard}>
            <CardHeader />
            <div style={{ backgroundColor: "rgba(211,211,211,0.4)" }}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <CardContent sx={{ backgroundColor: "white" }}>
                  <div>
                    <ContainerTitle>
                      Firma el contrato de préstamos Tanda Ahorro
                    </ContainerTitle>
                    <Parraf type="SemiBold" size={18} color='#00000080'>
                      Al firmar, aceptas las condiciones y los términos de este
                      contrato, así como las condiciones de pago y comisiones e
                      intereses establecidos.{" "}
                    </Parraf>
                    <LineBreak space={2}/>
                    <CenteredContent direction="column">
                      <CanvaContainer userInformation={userInformation} />
                    </CenteredContent>
                  </div>
                </CardContent>
              </Collapse>
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Contract;
