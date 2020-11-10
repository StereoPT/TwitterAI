import React, { Component } from 'react';

import Title from '../components/Title';
import TrendList from '../components/TrendList';

export default class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-9">
          <Title title="Dashboard"/>
        </div>
        <TrendList />
      </React.Fragment>
    );
  }
}
