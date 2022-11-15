import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//import de create store
import { createStore } from 'redux'

//import du provider
import { Provider } from "react-redux"

//import du fichier counterReducer
import CounterReducer from './Reducers/CounterReducer';

//on créer notre store et on lui passe le reducer
const Store = createStore(CounterReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //on passe notre const = Store en props
  <Provider store={Store}>
    <App />
  </Provider>
);
