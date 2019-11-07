import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

import Show from './Show'
import { removeUserShow } from '../actions/showActions'
import { deleteReview } from '../actions/reviewActions'
// import ReviewsContainer from '../containers/ReviewsContainer'
import AddShowSwitch from './addShowSwitch'

class ShowsList extends Component {

  componentDidMount(){
  }

  componentDidUpdate(prevProps){
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
            <Col xl={8}/>
              <Col xl={4} align="right">
                <AddShowSwitch show={show} userShows={this.props.userShows}/>
              </Col>
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
    reviews: state.reviews,
    user: state.users,
    userShows: state.userShows
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowsList);
