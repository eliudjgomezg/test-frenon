import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import Layout from './layout';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
      <Layout />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

