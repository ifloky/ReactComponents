import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/main.scss';
import ErrorBoundary from './features/ErrorBoundary/ErrorBoundary';
import ErrorButton from './features/ErrorButton/ErrorButtonView';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <BrowserRouter>
        <ErrorButton />
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
