/* eslint-disable react/jsx-handler-names */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import './index.css';

import { ApolloProvider } from '@apollo/client/react';
import { Auth0Provider } from '@auth0/auth0-react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { apolloClient } from './apollo/apolloClient';
import { App } from './App';
import { reportWebVitals } from './reportWebVitals';

const domain = process.env.REACT_APP_AUTH_DOMAIN as string;
const client = process.env.REACT_APP_CLIENT_ID as string;

ReactDOM.render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <Auth0Provider
        domain={domain}
        clientId={client}
        redirectUri={window.location.origin}
        useRefreshTokens={true}
        cacheLocation="localstorage">
        <App />
      </Auth0Provider>
    </ApolloProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
