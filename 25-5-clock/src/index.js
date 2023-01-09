import React from 'react';
import ReactDOM from 'react-dom/client';
import './TimerStyle.scss';
import Timer from './Timer';
import reportWebVitals from './reportWebVitals';

// import FontAwesomeIcon libraries
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);

/* let element = React.createElement('h1', {className: 'greeting'}, 'Hello, World!');
/* ReactDOM.render(element, document.getElementById('root')); */

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    { <Timer />}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
