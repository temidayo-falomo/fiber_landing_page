import React from 'react'
import FormSlider from '../form-slider/FormSlider'
import Form from '../form/Form'
import './SignUp.css'

const SignUp = () => {
  return (
    <div className='sign-up'>
      <div className='sign-up-container'>
        <Form />
        <FormSlider/>
        </div>
    </div>
  )
}

export default SignUp