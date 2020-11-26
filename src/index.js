/*
 * @Author: ShenLing
 * @Date: 2020-11-24 17:51:57
 * @LastEditors: ShenLing
 * @LastEditTime: 2020-11-25 10:51:49
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import CronGenerator from './components/CronGenerator'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
