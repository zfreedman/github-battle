"use strict";
import React from "react";

// for some reason, the below line requires "require", not import
// import ReactRouter from "react-router"; <- bad
// var ReactRouter = require("react-router-dom"); <- good
// var ReactRouter = require("react-router-dom");
// let Router = ReactRouter.BrowserRouter;
// let Route = ReactRouter.Route;
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Battle from "./battle";
import Home from "./home";
import Nav from "./nav";
import Popular from "./popular";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/battle" component={Battle} />
            <Route path="/popular" component={Popular} />
            <Route render={() => <p>Not found</p>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

// alternate way to export component
// module.exports = App;
