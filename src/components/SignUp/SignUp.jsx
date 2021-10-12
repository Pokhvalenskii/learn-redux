import './SignUp.css';

function SignUp() {
  return (
    <section className='signUp'>
      <p className='signUp__title'>SignUp</p>
      <form action="" className='signUp__form'>
        <p className='signUp__text'>name</p>
        <input type="text" className='signUp__input'/>
        <p className='signUp__text'>email</p>
        <input type="email" className='signUp__input'/>
        <p className='signUp__text'>password</p>
        <input type="password" className='signUp__input'/>
      </form>
    </section>
  )
}

export default SignUp