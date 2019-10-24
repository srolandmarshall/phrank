import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

import Show from './Show'
import { removeUserShow } from '../actions/showActions'
import { deleteReview } from '../actions/reviewActions'
import ReviewsContainer from '../containers/ReviewsContainer'


class ShowsList extends Component {

  componentDidMount(){
  }

  componentDidUpdate(prevProps){
    if (this.props.reviews !== prevProps.reviews){
    }
  }

  showReviews = (reviews, show) => {
      return reviews.filter(review => review.show_id === show.id)
    }

  render() {
    return(
      this.props.shows.map(show =>
        <div>
        <Container>
          <Row>
            <Col>
              <Show reviews={this.props.reviews} user={this.props.user} key={show.id} show={show} />
            </Col>
          </Row>
          <Row>
            
          </Row>
        </Container>
        </div>
        )
    );
  }
};

const mapDispatchToProps = dispatch => ({
  removeUserShow: (user, show, review) => dispatch(removeUserShow(user, show, review)),
  deleteReview: (review, user) => dispatch(deleteReview(review, user))
})

const mapStateToProps = (state, ownProps) => {
  return {
    reviews: state.reviews
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowsList);
