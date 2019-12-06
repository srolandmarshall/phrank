import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

import Show from './Show'
import { removeShow } from '../actions/showActions'
import { deleteReview } from '../actions/reviewActions'
import ReviewsContainer from '../containers/ReviewsContainer'
import AddShowSwitch from './addShowSwitch'

class ShowsList extends Component {

  render() {
    return(
      this.props.shows.map(show =>
        <Container>
          <Row>
            <Col>
              <Show key={show.id} show={show} />
            </Col>
          </Row>
          <Row>
            <Col xl={8}>
              <ReviewsContainer show={show}/>
            </Col>
            <Col xl={4} align="right">
              <AddShowSwitch show={show} />
            </Col>
          </Row>
        </Container>
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
    user: state.users,
    userShows: state.shows.userShows,
    shows: state.shows.shows,
    reviews: state.reviews
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowsList);
