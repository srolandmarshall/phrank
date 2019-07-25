import React, { Component } from 'react';
import Show from './Show'

class Shows extends Component {
  render() {
    const { shows } = this.props.shows;
    return(
      shows.map(show => <Show key={show.id} show={show} />)
    );
  }
};

export default Shows;
