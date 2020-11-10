import React, { Component } from 'react';
import axios from 'axios';

import styled from 'styled-components';

import Trend from './Trend';

export default class TrendList extends Component {
  state = {
    trends: [],
    selectedTrend: '',
  }

  componentDidMount() {
    this.getTrends();
  }

  getTrends = () => {
    axios.get('http://localhost:1337/api/trends').then(({ data }) => {
      this.setState(() => {
        return { trends: data };
      });
    });
  };

  render() {
    return (
      <TrendWrapper className="col-3">
        <div className="py-3">
          <div className="card">
            <h5 className="card-header">
              <strong>Trends for you</strong>
            </h5>
            <div className="list-group list-group-flush">
              { this.state.trends.slice(0, 5).map((trend) => {
                return (
                  <Trend key={trend.name} trend={ trend } />
                );
              })}
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
        background-color: rgba(255, 255, 255, 0.03);
      }
    }
  }
`;
