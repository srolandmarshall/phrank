import React, { Component } from 'react';
import Show from './Show'

class Shows extends Component {
  render() {
    return(
      this.props.shows.map(show => <Show user={this.props.user} key={show.id} show={show} deleteShow={this.props.deleteShow} removeUserShow={this.props.removeUserShow} />)
    );
  }
};

export default Shows;
