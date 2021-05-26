import { createGenerateClassName, StylesProvider } from '@material-ui/styles';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
const MarketingApp = lazy(() => import('./components/MarketingApp'));
const AuthApp = lazy(() => import('./components/AuthApp'));
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

function App() {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header />
        <Switch>
          <Suspense fallback={<ProgressBar />}>
            <Route path='/auth' component={AuthApp} />
            <Route path='/' component={MarketingApp} />
          </Suspense>
        </Switch>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
