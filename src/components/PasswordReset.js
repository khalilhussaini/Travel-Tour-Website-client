import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const { resetPassword } = useAuth0();

  const handleResetPassword = () => {
    resetPassword({ email })
      .then(() => {
        console.log('Password reset email sent');
      })
      .catch((error) => {
        console.error('Error resetting password:', error);
      });
  };

  return (
    <div>
      <h1>Reset Password</h1>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleResetPassword}>Reset Password</button>
    </div>
  );
};

export default ResetPassword;
