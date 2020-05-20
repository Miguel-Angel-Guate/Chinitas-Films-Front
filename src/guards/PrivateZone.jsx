import React from 'react';
import { Redirect } from 'react-router-dom';

const PrivateZone = ({ children }) => {
  const hasToken = localStorage.getItem('authToken');
  console.log(hasToken)
  return hasToken ?  children : (
    <Redirect
      to={{
        pathname: '/signIn',
      }}
    />
  );
};
export default PrivateZone;
