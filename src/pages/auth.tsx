'use client';

import { AuthForm } from '@/components/auth-form';

export const AuthPage = () => {
  return (
    <div>
      <div className='py-6'>
        Enter your API key to continue
      </div>
      <AuthForm />
    </div>
  );
}

export default AuthPage;