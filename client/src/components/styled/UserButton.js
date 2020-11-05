import styled from 'styled-components';

export const UserButton = styled.button`
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
  width: 205x;

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
    background-color: rgba(244, 93, 34, 0.1);
  }
  &:focus {
    outline: none;
  }
`;