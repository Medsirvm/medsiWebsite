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
      const hasData = await axios
        .post('https://taqxihc1u8.execute-api.us-west-2.amazonaws.com/prod/credito/consulta-tx-generico', { correo: email })
        .then(response => {
          const { data } = response;
          if (data.length > 0) {
            dispatch(setPaymentsList(data));
            return true;
          }
          return false;
        })
        .catch(error => { return false });

      if (hasData) {
        navigate(PRIVATE_ROUTES.DASHBOARD_PAYMENTS_PAY_CHART);
      }
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
