import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Signin from "./components/Signin";
import Signup from "./components/Signup";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

export default ({ history, onAuthChange }) => {
  return (
    <div>
      <Router history={history}>
        <StylesProvider generateClassName={generateClassName}>
          <Switch>
            <Route path="/auth/signin">
              <Signin onAuthChange={onAuthChange} />
            </Route>
            <Route path="/auth/signup">
              <Signup onAuthChange={onAuthChange} />
            </Route>
          </Switch>
        </StylesProvider>
      </Router>
    </div>
  );
};
