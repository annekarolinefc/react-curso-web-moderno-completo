import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Primeiro from './components/Primeiro';
import BomDia from './components/BomDia';
import { BoaTarde, BoaNoite } from "./components/Multiplos.jsx"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Primeiro/>
    <BomDia name="Anne" />
    <BoaTarde name="Anne" />
    <BoaNoite name="Anne" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
