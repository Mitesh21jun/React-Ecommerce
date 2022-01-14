import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import {  } from 'react-router-dom/cjs/react-router-dom.min'
// import { BrowserRouter as Router, Route, Routes,Switch } from 'react-router-dom'

import "./App.css";
import Cart from "./components/Cart";
import Nav from "./components/Nav";
import Orders from "./components/Orders";
import Products from "./components/Products";
import Shop from "./components/Shop";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Products}></Route>
          <Route exact path="/cart" component={Cart}></Route>
          <Route exact path="/shop" component={Shop}></Route>
          <Route exact path="/orders" component={Orders}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
