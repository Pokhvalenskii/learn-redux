import './App.css';
import * as types from '../actions/NameActions'

function App(props) {

  const { firstName, secondName, changeFirstName, changeSecondName } = props;
  console.log('props, ', props)

  return (
    <div className="app">
      <input 
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
      <p className='app__text'>{firstName} {secondName}</p>      
    </div>
  );
}

export default App;
