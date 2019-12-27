import React, { Component } from "react";
import logo from "../logo.png";
import { CartButtonContainer } from "./Button";

// Links Routing
import { Link } from "react-router-dom";
// Styled Component at the end of the file
import styled from "styled-components";

export default class NavBar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="Restaurant Logo" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav d-flex justify-content-between">
          <li className="nav-item text-center">
            <Link to="/" className="nav-link">
              Toutes Les Chhiwates
            </Link>
          </li>
          <li className="nav-item text-center">
            <Link to="/" className="nav-link">
              YH Restaurant
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <CartButtonContainer className="navbar-brand">
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            Mon Panier
          </CartButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  .nav-links {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
  display: grid !important;
  grid-template-columns: repeat(3, 1fr) !important;
`;
