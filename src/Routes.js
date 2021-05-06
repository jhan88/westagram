import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GNB from "./Components/GNB/GNB";
import Main from "./Pages/Main/Main";
import Profile from "./Pages/Profile/Profile";

function Routes() {
  return (
    <BrowserRouter>
      <GNB />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
