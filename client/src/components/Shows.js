import React, { Component } from 'react';
import Show from './Show'

class Shows extends Component {
  render() {
    const {restaurants, deleteRestaurant} = this.props;
    return(
      <ul>
        <li><Show /></li>
      </ul>
    );
  }
};

export default Shows;
