import React, { Component } from 'react';
import { Form, Button, Input } from 'antd';
import { adminClientLogin } from '../../../func';
import { Link, withRouter } from 'react-router-dom';

class AdminLoginAntd extends Component {

  render() {

    const onFinish = values => {
      adminClientLogin(values, this.props)
    };

    return (
      <div className="card-body">
        <Link to="/admin-login">Normal Login</Link>
        <Link to="/admin-login-formik">Login Via Formik and Yup</Link>
        <h3>This is Login Using Antd</h3>

        <Form name="normal_login" initialValues={{ remember: false }} onFinish={onFinish}>
          <Form.Item name="email"
            rules={[{ required: true, type: 'email', message: 'Enter valid email address' }]}>
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
            <Input type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <div className="d-flex justify-content-center">
              <Button type="primary" htmlType="submit">
                Log in
               </Button><br />
            </div>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default withRouter(AdminLoginAntd)
