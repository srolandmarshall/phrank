import React, { Component } from 'react'
import { connect } from 'react-redux'
import Review from '../components/Review'
// TODO: add remove review button
class Reviews extends Component {

  render() {
    return(
      this.props.reviews.map(review =>
        <Review key={review.id} show={this.props.show} review={review} />)
    );
  }
}

export default connect(null,null)(Reviews)
