//Bootstrap is a framework used to easily implement styling
//and some functionality like forms, buttons, ect.
//It's seen widespread adoption, and has some unique syntax you'll want to learn.
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//Order of import matters. This order of Bootstrap first, then our index.css after, allows us to override 
//Bootstrap styling if needed.
import './index.css';
import reportWebVitals from './reportWebVitals';

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
