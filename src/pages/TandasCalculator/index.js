import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import RequestSaving from "../../components/RequestSaving";
import { PRIVATE_ROUTES } from "../../constants/routesConstants";
import { selectuserInformation, setPaymentsList } from "../../store/reducers/user/UserAccountSlice";

const TandasCalculator = () => {

  const userInformation = useSelector(selectuserInformation);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {

    const httpRequest = async () => {
      const { email } = userInformation;
      const httpResponse = await axios.post('https://taqxihc1u8.execute-api.us-west-2.amazonaws.com/prod/credito/consulta-tx-generico', { correo: email });
      const { data } = httpResponse;
      if (data.length > 0) {
        navigate(PRIVATE_ROUTES.DASHBOARD_PAYMENTS_PAY_CHART);
      }
      const responsePaymentLinks = data.map((p, i) => i < 12 ? p : null).filter(i => i !== null)
      dispatch(setPaymentsList(responsePaymentLinks));
    }
    httpRequest();
  }, [dispatch, userInformation, navigate]);

  return (
    <Layout>
      <RequestSaving />
    </Layout>
  );
};

export default TandasCalculator;
