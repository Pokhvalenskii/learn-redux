import './SignUp.css';
import { useSelector, useDispatch } from 'react-redux';
import  * as types from '../../store/signUp/actions'
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'

function SignUp() {

  const regEmail = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/
  const item = useSelector((state) => state.signUp)
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
  } = useForm({mode: 'onChange'});

  function onSubmit(data) {
    console.log('data: ', data)
    dispatch({
      type: types.SIGNUP_SET_USERNAME,
      payload: data.name
    })
    dispatch({
      type: types.SIGNUP_SET_EMAIL,
      payload: data.email
    })
    dispatch({
      type: types.SIGNUP_SET_PASSWORD,
      payload: data.password
    })
    dispatch({
      type: types.SIGNUP_SET_CONFIRM_PASSWORD,
      payload: data.confirmPassword
    })
    console.log('Отправлено: ', data)
  }

  console.log('ErrorUp', errors)
  console.log('itemUp', item)

  return (
    <section className='signUp'>
      <p className='signUp__title'>SignUp</p>
      <form action="" className='signUp__form' onSubmit={handleSubmit(onSubmit)}>
        {/* <p className='signUp__text'>name</p> */}
        <TextField
          sx={{mb: 1}}
          variant="outlined" 
          type="text" 
          className='signUp__input' 
          {...register('name', {required: true, minLength:3, maxLength:30})}
        />
        {/* <p className='signUp__text'>email</p> */}
        <TextField
          sx={{mb: 1}}
          variant="outlined"   
          type="text" 
          className='signUp__input'
          {...register('email', {required: true, pattern: regEmail})}
        />
        {/* <p className='signUp__text'>password</p> */}
        <TextField
          sx={{mb: 1}}
          variant="outlined"  
          type="password" 
          className='signUp__input'
          {...register('password', {required: true, minLength:3, maxLength:30})}
        />
        {/* <p className='signUp__text'>confirm password</p> */}
        <TextField
          sx={{mb: 1}}
          variant="outlined"  
          type="password" 
          className='signUp__input'
          {...register('confirmPassword', {required: true, minLength:3, maxLength:30})}
        />
        <Button
          variant="contained"
          type='submit'>submit
        </Button>
      </form>
    </section>
  )
}

export default SignUp