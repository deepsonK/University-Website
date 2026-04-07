import React from 'react';
// BUG: Using old ReactDOM import
import ReactDOM from 'react-dom';
import App from './App';

// BUG: render is deprecated, should use createRoot
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// BUG: No error boundary
// BUG: No logging setup
