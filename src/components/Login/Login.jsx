import React from 'react'
import s from './Login.module.css'
import LoginReduxForm from './LoginForm/LoginForm'
import { connect } from 'react-redux'
import { login } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'
const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }
  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }
  return (
    <div className={s.loginForm}>
      <a href="#">
        <img
          src="https://themified.com/friend-finder/images/logo.png"
          alt="#"
        />
      </a>
      <h2 className={s.loginTitile}>Find My Friends</h2>
      <div className={s.wrapperLoginForm}>
        <div className={s.loginText}>
          <p>Signup now and meet awesome people around the world</p>
        </div>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login })(Login)
