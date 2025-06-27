import React from 'react';
import { Button } from '../ui/button';

interface FormActionsProps {
  primaryActionText: string;
  onPrimaryAction: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const FormActions: React.FC<FormActionsProps> = ({ primaryActionText, onPrimaryAction }) => {
  return (
    <Button type="submit" className="w-full" onClick={onPrimaryAction}>
      {primaryActionText}
    </Button>
  );
};

export default FormActions;