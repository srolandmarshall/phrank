import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import Reviews from '../components/Reviews'
import ReviewInput from '../components/ReviewInput'


const showReviews = (reviews, show) => {
  return reviews.filter(review => review.show_id === show.id)
}

class ReviewsContainer extends Component {

  render(){
    const reviews = showReviews(this.props.reviews, this.props.show)
    if (reviews.length > 0){
      return <div>
        <h5>Reviews:</h5>
        <Reviews reviews={reviews} show={this.props.show} user={this.props.user} />
      </div>
    }
    else {
      return <ReviewInput />
    }

  }
}

export default ReviewsContainer
