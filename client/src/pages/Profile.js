import React, { Component } from 'react';

import Title from '../components/Title';

export default class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-12">
          <Title title="Profile"/>
        </div>
      </React.Fragment>
    );
  }
}
