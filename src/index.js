import React from 'react';
import ReactDOM from 'react-dom/client';
import "./clear.scss";
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';
import {App} from './App';
import { BrowserRouter } from 'react-router-dom';

// БД от гугла
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArVF-1GKMCq55ujbHBHowirYfjySifs24",
  authDomain: "coffeebrand-465c3.firebaseapp.com",
  databaseURL: "https://coffeebrand-465c3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "coffeebrand-465c3",
  storageBucket: "coffeebrand-465c3.appspot.com",
  messagingSenderId: "145068094213",
  appId: "1:145068094213:web:cf4d710cb83be682bcbd6c",
  measurementId: "G-C37ZXLDD3S"
};

const databaseApp = initializeApp(firebaseConfig);
const database = getDatabase(databaseApp);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
export {database}