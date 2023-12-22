import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

if (!root) {
  throw new Error('React mounting point has not been found!')
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
