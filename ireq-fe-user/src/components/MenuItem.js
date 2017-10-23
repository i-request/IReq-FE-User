import React, { Component } from 'react';

import AddButton from './AddButton';

const MenuItem = (props) => (
  <div className='MenuItem'>
    <p>{props.name}</p> <p>{props.price}</p>
    <AddButton />

  </div>
);

export default MenuItem