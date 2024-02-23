import React from 'react';
import ReactDOM from 'react-dom/client';
import "react-toastify/dist/ReactToastify.css";
import './index.css';
import App from './App';
import store from "./redux/store";
import { Provider } from "react-redux";
//  import axios from "axios";
//  axios.defaults.baseURL="https://tod-api-j81j.onrender.com";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

