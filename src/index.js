import React, { Component } from "react";
import { createRoot } from 'react-dom/client';
import App from './App.js';
// import './index.css';
// import i18n (needs to be bundled ;)) 
import './i18n.js';

const root = createRoot(document.getElementById('root'));
root.render(
  <App />
);


