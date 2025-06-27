import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import FormHeading from './FormHeading';
import FormInput from './FormInput';
import FormActions from './FormActions';

const LoginForm: React.FC = () => {
    
  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Login attempt");
  };

  return (
    <Card className="w-[380px]">
      <CardHeader>
        <FormHeading title="Welcome Back" description="Enter your credentials to log in." />
      </CardHeader>
      <form>
        <CardContent className="grid gap-4">
          <FormInput label="Email" id="email" type="email" placeholder="name@example.com" />
          <FormInput label="Password" id="password" type="password" placeholder="••••••••" />
        </CardContent>
        <CardFooter>
          <FormActions primaryActionText="Login" onPrimaryAction={handleLogin} />
        </CardFooter>
      </form>
    </Card>
  );
};

export default LoginForm;