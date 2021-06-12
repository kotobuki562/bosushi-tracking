import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ProtectedRoute } from './components/AUTH0/ProtectedRoute';
import { Home } from './pages/Home';

export const App = () => {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <p>loading</p>;
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
};
