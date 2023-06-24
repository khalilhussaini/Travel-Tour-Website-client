 import React from 'react';
import { useAuth0 } from 'react-auth0-spa';

const Register = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <h2>Registration Page</h2>
      <button onClick={() => loginWithRedirect({ screen_hint: 'signup' })}>
        Register with Auth0
      </button>
    </div>
  );
};

export default Register;
