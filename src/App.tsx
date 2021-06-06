import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './pages/Home';
import { ProtectedRoute } from './components/AUTH0/ProtectedRoute';
export function App() {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <p></p>;
  }

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <ProtectedRoute path="/profile" component={Profile} />
          <Route path="/support" exact component={Support} /> */}
      </Switch>
    </Router>
  );
}
