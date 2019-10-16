import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

import Show from './Show'
import ReviewsContainer from '../containers/ReviewsContainer'
import { removeUserShow } from '../actions/showActions'
import { deleteReview } from '../actions/reviewActions'


class Shows extends Component {

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
        <Show reviews={this.props.reviews} user={this.props.user} key={show.id} show={show} />
        <Button key={show.id} variant="outline-danger" size="sm" onClick={()=>this.handleClick(show.id)}>Remove Show</Button>
        <ReviewsContainer  key={show.id} user={this.props.user} show={show} reviews={this.showReviews(this.props.reviews.reviews, show)}/>
        </div>
        )
    );
  }
};

const mapDispatchToProps = dispatch => ({
  removeUserShow: (user, show, review) => dispatch(removeUserShow(user, show, review)),
  deleteReview: (review, user) => dispatch(deleteReview(review, user))
})

export default connect(null,mapDispatchToProps)(Shows);
