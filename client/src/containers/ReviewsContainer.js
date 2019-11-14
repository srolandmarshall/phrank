import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
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

const isReviewedByUser = (reviews, show, user) => {
  if (reviews.filter(review => review.user_id === user.userId).length > 0) {
    return true
  }
  return false
}

class ReviewsContainer extends Component {

  render(){
    const reviews = showReviews(this.props.reviews, this.props.show)
    if (isReviewedByUser(reviews,this.props.show,this.props.user)){
      return (
        <Container>
          <Col>
            <h5>Reviews:</h5>
            <Reviews reviews={reviews} show={this.props.show} />
          </Col>
        </Container>)
    }
    else if (reviews.length > 0) {
      return (<Container>
      <Col>
        <ReviewInput show={this.props.show} user={this.props.user} />
        <h5>Reviews:</h5>
        <Reviews reviews={reviews} show={this.props.show} />
      </Col>
      </Container>)

    }
    else {
      return (
        <Container>
        <Col>
          <ReviewInput show={this.props.show} user={this.props.user} />
        </Col>
        </Container>)
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    shows: state.shows,
    user: state.users
  }
}

export default connect(mapStateToProps,null)(ReviewsContainer)
