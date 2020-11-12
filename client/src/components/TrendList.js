import React, { Component } from 'react';

import styled from 'styled-components';
import { RootConsumer } from '../context';

import SearchBar from './SearchBar';
import TrendItem from './TrendItem';

export default class TrendList extends Component {
  render() {
    return (
      <TrendWrapper className="col-3">
        <div className="py-3">
          <SearchBar />
          <div className="card mt-3">
            <h5 className="card-header">
              <strong>Trends for you</strong>
            </h5>
            <div className="list-group list-group-flush">
              <RootConsumer>
                {(value) => {
                  return value.trends.slice(0, 7).map((trend) => {
                    return ( <TrendItem key={trend.name} trend={ trend } handleSelectedTrend={value.handleSelectedTrend} /> );
                  });
                }}
              </RootConsumer>
            </div>
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
      color: var(--pureWhite);

      &:hover {
        background-color: var(--transparentWhite);
      }
    }
  }
`;
