import React from "react";
import GlobalFeeds from "./pages/GlobalFeeds";
import Article from "./pages/Article";
import Authentication from "./pages/Authentication";

import {Switch, Route} from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={GlobalFeeds} exact />
      <Route path="/login" component={Authentication} />
      <Route path="/register" component={Authentication} />
      <Route path="/articles" component={Article} />
    </Switch>
  );
}
export default Routes;