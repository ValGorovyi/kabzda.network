import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import StoreContext from './redux/storeContext';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const RenderAll = () => {
  root.render(
        <App/>

  );
}
RenderAll();

store.subscribe( () => {
    RenderAll();
  }
)




