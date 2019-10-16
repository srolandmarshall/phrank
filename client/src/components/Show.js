import React, {Component} from 'react';
import parse from 'html-react-parser';
import ReviewsContainer from '../containers/ReviewsContainer'
import { removeUserShow } from '../actions/showActions'
import { deleteReview } from '../actions/reviewActions'
import { connect } from 'react-redux'


class Show extends Component {

  showReviews = (reviews, show) => {
    return reviews.filter(review => review.show_id === show.id)
  }

  render() {
    const {show} = this.props;
    return (
      <div className="show">
        <h4>{show.showdate}</h4>
        <h5>{show.venue + ", " + show.location}</h5>
        <div>{parse(show.setlist)}</div>
      </div>)
  }

}

const mapDispatchToProps = dispatch => ({
  removeUserShow: (user, show, review) => dispatch(removeUserShow(user, show, review)),
  deleteReview: (review, user) => dispatch(deleteReview(review, user))
})

export default connect(null,mapDispatchToProps)(Show);
