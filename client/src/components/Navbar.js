import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';

import { RootConsumer } from '../context';
import UserButton from './UserButton';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-3 flex-shrink-0">
        <Link to="/">
          <img src={logo} alt="Twitter Logo" className="navbar-brand logo" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-1">
            <Link to="/" className="nav-link">Dashboard</Link>
          </li>
        </ul>
        <Link to="/profile" className="ml-auto text-decoration-none">
          <RootConsumer>
            { (value) => { return <UserButton user={value.user} /> }}
          </RootConsumer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background-color: var(--mainDark);
  border-bottom: 0.1rem solid var(--borderColor);

  .logo {
    height: 40px;
  }
  .nav-link {
    color: var(--pureWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;