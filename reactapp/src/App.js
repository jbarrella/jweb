import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Stats from "./components/Stats.js";
import Home from "./components/Home.js";
import { Grommet } from "grommet";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

export default function App() {
  return (
    <Grommet full theme={theme}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/stats" component={Stats} />
      </Router>
    </Grommet>
  );
}
