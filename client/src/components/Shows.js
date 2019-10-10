import React, { Component } from 'react';
import Show from './Show'

class Shows extends Component {
  render() {
    return(
      this.props.shows.map(show => <Show reviews={this.props.reviews} user={this.props.user} key={show.id} show={show} />)
    );
  }
};

export default Shows;
