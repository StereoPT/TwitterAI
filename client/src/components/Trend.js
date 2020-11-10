import React from 'react'

export default function Trend({ trend }) {
  return (
    <a href={`/trend/${trend.query}`} className="list-group-item list-group-item-action">
      { trend.name }
    </a>
  );
}
