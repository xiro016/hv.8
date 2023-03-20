import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { App } from "./components";
import store from "./store/store";
import BookStoreService from "./services";
import { BookContext } from "./helpers";

const service = new BookStoreService();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BookContext.Provider value={service}>
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </BookContext.Provider>
  </React.StrictMode>
);
