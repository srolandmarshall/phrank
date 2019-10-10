import React, {Component} from 'react';
import parse from 'html-react-parser';
import ReviewsContainer from '../containers/ReviewsContainer'
import { Button } from 'react-bootstrap'
import { removeUserShow } from '../actions/showActions'
import { deleteReview } from '../actions/reviewActions'
import { connect } from 'react-redux'


class Show extends Component {

  handleClick = () => {
    const showId = this.props.show.id
    const user = this.props.user
    const review = this.props.reviews.reviews.find(function(obj){ return obj.show_id === showId});
    this.props.removeUserShow(showId, user)
    this.props.deleteReview(review, user)
  }

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
        <Button variant="outline-danger" size="sm" onClick={()=>this.handleClick()}>Remove Show</Button>
        <ReviewsContainer user={this.props.user} show={show} reviews={this.showReviews(this.props.reviews.reviews, show)}/>
      </div>)
  }

}

const mapDispatchToProps = dispatch => ({
  removeUserShow: (user, show, review) => dispatch(removeUserShow(user, show, review)),
  deleteReview: (review, user) => dispatch(deleteReview(review, user))
})

export default connect(null,mapDispatchToProps)(Show);
