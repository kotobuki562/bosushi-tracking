import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Route } from 'react-router-dom';

// eslint-disable-next-line react/destructuring-assignment
export const ProtectedRoute = ({ component, ...args }: any) => {
  return (
    <Route component={withAuthenticationRequired(component, {})} {...args} />
  );
};
