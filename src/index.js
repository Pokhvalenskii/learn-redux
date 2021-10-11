import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';
import * as typesFunctions from './actions/NameActions'
import { newReducer } from './reducers/Name';

/////////////////////////////////////////////
import rootReducer from './store/reducers'
/////////////////////////////////////////////


const store = createStore(rootReducer);

console.log('store ', store)

// const putStateToProps = (state) => {
//   return {
//     firstName: state.firstName,
//     secondName: state.secondName
//   }
// }

// const putActionToProps = (dispatch) => {
//   return {
//     changeFirstName: bindActionCreators(typesFunctions.changeFirstName, dispatch),
//     changeSecondName: bindActionCreators(typesFunctions.changeSecondName, dispatch)
//   }
// }

// const WrapperMainComponent  = connect(putStateToProps, putActionToProps)(App)

const mapStateToProps = () => {
  return {

  }
}

const mapDispatchToProps = () => {
  return {

  }
}

const WrapperMainComponent = connect(mapStateToProps, mapDispatchToProps)(App);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <WrapperMainComponent />
      {/* <App /> */}
    </Provider>    
  </React.StrictMode>,
  document.getElementById('root')
);