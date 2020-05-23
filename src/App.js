import React from "react";
import "./App.css";
// import { Route, Switch } from "react-router-dom";
// import Home from "./components/Home";
// import Resume from "./components/Resume";
// import Blog from "./components/Blog";
// import Portfolio from "./components/Portfolio";
// import Nav from "./components/Nav";
import Tabs from "./components/Tabs";
import MediaCard from "./components/Card";
// import Container from "./components/Container";

function App() {
  return (
    <div className="app">
      <MediaCard />
      <Tabs />
      {/* <Container /> */}
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/" component={Home} />
      </Switch> */}
    </div>
  );
}

export default App;
