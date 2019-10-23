import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

import Show from './Show'
import { removeUserShow } from '../actions/showActions'
import { deleteReview } from '../actions/reviewActions'
import ReviewsContainer from '../containers/ReviewsContainer'


class MyShowsList extends Component {

  showReviews = (reviews, show) => {
      return reviews.filter(review => review.show_id === show.id)
    }

  handleClick = (showId) => {
    const user = this.props.user
    const review = this.props.reviews.reviews.find(function(obj){ return obj.show_id === showId});
    this.props.removeUserShow(showId, user)
    if (review) {
      this.props.deleteReview(review, user)
    }
  }

  render() {
    return(
      this.props.shows.map(show =>
        <div>
        <Container>
          <Row>
            <Col sm={10} xs={10}>
              <Show reviews={this.props.reviews} user={this.props.user} key={show.id} show={show} />
            </Col>
            <Col sm={2} xs={2}>
              <Button className="removeShow" key={show.id} variant="outline-danger" size="sm" onClick={()=>this.handleClick(show.id)}>Remove Show</Button>
            </Col>
          </Row>
          <Row>
            <Col sm={10} align={"center"}>
              <ReviewsContainer key={show.id} user={this.props.user} show={show} reviews={this.showReviews(this.props.reviews.reviews, show)}/>
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

export default connect(null,mapDispatchToProps)(MyShowsList);
