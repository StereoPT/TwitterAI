import React, { Component } from 'react';

import Title from '../components/Title';

export default class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-2">
          <div className="container-fluid">
            <Title title="Dashboard"/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
