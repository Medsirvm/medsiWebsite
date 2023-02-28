import {
  Card,
  CardContent,
  Collapse,
  IconButton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CenteredContent from "../../components/CenteredContent";
import checkboxNotChecked from "../../assets/icons/checkboxNotChecked.svg";
import checkboxChecked from "../../assets/icons/checkedCheckbox.svg";
import CanvaContainer from "./CanvaContainer";
import Layout from "../../Layouts";
import { useSelector } from "react-redux";
import { selectuserInformation } from "../../store/reducers/user/UserAccountSlice";
import ui from './index.module.css';
import Parraf from '../../components/Parraf';
import LineBreak from '../../components/LineBreak';
import ContainerTitle from '../../components/ContainerTitle';
import ContractFile from "./ContractFile";

const ModalContractFancyBox = ({ fancyOpen, handleFancyOpen }) => {

  const { modalFancyBoxContract, fancyBoxContractContainer } = ui;

  return fancyOpen ? (
    <div style={{ display: "block" }} className={modalFancyBoxContract}>
      <span className="closeBackground" onClick={() => handleFancyOpen()}></span>
      <div className={fancyBoxContractContainer}>
        <ContractFile />
      </div>
    </div>
  ) : null;
}

const Contract = () => {
  const [open, setOpen] = useState(false);
  const [checkContractOption, setCheckContractOption] = useState(false);
  const userInformation = useSelector(selectuserInformation);
  const [modalContract, setModalContract] = useState(false);
  const [fancyOpen, setFancyOpen] = useState(false);

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
    contractBox,
    contractTerms
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

  useEffect(() => { console.log({ modalContract, fancyOpen }) }, [modalContract, fancyOpen])

  const handleClickContract = () => {
    setModalContract(!modalContract);
    handleFancyBox();
    setFancyOpen(true);
  }

  const handleFancyBox = () => {
    setFancyOpen(false);
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
                    <LineBreak space={1} />
                    <div>
                      <div className={contractBox} onClick={() => { handleClickContract() }}>
                        <i className="material-icons-outlined">{modalContract ? "check_box" : "check_box_outline_blank"}</i>
                        <p className={contractTerms}>Acepto los <strong>Términos y Condiciones de Tanda Ahorros</strong></p>
                      </div>
                      <LineBreak space={.5} />
                      <div className={contractBox} onClick={() => { handleClickContract() }}>
                        <i className="material-icons-outlined">{modalContract ? "check_box" : "check_box_outline_blank"}</i>
                        <p className={contractTerms}>Acepto los <strong>Términos y Condiciones de solicitud de crédito</strong></p>
                      </div>
                    </div>
                    <LineBreak space={1} />
                    <CenteredContent direction="column">
                      <CanvaContainer userInformation={userInformation} />
                    </CenteredContent>
                  </div>
                </CardContent>
              </Collapse>
            </div>
          </Card>
        </div>
        <ModalContractFancyBox fancyOpen={fancyOpen} handleFancyOpen={() => { handleFancyBox() }} />
      </section>
    </Layout>
  );
};

export default Contract;
