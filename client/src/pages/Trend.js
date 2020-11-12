import React, { Component } from 'react';

import { RootConsumer } from '../context';
import Title from '../components/Title';

export default class TrendPage extends Component {
  
  render() {
    return (
      <React.Fragment>
        <div className="col-12">
          <RootConsumer>
            {(value) => {
              return (<Title title={value.selectedTrend.name} />);
            }}
          </RootConsumer>
        </div>
      </React.Fragment>
    );
  }
}
