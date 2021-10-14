import './SignIn.css'
import { useSelector, useDispatch } from 'react-redux';
import  * as types from '../../store/signIn/actions'
import { useForm } from 'react-hook-form';
import { Box } from '@mui/system';
import { Button, Typography, Link } from '@mui/material';
import TextField from '@mui/material/TextField'
import { Link as RouterLink } from 'react-router-dom'


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
    <Box 
      component='section'
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Typography 
        component='p'
        variant='h5'
        align='center'
        sx={{
          mb: 2
        }}
      >
        SignIn
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
          type='email'
          variant='outlined'
          sx={{mb: 1}}
          label='Email'
          {...register('email', {required: true, pattern: regEmail})} 
        />
        <TextField 
          type="password" 
          {...register('password', {required: true, minLength:3, maxLength:30})}
          label='Password'
          variant='outlined'
          sx={{mb: 1}} 
        />
        <Button 
          type='submit'
          variant='contained'
          sx={{
            mt: 2,
            height: 56
          }}
        >
          Sign In
        </Button>
      </Box>
      <Link 
        underline='none'
        component={RouterLink}
        to='/signup'
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

export default SignIn