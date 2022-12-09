import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import thunk from "redux-thunk";

//Slices
import userAccountReducer from "../store/reducers/user/UserAccountSlice";

const persistConfig = {
  key: "genomic_life",
  storage,
};

const reducers = combineReducers({
  user: userAccountReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const persist = persistedReducer;

export default configureStore({
  reducer: persist,
  middleware: [thunk],
});
