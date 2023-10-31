import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "./views/pages/Home";
import SertaMerta from "./views/pages/informasi/SertaMerta";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/serta-merta" component={SertaMerta} exact />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
