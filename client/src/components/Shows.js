import React, { Component } from 'react';
import Show from './Show'

class Shows extends Component {
  render() {
    return(
      this.props.shows.shows.map(show => <Show key={show.id} show={show} deleteShow={this.props.deleteShow} />)
    );
  }
};

export default Shows;
