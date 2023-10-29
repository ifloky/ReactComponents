import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/main.scss';
import ErrorBoundary from './features/ErrorBoundary/ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
