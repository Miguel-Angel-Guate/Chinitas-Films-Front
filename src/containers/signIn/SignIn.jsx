import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Form, Input, Button, notification} from 'antd';
import { login } from './../../redux/actions/users';
import { useHistory } from 'react-router-dom'
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './SignIn.scss'

import Footer from'../../components/footer/Footer'




const  SignIn = () => {
       const history = useHistory();

       const onFinish = user => {
        login(user).then(() =>{
          notification.success({message:'connected', description:'User Conected successfully'});
          setTimeout(() => {
            history.push('/home')
        }, 1500);
        })
        .catch(error=>{
          console.error(error)
          notification.error({message:'Some wront when to try loggin',description:'some wrong when you try validation'})
      })

            };
      
       
              return (
                     <div className="signInContainerPage">
                     <div className="chinitasTitleSigInPage">
                     <NavLink to="/"><p className="chinitasInSignInPage">Chapos Films</p></NavLink>
                     </div>

                     <div className="formInSignInPage">

                     <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
     const  onFinish={onFinish}
    >
      <Form.Item
        name="email"
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
        <p className="or">Or</p> <NavLink to="/"><a >Sign Up now!</a></NavLink>
      </Form.Item>
    </Form>
                         </div>
                         <div className="footerDiv">
                         <Footer />
                         </div>

                     </div>
  );
                     

              
       }


export default SignIn
