import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Portfolio from "./components/Portfolio";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
