import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function AdminRegister() {

  const [imageView, setImage] = useState(null)

  const useForm = (initialValues, validate) => {
    const [inputs, setInputs] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const handleSubmit = (event) => {
      event.preventDefault();
      const validationErrors = validate(inputs);
      const noErrors = Object.keys(validationErrors).length === 0;
      setErrors(validationErrors);
      if (noErrors) {
        // Call API if no errors
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
    if (!inputs.password || inputs.password.length < 6 || inputs.password.length < 10) {
      errors.password = 'Password should be between 6 to 10 characters'
    }
    // Text Box Error
    if (!inputs.fname || inputs.fname.length < 6) {
      errors.fname = 'Check Length'
    }
    return errors;
  }

  const { inputs, handleInputChange, handleSubmit, errors } = useForm({
    email: '',
    password: '',
    fname: '',
    mname: '',
    lname: ''
  }, validate);


  const saveFile = (event) => {
    // If image is to be sent in the API as (binary) format then send only : event.target.files[0])
    // URL.createObjectURL is used to display image
    setImage(URL.createObjectURL(event.target.files[0]))
  }

  return (

    <div className="container-fluid register">
      <p><NavLink to="/admin-login">Login</NavLink></p>
      <p><NavLink to="/admin-register-antd">Register Via Antd</NavLink></p>
      <p><NavLink to="/admin-register-formik">Register Via Formik and Yup</NavLink></p>
      <h2>This is Normal Register</h2>
      <div className="row">
        <div className="col-md-9 register-right">
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>First Name</label>
                  <input className="form-control" type="text" name="fname" onChange={handleInputChange} value={inputs.fname} required />
                </div>
                {errors.fname && (
                  <p className="text-danger">{errors.fname}</p>
                )}
                <div className="form-group">
                  <label>Middle Name</label>
                  <input className="form-control" type="text" name="mname" onChange={handleInputChange} value={inputs.mname} required />
                </div>
                {errors.mname && (
                  <p className="text-danger">{errors.mname}</p>
                )}
                <div className="form-group">
                  <label>Last Name</label>
                  <input className="form-control" type="text" name="lname" onChange={handleInputChange} value={inputs.lname} required />
                </div>
                {errors.lname && (
                  <p className="text-danger">{errors.lname}</p>
                )}
                <div className="form-group">
                  <label>Email Address</label>
                  <input className="form-control" type="text" name="email" onChange={handleInputChange} value={inputs.email} required />
                </div>
                {errors.email && (
                  <p className="text-danger">{errors.email}</p>
                )}
                <div className="form-group">
                  <label>Password</label>
                  <input className="form-control" type="password" name="password" onChange={handleInputChange} value={inputs.password} required />
                </div>
                {errors.password && <p className="text-danger">{errors.password}</p>}
                <div className="form-group">
                  <label>Image</label>
                  <input className="form-control" type="file" name="image" onChange={(e) => saveFile(e)} required />
                  {imageView && <img src={imageView} alt="" height={250} width={250} />}
                </div>
                <button className="btn btn-dark" type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
