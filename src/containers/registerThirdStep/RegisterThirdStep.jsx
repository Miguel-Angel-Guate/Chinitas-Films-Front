import React, { Component } from 'react'
import './RegisterThirdStep.scss'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';


export class RegisterThirdStep extends Component {

       onFinish = values => {
              console.log(values);
            };

       render() {
              
              return (
                     <div className="registerContainer">
                     <div className="headerOfSignUpPlan">
                    <NavLink to='/home' exact><h1>Chapos Films</h1></NavLink>
                    <NavLink to='/signIn' exact><p>Sign in</p></NavLink>
                    </div>
                    <p>Step 3 of 3</p>
                    <h2>Write your eamil and pass to start your <br></br>suscription</h2>
                    <p>Congratulations! you are near to enjoy Chapos Films</p>


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
      
     </Form.Item>
   </Form>
                        </div>
                            
                     </div>
              )
       }
}

export default RegisterThirdStep
