import './SignIn.css'
import { useSelector, useDispatch } from 'react-redux';
import  * as types from '../../store/signIn/actions'

function SignIn() {

  const item = useSelector((state) => state.signIn)
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()    
    console.log('SUBMIT CLICK', item)
  }

  function handlePassword(e) {    
    dispatch({
      type: types.SIGNIN_SET_PASSWORD,
      payload: e.target.value
    })
    console.log('storeItem', item)
  }

  function handleEmail(e) {
    dispatch({
      type: types.SIGNIN_SET_EMAIL,
      payload: e.target.value
    })
    console.log('storeItem', item)
  }

  return (
    <section className='signIn'>
      <p className='signIn__title'>SignIn</p>
      <form className='signIn__form' onSubmit={handleSubmit}>
        <p className='signIn__text'>name</p>
        <input type="text" className='signIn__input' onChange={handleEmail}/>
        <p className='signIn__text'>password</p>
        <input type="password" className='signIn__input' onChange={handlePassword}/>
        <button type='submit'>submit</button>
      </form>
    </section>
  )
}

export default SignIn