import React from 'react';
import { createRoot } from 'react-dom/client';
//import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

//BrowserRouter dari react router
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
