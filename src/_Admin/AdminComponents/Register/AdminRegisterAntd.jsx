import React from 'react';
import { Form, Input, Button, Radio, Select, Cascader, DatePicker, InputNumber, TreeSelect, Switch, } from 'antd';
import { NavLink } from 'react-router-dom';

export default function AdminRegisterAntd() {

  const onFinish = (values) => {
    // You will get all the values of the form here.
    console.log('values => ', values);
  }

  const specialization = [
    { cityName: 'City1', cityId: 1 },
    { cityName: 'City2', cityId: 2 },
    { cityName: 'City3', cityId: 3 },
  ]

  return (
    <div>
      <p><NavLink to="/admin-login">Login</NavLink></p>
      <p><NavLink to="/admin-register">Normal Register</NavLink></p>
      <p><NavLink to="/admin-register-formik">Register Via Formik and Yup</NavLink></p>
      <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} layout="horizontal" onFinish={onFinish} >
        <Form.Item label="Input">
          <Input />
        </Form.Item>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
            <Select.Option value="demo1">Demo1</Select.Option>
            <Select.Option value="demo2">Demo2</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="TreeSelect">
          <TreeSelect treeData={[{ title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] }]} />
        </Form.Item>
        <Form.Item label="Cascader">
          <Cascader options={[{ value: 'zhejiang', label: 'Zhejiang', children: [{ value: 'hangzhou', label: 'Hangzhou' }] }]} />
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Switch">
          <Switch />
        </Form.Item>
        <Form.Item name="specialization" rules={[{
          required: true,
          message: 'Must select the Specialization'
        }]}>
          <Select showSearch placeholder="Select Your Specialization">
            {specialization.map(data => (
              <Select.Option key={data.cityId} value={data.cityId}>
                {data.cityName}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Button">
          <Button htmlType="submit">Button</Button>
        </Form.Item>
      </Form>
    </div>
  )
}
