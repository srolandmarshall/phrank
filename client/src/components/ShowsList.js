import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

import Show from './Show'
import { removeShow } from '../actions/showActions'
import { deleteReview } from '../actions/reviewActions'
import ReviewsContainer from '../containers/ReviewsContainer'
import AddShowSwitch from './addShowSwitch'

class ShowsList extends Component {

  componentDidMount(){
  }

  componentDidUpdate(prevProps){
    if (prevProps.shows !== this.props.shows){

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
            <Col xl={8}>
              <ReviewsContainer reviews={this.props.reviews.reviews} show={show}/>
            </Col>
            <Col xl={4} align="right">
              <AddShowSwitch show={show} userShows={this.props.shows.userShows}/>
            </Col>
          </Row>
        </Container>
        </div>
        )
    );
  }
};

const mapDispatchToProps = dispatch => ({
  removeShow: (user, show, review) => dispatch(removeShow(user, show, review)),
  deleteReview: (review, user) => dispatch(deleteReview(review, user))
})

const mapStateToProps = (state, ownProps) => {
  return {
    reviews: state.reviews,
    user: state.users,
    userShows: state.shows.userShows
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowsList);
