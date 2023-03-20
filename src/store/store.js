import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookListReducers from "./reducers/bookListReducers";
import shopCartReducer from "./reducers/shopCartReducers";

const rootReducer = combineReducers({
  BookListReducer: bookListReducers,
  ShopCartReducer: shopCartReducer,
});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

const store = setupStore();

export default store;
