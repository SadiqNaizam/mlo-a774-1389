import React from 'react';

interface FormHeadingProps {
  title: string;
  description?: string;
}

const FormHeading: React.FC<FormHeadingProps> = ({ title, description }) => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
      {description && <p className="text-sm text-muted-foreground">{description}</p>}
    </div>
  );
};

export default FormHeading;