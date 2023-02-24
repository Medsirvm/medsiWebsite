import SavingCalculator from "./SavingCalculator";
import ContainerTitle from "../ContainerTitle";
import ui from './index.module.css';

const RequestSaving = (props) => {
  const { mainContainer } = ui;

  return (
    <div className={mainContainer}>
      <ContainerTitle>
        Programa tu Tanda de ahorro
      </ContainerTitle>
      <SavingCalculator isSimulator={true} />
    </div>
  );
};

export default RequestSaving;
