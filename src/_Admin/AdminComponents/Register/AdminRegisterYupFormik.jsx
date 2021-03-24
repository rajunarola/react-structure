
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default class AdminRegisterYupFormik extends Component {
  render() {

    const onFinish = (values) => {
      // You will get the values here
      console.log('values => ', values);
    }

    return (
      <div>
        <p><NavLink to="/admin-login">Login</NavLink></p>
        <p><NavLink to="/admin-register-antd">Register Via Antd</NavLink></p>
        <p><NavLink to="/admin-register-formik">Register Via Formik and Yup</NavLink></p>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            phoneNumber: ''
          }}
          validationSchema={Yup.object().shape({
            firstName: Yup.string()
              .min(2, "Too Short!")
              .max(50, "Too Long!")
              .required('First Name is required'),
            lastName: Yup.string()
              .min(2, "Too Short!")
              .max(50, "Too Long!")
              .required('Last Name is required'),
            email: Yup.string()
              .email('Email is invalid')
              .required('Email is required'),
            password: Yup.string()
              .min(6, 'Password must be at least 6 characters')
              .required('Password is required'),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref('password'), null], 'Passwords must match')
              .required('Confirm Password is required'),
            phoneNumber: Yup.string()
              .required("Phone number is required")
              .matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                "Invalid phone number"
              )
          })}
          onSubmit={onFinish}
          render={({ errors, touched }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                <ErrorMessage name="email" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <Field name="phoneNumber" type="text" className={'form-control' + (errors.phoneNumber && touched.phoneNumber ? ' is-invalid' : '')} />
                <ErrorMessage name="phoneNumber" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                <ErrorMessage name="password" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary mr-2">Register</button>
                <button type="reset" className="btn btn-secondary">Reset</button>
              </div>
            </Form>
          )} />
      </div>
    )
  }
}
