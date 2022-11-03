import React from 'react';
import reactDOM from 'react-dom';
import { ContextProvider } from './contexts/ContextProvider';

import App from './App';
import './index.css';

reactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById('root')
);
