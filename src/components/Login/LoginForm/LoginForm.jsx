import React from 'react'
import s from './LoginForm.module.css'
import { Field, reduxForm } from 'redux-form'
import {
  maxLengthCreator,
  required,
} from '../../../utils/validators/validators'
import Element from '../../../hoc/withValidateForm'

const maxLength15 = maxLengthCreator(15)
const Input = Element('input')

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name={'email'}
          placeholder={'Enter a email'}
          component={Input}
          validate={[required, maxLength15]}
        />
      </div>
      <div>
        <Field
          name={'password'}
          placeholder={'Enter a password'}
          type="password"
          component={Input}
          validate={[required, maxLength15]}
        />
      </div>
      <div>
        <Field name={'rememberMe'} type="checkbox" component={Input} /> remember
        me
      </div>
      {error && <div className={s.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm)

export default LoginReduxForm
