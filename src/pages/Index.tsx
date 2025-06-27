import React from 'react';
import AuthLayout from '../components/layout/AuthLayout';
import LoginForm from '../components/Auth/LoginForm';

const IndexPage: React.FC = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default IndexPage;