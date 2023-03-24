import { PDFViewer } from "@react-pdf/renderer";
import ContractFile from "./ContractFile";
import ui from '../index.module.css';
import { useSelector } from "react-redux";
import {
  selectCreditLineAndPaymentAmounts,
  selectSimulationPaymentsInformation,
  selectuserInformation
} from "../../../../store/reducers/user/UserAccountSlice";

export default function ContractTandas({
  fancyBoxOpen,
  closeFancyBox,
  whichContractIsActive = false,
  contractDateList
}) {

  const { modalFancyBoxContract, fancyBoxContractContainer } = ui;
  const userInformation = useSelector(selectuserInformation);
  const userPaymentInformation = useSelector(selectCreditLineAndPaymentAmounts);
  const paymentList = useSelector(selectSimulationPaymentsInformation);

  return fancyBoxOpen ? (
    <div style={{ display: "block" }} className={modalFancyBoxContract}>
      <span
        className="closeBackground"
        onClick={() => closeFancyBox()}
      ></span>
      <div className={fancyBoxContractContainer}>
        <PDFViewer>
          <ContractFile
            user={userInformation}
            paymentInfo={userPaymentInformation}
            paymentsList={paymentList}
            dates={contractDateList}
          />
        </PDFViewer>
        <button
          type="button"
          className="modalButton"
          onClick={() => {
            closeFancyBox();
          }}
        >
          <span>Cerrar</span>
        </button>
      </div>
    </div>
  ) : null;
}