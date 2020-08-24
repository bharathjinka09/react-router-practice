import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Users from "./Users";
import Topics from "./Topics";

export default function App() {
  return (
    <div className="container">
      <h1 className="text-center mb-2">React Router Examples</h1>
      <h2>1st Example: Basic Routing</h2>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/react-router-practice">Home</Link>
              </li>
              <li>
                <Link to="/react-router-practice/about">About</Link>
              </li>
              <li>
                <Link to="/react-router-practice/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/react-router-practice/about">
              <About />
            </Route>
            <Route path="/react-router-practice/users">
              <Users />
            </Route>
            <Route path="/react-router-practice">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      <h2>2nd Example: Nested Routing</h2>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/react-router-practice">Home</Link>
            </li>
            <li>
              <Link to="/react-router-practice/about">About</Link>
            </li>
            <li>
              <Link to="/react-router-practice/topics">Topics</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/react-router-practice/about">
              <About />
            </Route>
            <Route path="/react-router-practice/topics">
              <Topics />
            </Route>
            <Route path="/react-router-practice">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
