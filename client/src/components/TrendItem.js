import React from 'react';
import { Link } from 'react-router-dom';

export default function Trend({ trend }) {
  return (
    <Link to={`/trend/${trend.query}`} className="list-group-item list-group-item-action">
      { trend.name }
    </Link>
  );
}
