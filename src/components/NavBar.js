import React, { Component } from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="Restaurant Logo" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              All Meals
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
