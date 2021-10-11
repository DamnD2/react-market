import React from 'react';
import ReactDOM from 'react-dom';
import App from './core/App/App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Launcher from './core/Launcher/Launcher';

ReactDOM.render(
  <Launcher>
    <App />
  </Launcher>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
