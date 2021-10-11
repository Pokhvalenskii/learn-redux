import './App.css';
import * as types from '../../actions/NameActions'
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

function App(props) {

  return (
    <div className="app">
      {/* <input 
        type='text' 
        className='app__input' 
        value={firstName}
        onChange={(e) => {
          changeFirstName(e.target.value)
        }}
      />
      <input 
        type='text' 
        className='app__input' 
        value={secondName}
        onChange={(e) => {
          changeSecondName(e.target.value)
        }}
      />
      <p className='app__text'>{firstName} {secondName}</p> */}
      <SignUp />
      <span className='app__center-line'></span>
      <SignIn />      
    </div>
  );
}

export default App;
