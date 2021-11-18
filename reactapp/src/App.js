import "./App.css";
import { React, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Stats from "./components/Stats.js";
import GameTheory from "./components/GameTheory.js";
// import Projects from "./components/Projects.js";
import Home from "./components/Home";
import { Grommet } from "grommet";

export default function App() {
  const [dltheme, setTheme] = useState("dark");
  const theme = {
    global: {
      font: {
        family: "Zen Kaku Gothic Antique",
        size: "18px",
        height: "20px",
      },
    },
  };
  return (
    <Grommet
      className="themeBody"
      background={dltheme == "light" ? "#eee4d4" : "#161616"}
      full
      theme={theme}
    >
      <Router>
        <Route exact path="/">
          <Home theme={dltheme} setTheme={setTheme} />
        </Route>
        <Route exact path="/gametheory">
          <GameTheory theme={dltheme} setTheme={setTheme} />
        </Route>
        <Route exact path="/stats" component={Stats} />
      </Router>
    </Grommet>
  );
}
