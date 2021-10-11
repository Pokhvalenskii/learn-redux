import './SignIn.css'

function SignIn(props) {
  return (
    <section className='signIn'>
      <p className='signIn__title'>SignIn</p>
      <form action="" className='signIn__form'>
        <p className='signIn__text'>name</p>
        <input type="text" className='signIn__input'/>
        <p className='signIn__text'>password</p>
        <input type="password" className='signIn__input'/>
      </form>
    </section>
  )
}

export default SignIn