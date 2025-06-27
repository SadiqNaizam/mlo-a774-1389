import React from 'react';
import { Button } from '@/components/ui/button';

const FormActions: React.FC = () => {
  return (
    <div className="w-full flex flex-col pt-2">
      <a
        href="#"
        className="text-sm text-muted-foreground hover:text-primary transition-colors self-start"
      >
        Forgot Password
      </a>

      <Button
        type="submit"
        className="w-full rounded-lg h-11 text-base font-medium mt-6"
      >
        Login
      </Button>

      <p className="text-sm text-center text-muted-foreground mt-6">
        Don't have an account?{' '}
        <a href="#" className="font-semibold text-primary hover:underline">
          SignUp
        </a>
      </p>
    </div>
  );
};

export default FormActions;
