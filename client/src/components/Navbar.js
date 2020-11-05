import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';

import { UserButton } from './styled/UserButton';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-3">
        <Link to="/">
          <img src={logo} alt="Twitter Logo" className="navbar-brand logo" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">Dashboard</Link>
          </li>
        </ul>
        <Link to="/profile" className="ml-auto text-decoration-none">
          <div>
            <UserButton>
              <div className="profile-info">
                <i className="fas fa-user-circle fa-2x" />
              </div>
              <div className="profile-info user-info">
                <div className="mx-2">
                  <div className="flex-row align-items-center">
                    <strong>{this.props.name}</strong>
                  </div>
                  <div className="flex-row align-items-center text-muted">
                    @{this.props.username}
                  </div>
                </div>
              </div>
              <div className="profile-more">
                <i className="fas fa-chevron-down" />
              </div>
            </UserButton>
          </div>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background-color: var(--mainDark);
  border-bottom: 0.15rem solid var(--pureWhite);

  .logo {
    height: 40px;
  }
  .nav-link {
    color: var(--pureWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;