import React from 'react';

import FormActions from '../components/Auth/FormActions';
import FormHeading from '../components/Auth/FormHeading';
import LoginForm from '../components/Auth/LoginForm';

const IndexPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // A real application would handle form submission, e.g., calling an API.
    console.log('Form submitted');
  };

  return (
    <main className="flex h-screen items-center justify-center bg-background p-4">
      {/* 
        The form itself acts as the main content card, following the layout requirements.
        - bg-card (white) provides the surface color against the blue background.
        - w-96 sets a fixed width as specified.
        - p-8 and rounded-lg provide spacing and styling that closely match the visual example.
        - The flex container uses items-center to center the heading, while full-width components
          like LoginForm and FormActions stretch to fill the space, and their internal elements
          handle their own alignment (e.g., 'Forgot Password' link).
        - A gap of 8 units provides consistent spacing, matching the internal gap of LoginForm.
      */}
      <form
        onSubmit={handleSubmit}
        className="flex w-96 flex-col items-center gap-8 rounded-lg bg-card p-8 text-card-foreground shadow-lg"
      >
        <FormHeading />
        <LoginForm />
        <FormActions />
      </form>
    </main>
  );
};

export default IndexPage;
