import "./index.css";
import { React, useState } from "react";
import ReactDOM from "react-dom";
import { Grommet } from "grommet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameTheory from "./components/GameTheory.js";
import Home from "./components/Home";

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <Grommet
      // full
      className="themeBody"
      background={theme === "light" ? "#eee4d4" : "#161616"}
    >
      <Router>
        <Routes>
          <Route exact path="/" element={<Home theme={theme} setTheme={setTheme} />} />
          <Route exact path="/gametheory" element={<GameTheory theme={theme} setTheme={setTheme} />} />
        </Routes>
      </Router>
    </Grommet>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));