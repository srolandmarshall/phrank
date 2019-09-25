import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import Review from '../components/Review'
// TODO: add remove review button
class Reviews extends Component {

  render() {
    return(
      this.props.reviews.map(review => <Review user={this.props.user} key={review.id} show={this.props.show} review={review} />)
    );
  }
}

export default Reviews
