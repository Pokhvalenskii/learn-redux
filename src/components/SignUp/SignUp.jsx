import './SignUp.css';
import { useSelector, useDispatch } from 'react-redux';
import  * as types from '../../store/signUp/actions'

function SignUp() {

  const item = useSelector((state) => state.signUp)
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault();
    console.log('click', item)
  }

  function handleChangeName(e) {
    dispatch({
      type: types.SIGNUP_SET_USERNAME,
      payload: e.target.value
    })
    console.log('Check', item)
  }
  
  function handleChangeEmail(e) {
    dispatch({
      type: types.SIGNUP_SET_EMAIL,
      payload: e.target.value
    })
    console.log('Check', item)
  }

  function handleChangePassword(e) {
    dispatch({
      type: types.SIGNUP_SET_PASSWORD,
      payload: e.target.value
    })
    console.log('Check', item)
  }

  function handleChangeConfirmPassword(e) {
    dispatch({
      type: types.SIGNUP_SET_CONFIRM_PASSWORD,
      payload: e.target.value
    })
    console.log('Check', item)
  }

  return (
    <section className='signUp'>
      <p className='signUp__title'>SignUp</p>
      <form action="" className='signUp__form' onSubmit={handleSubmit}>
        <p className='signUp__text'>name</p>
        <input 
          type="text" 
          className='signUp__input' 
          onChange={handleChangeName}
        />
        <p className='signUp__text'>email</p>
        <input 
          type="email" 
          className='signUp__input'
          onChange={handleChangeEmail}
        />
        <p className='signUp__text'>password</p>
        <input 
          type="password" 
          className='signUp__input'
          onChange={handleChangePassword}
        />
        <p className='signUp__text'>confirm password</p>
        <input 
          type="password" 
          className='signUp__input'
          onChange={handleChangeConfirmPassword}
        />
        <button 
        type='submit'>submit</button>
      </form>
    </section>
  )
}

export default SignUp