import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInformation: {
    name: "",
    lastName: "",
    surname: "",
    email: "",
    phoneNumber: "",
    kycStatus: null,
    creditDecisionStatus: null,
    created_at: "",
  },
  userContractInformation: {
    userHasSigned: false,
    userContractImage: "",
    userContractSHA: null,
  },
  simulationPayments: [],
  userPaymentInformation: {
    biWeeklyAmount: 0,
    creditLineAmount: 0,
  },
  currentUserStep: 0,
  //userPaymentsInformation: [
  /**
     *Example
     {
      IdPayment: "",
      email:"",
      paymentDate:"",
      transactionType:null,
      paymentAmount: null,
      idPayment:""  on wich one we are 1, 2, 3, 4...,
      realPaymentDate:"" when the user pay
      conektaIdPayment:null
      } 
     */
  //],
};

export const UserAccountSlice = createSlice({
  name: "userAccount",
  initialState,
  reducers: {
    setUserInformation(state, { payload }) {
      state.userInformation = payload;
    },
    setSimulationPayments(state, { payload }) {
      state.simulationPayments = payload;
    },
    setPaymentAmounts(state, { payload }) {
      state.userPaymentInformation = payload;
    },
  },
});

export const { setUserInformation, setSimulationPayments, setPaymentAmounts } =
  UserAccountSlice.actions;

export default UserAccountSlice.reducer;
//Selectors
export const selectuserInformation = (state) =>
  state.user ? state.user.userInformation : null;
export const selectCreditLineAndPaymentAmounts = (state) =>
  state.user ? state.user.userPaymentInformation : null;
export const selectSimulationPaymentsInformation = (state) =>
  state.user ? state.user.simulationPayments : [];
