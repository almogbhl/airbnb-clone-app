

import React from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux'
import configureStore from './configureStore'


import { fetchApartments } from './components/Main_section/Browse/Browse.action'
import App from "./App";


const store = configureStore()

store.dispatch(fetchApartments())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);


