import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default class UserButton extends Component {
  state = {
    user: {
      name: '',
      username: '',
      profileImage: ''
    },
  }

  componentDidMount() {
    this.setUser()
  }

  setUser = () => {
    axios.get('http://localhost:1337/api/user').then(({ data }) => {
      this.setState(() => {
        return { user: {
          name: data.name,
          username: data.screen_name,
          profileImage: data.profile_image_url,
        }};
      });
    });
  };

  render() {
    const { name, username, profileImage } = this.state.user;

    return (
      <div>
        <ProfileButton>
          <div className="profile-info">
            <img src={profileImage} className="img rounded-circle" alt="Profile" />
          </div>
          <div className="profile-info user-info">
            <div className="mx-2">
              <div className="flex-row align-items-center">
                <strong>{name}</strong>
              </div>
              <div className="flex-row align-items-center text-muted">
                @{username}
              </div>
            </div>
          </div>
          <div className="d-flex profile-more">
            <i className="fas fa-chevron-down" />
          </div>
        </ProfileButton>
      </div>
    );
  }
}

const ProfileButton = styled.button`
  outline-style: none;
  background: transparent;
  color: var(--pureWhite);
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-basis: auto;
  flex-shrink: 0;
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  border: 0 solid black;
  font-size: 15px;
  width: 200px;

  img {
    width: 39px;
  }

  div {
    flex-direction: column;
  }

  .profile-more {
    flex-grow: 1;
    align-items: flex-end;
  }

  .user-info {
    max-width: 100%;
    line-height: 1.2rem;
  }

  &:hover {
    background-color: var(--transparentAccent);
  }
  &:focus {
    outline: none;
  }
`;
