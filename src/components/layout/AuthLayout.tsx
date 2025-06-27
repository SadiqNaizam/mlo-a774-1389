import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <main className="flex items-center justify-center min-h-screen w-full">
      {children}
    </main>
  );
};

export default AuthLayout;