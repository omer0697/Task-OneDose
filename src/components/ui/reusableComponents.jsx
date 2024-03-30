import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import './SignInForm.css'; // Make sure to create this CSS file and import it here

const SignInForm = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <div className='flex flex-col gap-10  p-20 w-[40rem] bg-gray-200 rounded-xl'>
      <h1 className='text-one-dose text-2xl font-bold'>The Rick and Morty</h1>
      <Form
        name="SignInForm"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        className='flex flex-col gap-2'
      >
        <Form.Item
          label="Kullanıcı Adı"
          name="username"
          rules={[{ required: true, message: 'Lütfen kullanıcı adınızı giriniz!' }]}
          className="form-item-custom"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Şifre"
          name="password"
          rules={[{ required: true, message: 'Lütfen şifrenizi giriniz!' }]}
          className="form-item-custom"
        >
          <Input.Password />
        </Form.Item>

        <div className='flex'>
          <Button type="link" className='ml-auto' onClick={() => navigate('/register')}>
            Kayıt Ol
          </Button>
        </div>

        <Form.Item className="form-item-custom">
          <Button className='w-full' type="primary" htmlType="submit" size='large'>
            Giriş Yap
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export { SignInForm };
