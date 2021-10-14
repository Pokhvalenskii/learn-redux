import './SignUp.css';
import { useSelector, useDispatch } from 'react-redux';
import  * as types from '../../store/signUp/actions'
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import { Box } from '@mui/system';
import { Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'


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
    // console.log('data: ', data)
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

  // console.log('ErrorUp', errors)
  // console.log('itemUp', item)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
      component='section'
    >
      <Typography 
        variant='h5'
        component='p'
        align='center'
        sx={{
          mb: 2
        }}
      >
        SignUp
      </Typography>
      <Box 
        onSubmit={handleSubmit(onSubmit)}
        component='form'
        sx={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <TextField
          label='Name'
          sx={{mb: 1}}
          variant="outlined" 
          type="text" 
          className='signUp__input' 
          {...register('name', {required: true, minLength:3, maxLength:30})}
        />
        <TextField
          label='Email'
          sx={{mb: 1}}
          variant="outlined"   
          type="text" 
          className='signUp__input'
          {...register('email', {required: true, pattern: regEmail})}
        />
        <TextField
          label='Password'
          sx={{mb: 1}}
          variant="outlined"  
          type="password" 
          className='signUp__input'
          {...register('password', {required: true, minLength:3, maxLength:30})}
        />
        <TextField
          label='Confirm password'
          sx={{mb: 1}}
          variant="outlined"  
          type="password" 
          className='signUp__input'
          {...register('confirmPassword', {required: true, minLength:3, maxLength:30})}
        />
        <Button
          variant="contained"
          type='submit'
          sx={{
            mt: 2,
            height: 56
          }}
        >
          Sign Up
        </Button>
      </Box>
      <Link 
        underline='none'
        component={RouterLink}
        to='/signin'
        sx={{
          mt: 2,
        }}
        align='center'
      >
        Sign Up
      </Link>
    </Box>
  )
}

export default SignUp