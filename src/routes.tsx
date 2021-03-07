import React from "react";
import { Route, Switch } from "react-router-dom";
import Catalogo from "./pages/Catalogo";
import { BrowserRouter } from "react-router-dom";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Catalogo} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
