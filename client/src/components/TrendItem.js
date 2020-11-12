import React from 'react';
import { Link } from 'react-router-dom';
import { RootConsumer } from '../context';

export default function Trend({ trend }) {
  return (
    <RootConsumer>
      {(value) => {
        return(
          <Link to={`/trend/${trend.query}`} className="list-group-item list-group-item-action" onClick={ () => value.handleSelectedTrend(trend.name)}>
            { trend.name }
          </Link>
        );
      }}
    </RootConsumer>
  );
}
