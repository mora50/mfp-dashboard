import { createGenerateClassName, StylesProvider } from '@material-ui/styles';
import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
const MarketingApp = lazy(() => import('./components/MarketingApp'));
const AuthApp = lazy(() => import('./components/AuthApp'));
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header
          onSignOut={() => setIsSignedIn(false)}
          isSignedIn={isSignedIn}
        />
        <Switch>
          <Suspense fallback={<ProgressBar />}>
            <Route path='/auth'>
              <AuthApp onSignIn={() => setIsSignedIn(true)} />
            </Route>

            <Route exact path='/' component={MarketingApp} />
          </Suspense>
        </Switch>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
