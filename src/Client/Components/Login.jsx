import React, { useState } from 'react'

export default function Login() {

    const useForm = (initialValues, validate) => {
        const [inputs, setInputs] = useState(initialValues);
        const [errors, setErrors] = useState({});

        const handleSubmit = (event) => {
            event.preventDefault();
            const validationErrors = validate(inputs);
            const noErrors = Object.keys(validationErrors).length === 0;
            setErrors(validationErrors);
            if (noErrors) {
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
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email Address</label>
                    <input className="form-control" type="email" name="email" onChange={handleInputChange} value={inputs.email} required />
                </div>
                {errors.email && <p>errors.email</p>}
                <div className="form-group">
                    <label>Password</label>
                    <input className="form-control" type="password" name="password" onChange={handleInputChange} value={inputs.password} required />
                </div>
                {errors.password && <p>errors.password</p>}
                <button className="btn btn-dark" type="submit">Submit</button>
            </form>
        </div>
    )
}
