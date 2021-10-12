import './App.css';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

function App() {

  return (
    <div className="app">
      <SignUp />
      <span className='app__center-line'></span>
      <SignIn />      
    </div>
  );
}

export default App;
