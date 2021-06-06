import './index.css';

import { Auth0Provider } from '@auth0/auth0-react';
import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import { reportWebVitals } from './reportWebVitals';

const MY_AUTH_DOMAIN = process.env.REACT_APP_AUTH_DOMAIN as string;
const MY_AUTH_CLIENT_ID = process.env.REACT_APP_CLIENT_ID as string;

ReactDOM.render(
  <Auth0Provider
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    domain={MY_AUTH_DOMAIN!}
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    clientId={MY_AUTH_CLIENT_ID!}
    redirectUri={window.location.origin}>
    <StrictMode>
      <ChakraProvider resetCSS={false}>
        <App />
      </ChakraProvider>
    </StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
