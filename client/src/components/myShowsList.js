import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

import Show from './Show'
import { removeUserShow } from '../actions/showActions'
import { deleteReview } from '../actions/reviewActions'


class MyShowsList extends Component {


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
            <Col sm={10} xs={9}>
              <Show reviews={this.props.reviews} user={this.props.user} key={show.id} show={show} />
            </Col>
            <Col sm={2} xs={3}>
              <Button className="removeShow" key={show.id} variant="outline-danger" size="sm" onClick={()=>this.handleClick(show.id)}>Remove Show</Button>
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
