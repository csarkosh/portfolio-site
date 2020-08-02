import React from 'react';
import {NavLink as Link, Route, Switch } from "react-router-dom";
import "./index.css";
import "./App.css";
import meCircle from './img/me-circle.webp'

const Contact = React.lazy(() => import('./Contact'));
const Home = React.lazy(() => import('./Home'));
const Projects = React.lazy(() => import('./Projects'));

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
                src={meCircle}
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
                className="external-link"
                href="https://medium.com/@csarkosh"
                rel="noopener noreferrer"
                target="_blank"
            >
              Writings <div className="external-link-icon">↗</div>
            </a>
            <Link to={CONTACT_PATH}>
              Contact
            </Link>
          </div>
        </div>
        <React.Suspense fallback={<React.Fragment />}>
        <div />
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
        </React.Suspense>
      </React.Fragment>
  );
}

export default App
