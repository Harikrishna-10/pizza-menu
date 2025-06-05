import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import Dev from "./dev/Dev.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Dev/>
  </React.StrictMode>
);

