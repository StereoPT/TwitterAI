import React, { Component } from 'react';

import Title from './Title';

export default class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-2">
          <div className="container-fluid">
            <Title title="Profile"/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
