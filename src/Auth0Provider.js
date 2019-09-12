import React, { useState, useEffect, useContext } from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';

const DEFAULT_REDIRECT_CALLBACK = () => {
  window.history.replaceState({}, document.title, window.location.pathname);
};
export const Auth0Context = React.createContext();
export const useAuth0 = () => useContext(Auth0Context);
export const withSession = Comp => {
  return function WithSessionHOC(props) {
    const { isAuthenticated, loading, auth0Client } = useAuth0();
    if(!isAuthenticated && !loading) auth0Client.loginWithRedirect();
    if(!isAuthenticated) return null;
    return <Comp {...props} />;
  };
};
export default function Auth0Provider({
  // eslint-disable-next-line react/prop-types
  children, onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  ...initOptions
}) {
  const [isAuthenticated, updateIsAuthenticated] = useState(false);
  const [user, setUser] = useState();
  const [auth0Client, setAuth0Client] = useState();
  const [loading, updateLoading] = useState(true);
  useEffect(() => {
    const initAuth0 = async() => {
      const auth0 = await createAuth0Client(initOptions);
      setAuth0Client(auth0);
      if(window.location.search.includes('code=')) {
        const { appState } = await auth0.handleRedirectCallback();
        onRedirectCallback(appState);
      }
      const isAuthenticated = await auth0.isAuthenticated();
      updateIsAuthenticated(isAuthenticated);
      if(isAuthenticated) {
        const user = await auth0.getUser();
        setUser(user);
      }
      updateLoading(false);
    };
    initAuth0();
  }, []);
  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        user,
        auth0Client,
        loading
      }}
    >
      {children}
    </Auth0Context.Provider>
  );
}
