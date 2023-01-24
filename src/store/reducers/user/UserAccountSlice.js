import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInformation: {},
  userContractInformation: {
    userHasSigned: false,
    userContractImage: "",
    userContractSHA: null,
  },
  simulationPayments: [],
  userPaymentInformation: {
    biWeeklyAmount: 500,
    creditLineAmount: 500 * 10,
  },
  userOTPProcessInformation: {
    correo: "",
    numero: "",
    semilla: "",
  },
  waitingForOtp: false,
  currentUserNumberPayment: 0,
  isAuth: false,
  // New
  paymentsList: [], 
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
    setOTPUserSemilla(state, { payload }) {
      state.userOTPProcessInformation = payload;
    },
    setWaitingForOtp(state, { payload }) {
      state.waitingForOtp = payload;
    },
    setCurrentNumberUserPayment(state, { payload }) {
      state.currentUserNumberPayment = payload;
    },
    setUserAuth(state, { payload }) {
      state.isAuth = payload;
    },

    // New
    setPaymentsList(state, { payload }) {
      state.truPayments = payload;
    },
  },
});

export const {
  setUserInformation,
  setSimulationPayments,
  setPaymentAmounts,
  setOTPUserSemilla,
  setWaitingForOtp,
  setCurrentNumberUserPayment,
  setUserAuth,

  // New
  setPaymentsList,

} = UserAccountSlice.actions;

export default UserAccountSlice.reducer;
//Selectors
export const selectuserInformation = (state) =>
  state.user ? state.user.userInformation : null;
export const selectCreditLineAndPaymentAmounts = (state) =>
  state.user ? state.user.userPaymentInformation : null;
export const selectOTPInformation = (state) =>
  state.user ? state.user.userOTPProcessInformation : null;
export const selectIsWaitingForOTPCode = (state) =>
  state.user ? state.user.waitingForOtp : null;
export const selectSimulationPaymentsInformation = (state) =>
  state.user ? state.user.simulationPayments : [];
export const selectCurrentNumberUserPayment = (state) =>
  state.user ? state.user.currentUserNumberPayment : null;
export const selectIsUserAuth = (state) =>
  state.user ? state.user.isAuth : false;
  
  // New  
export const selectPaymentList = (state) =>
  state.user ? state.user.paymentsList : []

