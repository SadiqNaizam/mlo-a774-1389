import * as React from 'react';
import { cn } from '@/lib/utils';

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'w-full bg-transparent py-2 text-base text-card-foreground placeholder:text-muted-foreground',
          'border-0 border-b border-input focus:outline-none focus:ring-0 focus-visible:ring-0 focus:border-primary transition-colors',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      />
    );
  }
);
FormInput.displayName = 'FormInput';

export default FormInput;
