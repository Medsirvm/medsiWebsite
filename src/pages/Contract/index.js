import { Card, CardContent, Collapse, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CenteredContent from "../../components/CenteredContent";
import checkboxNotChecked from "../../assets/icons/checkboxNotChecked.svg";
import checkboxChecked from "../../assets/icons/checkedCheckbox.svg";
import CanvaContainer from "./CanvaContainer";
import Layout from "../../Layouts";
import { useSelector } from "react-redux";
import {
  selectCreditLineAndPaymentAmounts,
  selectuserInformation,
} from "../../store/reducers/user/UserAccountSlice";
import ui from "./index.module.css";
import Parraf from "../../components/Parraf";
import LineBreak from "../../components/LineBreak";
import ContainerTitle from "../../components/ContainerTitle";
import { generateTransaction } from "../../utils/generateTransaction";
import { getScheduledPaymentDates } from "../../utils/generatePaymentDates";
import ContractMedsi from "./Components/ContractMedsi";
import ContractTandas from "./Components/ContractTandas";

const Contract = () => {
  const [open, setOpen] = useState(false);
  const [medsiModal, setMedsiModal] = useState(false);
  const [medsiCheckboxFlag, setMedsiCheckboxFlag] = useState(false);
  const [tandasModal, setTandasModal] = useState(false);
  const [tandasCheckboxFlag, setTandasCheckboxFlag] = useState(false);
  const [checkContractOption, setCheckContractOption] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [contractDateList, setContractDateList] = useState([]);

  const userInformation = useSelector(selectuserInformation);
  const simulationPaymentAmounts = useSelector(selectCreditLineAndPaymentAmounts);

  useEffect(() => {

    const updateButtonState = () => {

      if (medsiCheckboxFlag && tandasCheckboxFlag) {
        setIsButtonDisabled(false);
      } else {
        setIsButtonDisabled(true);
      }
    };

    updateButtonState();

  }, [tandasCheckboxFlag, medsiCheckboxFlag, isButtonDisabled]);

  const handleOpenContractCanva = () => {
    setCheckContractOption(!checkContractOption);
    setOpen(!open);
  };

  useEffect(() => {

    const generateDatesList = async () => {

      const {
        first_name,
        last_name,
        maternal_name,
        kyc_status,
        email,
        phone_number,
        meta_data,
        is_active,
        created_at } = userInformation;

      const { biWeeklyAmount, creditLineAmount } = simulationPaymentAmounts;
      let nextPaymentDate = (() => {
        const thisMoment = new Date().toLocaleDateString('SV');
        const [YY, MM, DD] = thisMoment.split('-');
        if (parseInt(DD) < 17) {
          const month = parseInt(MM) < 10 ? '0' + parseInt(MM) : MM;
          return `${YY}-${month}-17`;
        } else {
          const month = (parseInt(MM) + 1) < 10 ? '0' + (parseInt(MM) + 1) : parseInt(MM) + 1;
          return `${YY}-${month}-02`;
        }
      })();

      const dateList = [];

      for (let index = 1; index <= 12; index++) {
        const axiosPaymentsData = {
          correo: email,
          fecha_pago: nextPaymentDate,
          // fecha_pago: new Date(new Date().setHours(24 * (15 * (index + 1)))).toLocaleDateString('sv'),
          estado: "pendiente",
          tipo_tx: "tandas_tx",
          monto: biWeeklyAmount,
          id_pago: index,
          id_orden_pago: generateTransaction([last_name, maternal_name, first_name, index])
        }

        nextPaymentDate = await getScheduledPaymentDates(nextPaymentDate, index);
        dateList.push(nextPaymentDate);
      };
      setContractDateList(dateList);
    }

    generateDatesList();
  }, [userInformation, simulationPaymentAmounts]);


  const checkboxContent = checkContractOption ? (
    <img
      src={checkboxChecked}
      alt="openCheckboxIcn"
      style={{ width: "18px", height: "18px", marginBottom: "auto" }}
      onClick={handleOpenContractCanva}
    />
  ) : (
    <img
      src={checkboxNotChecked}
      alt="notOpenCheckboxIcn"
      style={{ width: "18px", height: "18px", marginBottom: "auto" }}
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
    contractTerms,
  } = ui;

  const CardHeader = () => {
    return (
      <div className={cardHeader} onClick={() => handleOpenContractCanva()}>
        <div className={headerCheckbox}>{checkboxContent}</div>
        <div className={headerTitle}>
          <Parraf type="SemiBold" size={14}>
            {" "}
            Firmar el contrato{" "}
          </Parraf>
          <Parraf type="Regular" size={12}>
            (Da click en esta barra para firmar contrato)
          </Parraf>
        </div>
        <IconButton aria-label="expand" size="small">
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </div>
    );
  };


  const FirstContractCheckBox = ({ checked }) => {

    return checked
      ? <i className="material-icons-outlined" style={{ color: "white", background: "#3552cc", borderRadius: "6px", }} > check_box </i>
      : <i className="material-icons-outlined"> check_box_outline_blank </i>
  }

  const SecondContractCheckBox = ({ checked }) => {

    return checked
      ? <i className="material-icons-outlined" style={{ color: "white", background: "#3552cc", borderRadius: "6px", }} > check_box </i>
      : <i className="material-icons-outlined"> check_box_outline_blank </i>
  }

  const TermsAccept = () => {
    return (
      <p className={contractTerms}>
        Acepto los{" "} <strong> Términos y Condiciones de Tanda Ahorros </strong>
      </p>
    )
  }

  const handleMedsiCheckboxButton = (e) => {
    setMedsiCheckboxFlag(e);
    if (e) {
      setMedsiModal(!medsiModal);
    }
  }

  const handleTandasCheckboxButton = (e) => {
    setTandasCheckboxFlag(!tandasCheckboxFlag);
    if (e) {
      setTandasModal(!tandasModal);
    }
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
                    <Parraf type="Medium" size={16} color="#3552CC">
                      Para activar tu Tanda Ahorro deberás firmar ambos
                      contratos, una vez firmados podrás obtener todos los
                      beneficios que tenemos para tí!
                    </Parraf>
                    <LineBreak space={1} />
                    <div>
                      <Parraf type="SemiBold" size={22} color="rgba(0,0,0,0.5)">
                        1. Contrato de Depósito Medsi
                      </Parraf>
                      <LineBreak space={1} />
                      <Parraf type="SemiBold" size={16} color="#00000080">
                        Al firmar, aceptas las condiciones y los términos de
                        este contrato, así como las condiciones de pago y
                        comisiones e intereses establecidos. (Tenga en cuenta:
                        El contrato está sujeto a cambios según la revisión y la
                        aprobación final de Medsi y los detalles se le
                        comunicarán para su confirmación antes del desembolso).
                      </Parraf>
                      <LineBreak space={1} />
                      <div
                        className={contractBox}
                        onClick={() => { handleMedsiCheckboxButton(!medsiCheckboxFlag); }}
                      >
                        <FirstContractCheckBox checked={medsiCheckboxFlag} />
                        <TermsAccept />
                      </div>
                    </div>
                    <LineBreak space={1} />
                    <div>
                      <Parraf type="SemiBold" size={22} color="rgba(0,0,0,0.5)">
                        2. Contrato de Crédito (Tandas)
                      </Parraf>
                      <LineBreak space={1} />
                      <Parraf type="SemiBold" size={16} color="#00000080">
                        Al firmar, aceptas las condiciones y los términos de
                        este contrato, así como las condiciones de pago y
                        comisiones e intereses establecidos. (Tenga en cuenta:
                        El contrato está sujeto a cambios según la revisión y la
                        aprobación final de Medsi y los detalles se le
                        comunicarán para su confirmación antes del desembolso).
                      </Parraf>
                      <LineBreak space={1} />
                      <div
                        className={contractBox}
                        onClick={() => { handleTandasCheckboxButton(!tandasCheckboxFlag); }}
                      >
                        <SecondContractCheckBox checked={tandasCheckboxFlag} />
                        <TermsAccept />
                      </div>
                    </div>
                    <LineBreak space={1} />
                    <CenteredContent direction="column" className="disabledCanva" >
                      <CanvaContainer userInformation={userInformation} isButtonDisabled={isButtonDisabled} />
                    </CenteredContent>
                  </div>
                </CardContent>
              </Collapse>
            </div>
          </Card>
        </div>
        <ContractMedsi
          fancyBoxOpen={medsiModal}
          contractDateList={contractDateList}
          closeFancyBox={() => setMedsiModal(false)}
        />
        <ContractTandas
          fancyBoxOpen={tandasModal}
          contractDateList={contractDateList}
          closeFancyBox={() => setTandasModal(false)}
        />
      </section>
    </Layout>
  );
};

export default Contract;
