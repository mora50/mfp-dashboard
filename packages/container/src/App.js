import { createGenerateClassName, StylesProvider } from "@material-ui/styles";
import React, { lazy, Suspense, useState } from "react";
import { useEffect } from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
const AuthApp = lazy(() => import("./components/AuthApp"));
const DashboardApp = lazy(() => import("./components/DashboardApp"));
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import { createBrowserHistory } from "history";
const Form = lazy(() => import("./components/Form"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const history = createBrowserHistory();

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push("/dashboard");
    }
  }, [isSignedIn]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <Header
          onSignOut={() => setIsSignedIn(false)}
          isSignedIn={isSignedIn}
        />
        <Suspense fallback={<ProgressBar />}>
          <Switch>
            <Route path="/auth">
              <AuthApp onSignIn={() => setIsSignedIn(true)} />
            </Route>

            <Route path="/dashboard">
              {!isSignedIn && <Redirect to="/" />}
              <DashboardApp />
            </Route>

            <Route path="/" component={Form} />
          </Switch>
        </Suspense>
      </StylesProvider>
    </Router>
  );
}

export default App;
