import React, { Component } from 'react';

import styled from 'styled-components';

export default class TrendList extends Component {
  render() {
    return (
      <TrendWrapper className="col-3">
        <div className="py-3">
          <div className="card">
            <h5 className="card-header">
              <strong>Trends for you</strong>
            </h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Trump</li>
              <li class="list-group-item">Joe Biden</li>
              <li class="list-group-item">Miles Morales</li>
            </ul>
          </div>
        </div>
      </TrendWrapper>
    );
  }
}

const TrendWrapper = styled.div`
  border-left: 0.1rem solid var(--borderColor);
  
  .card {
    background-color: var(--secundaryDark);
    
    .card-header {
      border-color: var(--borderColor);
    }

    .list-group-item {
      background-color: var(--secundaryDark);
      border-color: var(--borderColor);
    }
  }
`;
