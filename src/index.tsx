import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ApiService from "./core/services/api.service";
import MovieApp from './MovieApp';
import reportWebVitals from './reportWebVitals';
ApiService.init();
ReactDOM.render(
  <React.StrictMode>
    <MovieApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
