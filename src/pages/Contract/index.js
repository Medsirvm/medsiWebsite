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
import { selectCurrentNumberUserPayment, selectPaymentList, selectCreditLineAndPaymentAmounts, selectuserInformation } from "../../store/reducers/user/UserAccountSlice";
import ui from './index.module.css';
import Parraf from '../../components/Parraf';
import LineBreak from '../../components/LineBreak';
import ContainerTitle from '../../components/ContainerTitle';
import ContractFile from "./ContractFile/index3.js";
import { PDFViewer } from '@react-pdf/renderer';

const ModalContractFancyBox = ({ 
  fancyOpen, 
  handleFancyOpen
}) => {

  const { modalFancyBoxContract, fancyBoxContractContainer } = ui;
  const userInformation = useSelector(selectuserInformation);
  const userPaymentInformation = useSelector(selectCreditLineAndPaymentAmounts);
  const paymentList = useSelector(selectPaymentList);
  const currentPayment = useSelector(selectCurrentNumberUserPayment);
  const paymentsListRedux = useSelector(selectPaymentList);

  useEffect(() => {
    console.log({
      userInformation,
      userPaymentInformation,
      paymentList,
      currentPayment,
      paymentsListRedux
    })
  }, [
    userInformation,
    userPaymentInformation,
    paymentList,
    currentPayment,
    paymentsListRedux
  ])

  return fancyOpen ? (
    <div style={{ display: "block" }} className={modalFancyBoxContract}>
      <span className="closeBackground" onClick={() => handleFancyOpen()}></span>
      <div className={fancyBoxContractContainer}>
        {/* <ContractFile /> */}
        <PDFViewer>
          <ContractFile user={userInformation} paymentInfo={userPaymentInformation} />
        </PDFViewer>
        <button type="button" className="modalButton" onClick={() => { handleFancyOpen() }}>
          <span>Cerrar</span>
        </button>
      </div>
    </div>
  ) : null;
}

const Contract = () => {
  const [open, setOpen] = useState(false);
  const [checkContractOption, setCheckContractOption] = useState(false);
  const userInformation = useSelector(selectuserInformation);
  const [tandasContrato, setTandasContrato] = useState(false);
  const [creditoContrato, setCreditoContrato] = useState(false);
  const [fancyOpen, setFancyOpen] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    const updateButtonState = () => {
      if (tandasContrato === true && creditoContrato === true) {
        setButtonDisabled(false)
      } else {
        setButtonDisabled(true);
      }
      console.log({
        tandasContrato,
        creditoContrato,
        buttonDisabled
      })
    }

    updateButtonState();

  }, [tandasContrato, creditoContrato, buttonDisabled])

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

  const handleClickTandasContract = () => {
    setTandasContrato(!tandasContrato);
    setFancyOpen(true);
  }

  const handleClickCreditContract = () => {
    setCreditoContrato(!creditoContrato);
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
                    <Parraf type="Medium" size={16} color="#3552CC">Para activar tu Tanda Ahorro deberás firmar ambos contratos, una vez firmados podrás obtener todos los beneficios que tenemos para tí!</Parraf>
                    <LineBreak space={1} />
                    <div>
                      <Parraf type="SemiBold" size={22} color="rgba(0,0,0,0.5)">1. Contrato de Depósito Medsi</Parraf>
                      <LineBreak space={1} />
                      <Parraf type="SemiBold" size={16} color='#00000080'>
                        Al firmar, aceptas las condiciones y los términos de este contrato, así como las condiciones de pago y comisiones e intereses
                        establecidos. (Tenga en cuenta: El contrato está sujeto a cambios según la revisión y la aprobación final de Medsi y los
                        detalles se le comunicarán para su confirmación antes del desembolso).
                      </Parraf>
                      <LineBreak space={1} />
                      <div className={contractBox} onClick={() => { handleClickTandasContract() }}>
                        {
                          tandasContrato
                            ? <i className="material-icons-outlined" style={{ color: 'white', background: '#3552cc', borderRadius: '6px' }}>check_box</i>
                            : <i className="material-icons-outlined">check_box_outline_blank</i>
                        }
                        <p className={contractTerms}>Acepto los <strong>Términos y Condiciones de Tanda Ahorros</strong></p>
                      </div>
                    </div>
                    <LineBreak space={1} />
                    <div>
                      <Parraf type="SemiBold" size={22} color="rgba(0,0,0,0.5)">2. Contrato de Crédito (Tandas)</Parraf>
                      <LineBreak space={1} />
                      <Parraf type="SemiBold" size={16} color='#00000080'>
                        Al firmar, aceptas las condiciones y los términos de este contrato, así como las condiciones de pago y comisiones e intereses
                        establecidos. (Tenga en cuenta: El contrato está sujeto a cambios según la revisión y la aprobación final de Medsi y los
                        detalles se le comunicarán para su confirmación antes del desembolso).
                      </Parraf>
                      <LineBreak space={1} />
                      <div className={contractBox} onClick={() => { handleClickCreditContract() }}>
                        {
                          creditoContrato
                            ? <i className="material-icons-outlined" style={{ color: 'white', background: '#3552cc', borderRadius: '6px' }}>check_box</i>
                            : <i className="material-icons-outlined">check_box_outline_blank</i>
                        }
                        <p className={contractTerms}>Acepto los <strong>Términos y Condiciones de solicitud de crédito</strong></p>
                      </div>
                    </div>
                    <LineBreak space={1} />
                    <CenteredContent direction="column" className="disabledCanva">
                      <CanvaContainer userInformation={userInformation} buttonDisabled={buttonDisabled} />
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
