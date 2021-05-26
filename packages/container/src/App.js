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
        <Suspense fallback={<ProgressBar />}>
          <Switch>
            <Route path='/auth'>
              <AuthApp onSignIn={() => setIsSignedIn(true)} />
            </Route>

            <Route path='/' component={MarketingApp} />
          </Switch>
        </Suspense>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
