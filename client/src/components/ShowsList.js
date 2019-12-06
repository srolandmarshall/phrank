import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

import { removeShow } from '../actions/showActions'
import ShowContainer  from '../containers/ShowContainer'
import { deleteReview } from '../actions/reviewActions'

class ShowsList extends Component {

  render() {
    return(
      <Container>
        <Row>
          {this.props.shows.map(show =>
            <ShowContainer show={show} key={show.id}/>
          )}
        </Row>
      </Container>
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
