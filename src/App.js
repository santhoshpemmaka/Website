import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header.js";
import Conatct from "./Contact/Contact.js";
import Footer from "./Footer/Footer.js";
import Home from "./Container/Container.js";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/PSR">
            <h1>PSR</h1>
          </Route>
          <Route path="/contact">
            <Header />
            <Conatct />
            <Footer />
          </Route>
          <Route path="/about">
            <Header />
            <Home />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
