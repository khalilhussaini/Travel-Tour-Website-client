import React from 'react';
import { Auth0Provider } from 'react-auth0-spa';

const AuthProvider = ({ children }) => {
  const domain = 'dev-e8adm88h4os40q5w.us.auth0.com';
  const clientId = 'HoAMUPQLwR49sfgFIXUgxtRAaod849cL';

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
