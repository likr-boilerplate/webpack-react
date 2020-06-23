import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import RootPage from "./pages/root";

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={RootPage} exact />
      </Switch>
    </Router>
  );
};

export default App;
