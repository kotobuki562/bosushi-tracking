/* eslint-disable react/jsx-handler-names */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import './index.css';

import { Auth0Provider } from '@auth0/auth0-react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import { reportWebVitals } from './reportWebVitals';

const domain = process.env.REACT_APP_AUTH_DOMAIN as string;
const clientId = process.env.REACT_APP_CLIENT_ID as string;

ReactDOM.render(
  <StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      useRefreshTokens={true}>
      <App />
    </Auth0Provider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
