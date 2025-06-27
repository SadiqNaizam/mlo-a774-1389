import React from 'react';
import FormInput from './FormInput';

const LoginForm: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // A real form would have a submit handler passed via props or context
  // For this component structure, state is managed internally for simplicity.

  return (
    <div className="w-full flex flex-col gap-8">
      <FormInput
        id="email"
        name="email"
        type="email"
        placeholder="Email Address"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <FormInput
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
    </div>
  );
};

export default LoginForm;
