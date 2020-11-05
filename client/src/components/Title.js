import React from 'react';

export default function Title({ title }) {
  return (
    <div className="row">
      <div className="col-12 mx-auto my-2">
        <h1 className="text-capitalize font-weight-bold">{ title }</h1>
      </div>
    </div>
  );
}
