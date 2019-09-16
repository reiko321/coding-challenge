import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Accounts from "./pages/Accounts";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Accounts} />
          <Route exact path="/accounts" component={Accounts} />
          <Route exact path="/accounts/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
