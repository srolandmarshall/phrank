import React, { Component } from 'react'
import { connect } from 'react-redux'
import Reviews from '../components/Reviews'
import ReviewInput from '../components/ReviewInput'


const showReviews = (reviews, show) => {
  if (reviews) {
    return reviews.filter(review => review.show_id === show.id)
  }
  else {
    return []
  }
}

class ReviewsContainer extends Component {

  render(){
    const reviews = showReviews(this.props.reviews, this.props.show)
    if (reviews.length > 0){
      return <div>
        <h5>Reviews:</h5>
        <Reviews reviews={reviews} show={this.props.show} />
      </div>
    }
    else {
      return <ReviewInput show={this.props.show} user={this.props.user} />
    }

  }
}

export default connect(null,null)(ReviewsContainer)
