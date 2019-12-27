import React from "react";
import "./App.css";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Switching Routes ( Links clicking )
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import AboutUs from "./components/AboutUs";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
