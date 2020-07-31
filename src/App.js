import React from 'react';
import {NavLink as Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import "./index.css";
import Contact from "./Contact";

export const HOME_PATH = '/';
export const PROJECTS_PATH = '/projects';
export const CONTACT_PATH = '/contact';

function App() {
  return (
      <React.Fragment>
        <div className="navbar">
          <Link to={HOME_PATH}>
            <img
                alt="Nav icon"
                height={50}
                src="/me-circle.png"
            />
            <div>
              <span>CYRUS</span>
              <span>SARKOSH</span>
            </div>
          </Link>
          <div>
            <Link to={PROJECTS_PATH}>
              Projects
            </Link>
            <a
                href="https://medium.com/@csarkosh"
                rel="noopener noreferrer"
                target="_blank"
            >
              Writings
            </a>
            <Link to={CONTACT_PATH}>
              Contact
            </Link>
          </div>
        </div>
        <div className="page-body">
          <Switch>
            <Route path={PROJECTS_PATH}>
              <Projects />
            </Route>
            <Route path={CONTACT_PATH}>
              <Contact />
            </Route>
            <Route path={HOME_PATH}>
              <Home />
            </Route>
          </Switch>
        </div>
      </React.Fragment>
  );
}

export default App;
