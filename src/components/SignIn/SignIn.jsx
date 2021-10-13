import './SignIn.css'
import { useSelector, useDispatch } from 'react-redux';
import  * as types from '../../store/signIn/actions'
import { useForm } from 'react-hook-form';

function SignIn() {

  const item = useSelector((state) => state.signIn)
  const dispatch = useDispatch()

  const regEmail = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/

  const { 
    register, 
    handleSubmit, 
    formState: {errors, submitCount},
    watch,

  } = useForm({mode: 'onChange'});
  
  const onSubmit = data => {
    dispatch({
      type: types.SIGNIN_SET_EMAIL,
      payload: data.email
    })
    dispatch({
      type: types.SIGNIN_SET_PASSWORD,
      payload: data.password
    })
    console.log('Отправлено: ', data)
  }

  console.log('ErrorIn: ', errors)
  console.log('itemIn: ', item)

  return (
    <section className='signIn'>
      <p className='signIn__title'>SignIn</p>
      <form className='signIn__form' onSubmit={handleSubmit(onSubmit)}>
        <p className='signIn__text'>Email</p>
        <input type="text" className='signIn__input' {...register('email', {required: true, pattern: regEmail})} />
        <p className='signIn__text'>Password</p>
        <input type="password" className='signIn__input' {...register('password', {required: true, minLength:3, maxLength:30})} />
        <button type='submit'>submit</button>
      </form>
    </section>
  )
}

export default SignIn