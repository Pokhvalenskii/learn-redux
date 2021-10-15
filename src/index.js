import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import { rootReducer } from './store/reducers';
import { BrowserRouter } from 'react-router-dom';


const store = createStore(rootReducer)
// console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>    
  </React.StrictMode>,
  document.getElementById('root')
);