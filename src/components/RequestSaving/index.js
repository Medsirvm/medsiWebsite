import SavingCalculator from "./SavingCalculator";
import ContainerTitle from "../ContainerTitle";
import ui from "./index.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSimulationPayments } from "../../store/reducers/user/UserAccountSlice";

const RequestSaving = (props) => {
  const { mainContainer } = ui;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSimulationPayments([]));
  }, [dispatch]);

  return (
    <div className={mainContainer}>
      <ContainerTitle>Programa tu Tanda de ahorro</ContainerTitle>
      <SavingCalculator isSimulator={true} />
    </div>
  );
};

export default RequestSaving;
