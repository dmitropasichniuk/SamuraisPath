import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state"

// let posts = [
//   {message:'My first massage!', likeCounter: '14'},
//   {message:'My second massage!', likeCounter: '10'},
// ];

// let dialogs = [
//   {id:1,  name:'Sucka Valera'},
//   {id:2,  name:'Sucka Dimoon'},
// ];

// let messages = [
//   {message:'Hi how are u pidr'},
//   {message:'Little biches'},
// ];

ReactDOM.render(
  <React.StrictMode>
    <App state={state}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
