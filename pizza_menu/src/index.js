import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import Dev from "./dev/Dev.jsx";
import TextExpander from './TextExpander';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <TextExpander />
    {/* <Dev/> */}
  </React.StrictMode>
);

