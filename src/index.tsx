import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import App2 from './App2'
import App3 from './counter'
import App4 from './classCounter'
import App5 from './classCounter(add&minus)'
import App6 from './CssInJs'
import App7 from './Hoc'
import App8 from './Hook'
import App9 from './Hook2'
import App10 from './NewCounter'

ReactDOM.render(
  <React.StrictMode>
    <App10 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
