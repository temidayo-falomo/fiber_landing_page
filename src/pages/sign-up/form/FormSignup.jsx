import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';

//CSS file
import './Form.css'

const FormSignup = ({submitForm}) => {
  const {handleChange, values, handleSubmit, errors} = useForm(submitForm,validate);

  return (
    <div className="form-content-left">
      <h2>Create your Fiber Account</h2>
      <form className='form' onSubmit={handleSubmit}>
        <div className="form-inputs">
           <label htmlFor='username' className='form-label'>
             Your Name
           </label>
           <input
            id='username' 
            type="text" 
            name='username' 
            className="form-input"
            placeholder='John Doe'
            value={values.username}
            onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
        </div>

        <div className="form-inputs">
           <label htmlFor='email' className='form-label'>
            E-mail
           </label>
           <input
            id='email'
            type="email"
            name='email'
            className="form-input"
            placeholder='john@example.com'
            value={values.email}
            onChange={handleChange}
             />
              {errors.username && <p>{errors.email}</p>}
        </div>

        <div className="form-inputs">
           <label htmlFor='password' className='form-label'>
            Password
           </label>
           <input id='password'
            type="password"
            name='password'
            className="form-input"
            placeholder='At least 8 characters' 
            value={values.password}
            onChange={handleChange}
            />
             {errors.username && <p>{errors.password}</p>}
        </div>

        <div className="form-inputs">
           <label htmlFor='password2' className='form-label'>
            Confirm Password
           </label>
           <input id='password2' 
           type="password" 
           name='password2' 
           className="form-input" 
           placeholder='Enter your password' 
           value={values.password2}
           onChange={handleChange}
           />
            {errors.username && <p>{errors.password2}</p>}
        </div>

        <div className='ask'>
          <input type='checkbox' />
          <p>
            By creating an account with fiber you agree to the <a href='/'>Terms
            & Conditions.</a>
          </p>
        </div>

        <button className='form-input-btn' type='submit'>
            Create Fiber Account
        </button>

        <span className='form-input-login'>
          Already have an account? Login <a href='#'>here</a>
        </span>
      </form>
    </div>
  )
}

export default FormSignup