import React, { Component } from 'react';
import { Row } from 'react-bootstrap'
import { connect } from 'react-redux'

import { removeShow } from '../actions/showActions'
import { deleteReview } from '../actions/reviewActions'
import ShowContainer  from '../containers/ShowContainer'



class MyShowsList extends Component {

  showReviews = (reviews, show) => {
      return reviews.filter(review => review.show_id === show.id)
    }

  handleClick = (showId) => {
    const user = this.props.user
    const review = this.props.reviews.reviews.find(function(obj){ return obj.show_id === showId});
    this.props.removeShow(showId, user)
    if (review) {
      this.props.deleteReview(review, user)
    }
  }

  render() {
    return(
      <Row>
        {this.props.shows.shows.map(show =>
          <ShowContainer show={show} key={show.id} />
        )}
      </Row>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  removeShow: (user, show, review) => dispatch(removeShow(user, show, review)),
  deleteReview: (review, user) => dispatch(deleteReview(review, user))
})

// const mapStateToProps = (state, ownProps) => ({
// })

export default connect(null,mapDispatchToProps)(MyShowsList);
