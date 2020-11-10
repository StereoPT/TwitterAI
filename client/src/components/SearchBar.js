import React from 'react';

import styled from 'styled-components';

export default function SearchBar() {
  return (
    <SearchWrapper className="input-group input-group-md">
      <div className="input-group-prepend">
        <div className="input-group-text">
          <i className="fas fa-search" />
        </div>
      </div>
      <input type="text" className="form-control form-control-md fix-rounded-right" placeholder="Search Twitter" />
    </SearchWrapper>
  );
}

const SearchWrapper = styled.div`
  .input-group-text {
    border: 0px solid black;
    background-color: var(--secundaryDark);
  }

  input {
    border: 0px solid black;
    background-color: var(--secundaryDark);

    &:focus {
      background-color: var(--secundaryDark);
      outline: none;
      box-shadow: none;
      color: var(--pureWhite);
    }
  }
`;