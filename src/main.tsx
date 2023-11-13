import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/main.scss';
import ErrorBoundary from './features/ErrorBoundary/ErrorBoundary';
import ErrorButton from './features/ErrorButton/ErrorButtonView';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { defState, action } from './types/interfaces';

const defState: defState = {
  cash: 0,
};

const action: action = { type: '', payload: 5 };

const reducer = (state: defState = defState, action: action) => {
  switch (action.type) {
    case 'ADD_CASH':
      return { ...state, cash: state.cash + action.payload };
    case 'GET_CASH':
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <BrowserRouter>
        <ErrorButton />
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </Provider>
);
