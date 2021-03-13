import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { adminClientLogin } from '../../../func';
import { Link, withRouter } from 'react-router-dom';

function AdminLoginYupFormik(props) {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email format")
                .required("Email is required!"),
            password: Yup.string()
                .min(8, "Minimum 8 characters")
                .required("Password is required!")
        }),
        onSubmit: (values) => {
            adminClientLogin(values, props)
        }
    });

    return (
        <div>
            <Link to="/admin-login">Normal Login</Link>
            <Link to="/admin-login-antd">Login Via Antd</Link>
            <h3>This is Login Using Formik and Yup</h3>
            <form onSubmit={formik.handleSubmit}>
                <div controlId="formBasicEmail" className="form-row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <input className="form-input" type="email" name="email" value={formik.values.email} onChange={formik.handleChange} />
                            {formik.errors.email && formik.touched.email && (
                                <p className="text-danger">{formik.errors.email}</p>
                            )}
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <label className="form-label">Password</label>
                            <input className="form-input" type="password" name="password" value={formik.values.password} onChange={formik.handleChange} />
                            {formik.errors.password && formik.touched.password && (
                                <p className="text-danger">{formik.errors.password}</p>
                            )}
                        </div>
                    </div>
                    <div className="col-md-12">
                        <button className="btn btn-secondary" type="submit" variant="secondary">Login </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default withRouter(AdminLoginYupFormik)