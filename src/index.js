import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import RemoveCartModal from "./components/RemoveCartModal";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <RemoveCartModal />
  </React.StrictMode>,
  document.getElementById('root')
);
