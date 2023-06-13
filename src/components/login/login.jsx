import React from "react";
import { useForm } from 'react-hook-form';
import { connect } from "react-redux";
import { LogIn } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import css from './login.module.css'

function LoginForm(props) {
  const { register, formState: {errors, isValid},  handleSubmit, clearErrors, setError, reset } = useForm({
    values: {
      email: '',
      password: '',
      rememberMe: false,
    },
    mode: 'onBlur'
  })
  const onSubmit = (formData) => {
    props.LogIn(formData.email,formData.password, formData.rememberMe, setError );
    reset({email:"", password:'', rememberMe: false}, {keepErrors: true})
  }
  
  if(props.isAuth) {
    return <Navigate to={'/profile/'} />
  }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type="email" placeholder="login" {...register('email', {required: 'er required'})} pnFocus={()=> clearErrors(["email", "server"])} />
      </div>
      <div>
        <input type="pasword" placeholder="password" {...register('password')} />
      </div>
      <div>
        <input type="checkbox" {...register('rememberMe')} /> ponav?
      </div>
      <div>
        <button>Login</button>
      </div>
    
    {errors.server && <div className={css.formSamaryError}>
      <span>{errors.server.message}</span>
    </div>}
    </form>
    </>
  )

}

function Login(props) {
  return (<>
    <h1>Login</h1>
    <LoginForm {...props}/>
  </>
  )

}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {LogIn})(Login);