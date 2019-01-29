

import React from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux'
import configureStore from './configureStore'


import { fetchHomes, fetchCities } from './components/Main_section/Home_page/Home_page.action'
import App from "./App";


const store = configureStore()


store.dispatch(fetchHomes())
store.dispatch(fetchCities())


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);


