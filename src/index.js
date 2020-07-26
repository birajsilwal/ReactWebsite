import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TopHeader from './components/TopHeader';
// import 'bootstrap/scss/bootstrap.scss';

ReactDOM.render(
  <React.StrictMode>
    <TopHeader />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
