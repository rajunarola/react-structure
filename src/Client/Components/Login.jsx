import React, { useState } from 'react'
import { withRouter } from 'react-router';

function Login(props) {
  console.log('props.history => ', props.history);

  const useForm = (initialValues, validate) => {
    const [inputs, setInputs] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
      event.preventDefault();
      const validationErrors = validate(inputs);
      const noErrors = Object.keys(validationErrors).length === 0;
      setErrors(validationErrors);
      if (noErrors) {
        props.history.push(`/client-dashboard`)
        console.log("Authenticated", inputs);
      } else {
        console.log("errors try again", validationErrors);
      }
    }

    const handleInputChange = (event) => {
      event.persist();
      setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    }

    return {
      handleSubmit,
      handleInputChange,
      inputs,
      errors
    };
  }

  const validate = (inputs) => {
    // Email errors
    const errors = {};
    if (!inputs.email) {
      errors.email = 'Check Email';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputs.email)
    ) {
      errors.email = 'Invalid email address';
    }

    // Password Errors
    if (!inputs.password || inputs.password.length < 6) {
      errors.password = 'Check Password'
    }
    return errors;
  }

  const { inputs, handleInputChange, handleSubmit, errors } = useForm({ email: '', password: '' }, validate);

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-10">
            <div className="wrap d-md-flex">
              <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                <div className="text w-100">
                  <h2>Welcome to login</h2>
                  <p style={{ textDecorationColor: "white" }}>Don't have an account?</p>
                  <a href="#" className="btn btn-white btn-outline-white">Sign Up</a>
                </div>
              </div>
              <div className="login-wrap p-4 p-lg-5">
                <div className="d-flex">
                  <div className="w-100">
                    <h3 className="mb-4">Sign In</h3>
                  </div>
                  <div className="w-100">
                    <p className="social-media d-flex justify-content-end">
                      <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-facebook"></span></a>
                      <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-twitter"></span></a>
                    </p>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="signin-form">
                  <div className="form-group mb-3">
                    <label className="label" for="name">Username</label>
                    <input className="form-control" type="email" name="email" onChange={handleInputChange} value={inputs.email} required />
                    {errors.email && <p>errors.email</p>}
                  </div>
                  <div className="form-group mb-3">
                    <label className="label" for="password">Password</label>
                    <input className="form-control" type="password" name="password" onChange={handleInputChange} value={inputs.password} required />
                    {errors.password && <p>errors.password</p>}
                  </div>
                  <div className="form-group">
                    <button type="submit" className="form-control btn btn-primary submit px-3">Sign In</button>
                  </div>
                  <div className="form-group d-md-flex">
                    <div className="w-50 text-left">
                      <label className="checkbox-wrap checkbox-primary mb-0">Remember Me
                        <input type="checkbox" checked="" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="w-50 text-md-right">
                      <a href="#">Forgot Password</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default withRouter(Login)