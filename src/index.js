import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';
import * as typesFunctions from './actions/NameActions'
import { newReducer } from './reducers/Name';

const store = createStore(newReducer);
console.log('Store: ', store.getState());

const putStateToProps = (state) => {
  console.log('mapState ', state);
  return {
    firstName: state.firstName,
    secondName: state.secondName
  }
}

const putActionToProps = (dispatch) => {
  return {
    changeFirstName: bindActionCreators(typesFunctions.changeFirstName, dispatch),
    changeSecondName: bindActionCreators(typesFunctions.changeSecondName, dispatch)
  }
}

const WrapperMainComponent  = connect(putStateToProps, putActionToProps)(App)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <WrapperMainComponent />
    </Provider>    
  </React.StrictMode>,
  document.getElementById('root')
);