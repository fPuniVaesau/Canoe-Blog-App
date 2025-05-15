// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import React from 'react';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

