import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './SignIn.scss'

import Footer from'../../components/footer/Footer'




export class SignIn extends Component {
       

       onFinish = user => {
         
              console.log(user);
            };
      
       render() {
              return (
                     <div className="signInContainerPage">
                     <div className="chinitasTitleSigInPage">
                     <NavLink to="/home"><p className="chinitasInSignInPage">Chapos Films</p></NavLink>
                     </div>

                     <div className="formInSignInPage">

                     <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={this.onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
     

      <Form.Item>
        <Button  htmlType="submit" className="login-form-button">
          Log in
        </Button>
        <p className="or">Or</p> <NavLink to="/home"><a >Sign Up now!</a></NavLink>
      </Form.Item>
    </Form>
                         </div>
                         <div className="footerDiv">
                         <Footer />
                         </div>

                     </div>
  );
                     

              
       }
}

export default SignIn
