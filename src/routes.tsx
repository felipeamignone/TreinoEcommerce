import React from "react";
import Catalogo from "./pages/Catalogo";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Carrinho from "./pages/Carrinho";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Catalogo} />
        <Route path="/cart" exact component={Carrinho} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
