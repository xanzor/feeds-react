import React from "react";
import { Link, NavLink } from "react-router-dom";
import {Nav} from "react-bootstrap";

import "../styles/TopBar.css";

const TopBar = () => {
  return (
    <div className="row d-flex">
      <div className="col-md-2">
        <Link className="nav-link logo" to="/">
          Logo
        </Link>
      </div>
      <div className="col-md-10">
        <Nav className="justify-content-end">
          <Nav.Item>
            <NavLink className="nav-link menuLink" to="/" exact>
              Home
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="nav-link menuLink" to="login">
              Sign in
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="nav-link menuLink" to="register">
              Sign up
            </NavLink>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
}

export default TopBar;