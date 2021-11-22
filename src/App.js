import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { authenticationValidator } from './store/actions';
import { Spinner } from './components';
import { guestRoutes } from './routes';

// add js

// add css
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './assets/css/responsive.css';
import './assets/css/style.css';
import Layout from './views/Layout/Layout';

function App() {
  const pathname = window.location.pathname.split('/')[1];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticationValidator());
  }, []);

  const redirectHandler = () => {
    const guestRoute = guestRoutes
      .filter(item => item.redirectRoute === undefined)
      .map(item => item.path);
    return !guestRoute.includes(`/${pathname}`) ? <Redirect to="/home" /> : null;
  };

  const mainContent = (
    <>
      <Layout>
        {guestRoutes.map(
          route =>
            route.redirectRoute === undefined && (
              <Route key={route.name} path={route.path} exact={route.exact} name={route.name}>
                <route.component />
              </Route>
            ),
        )}
        {redirectHandler()}
      </Layout>
    </>
  );

  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Switch>{mainContent}</Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
