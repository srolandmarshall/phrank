import React, {Component} from 'react';
import parse from 'html-react-parser';
import ReviewsContainer from '../containers/ReviewsContainer'
import { Button } from 'react-bootstrap'

class Show extends Component {

  handleClick = () => {
    this.props.removeUserShow(this.props.show.id, this.props.user)
  }

  showReviews = (reviews, show) => {
    return reviews.filter(review => review.show_id === show.id)
  }

  render() {
    const {show} = this.props;
    return (
      <div className="show">
        <h4>{show.showdate}</h4>
        <h4>{show.venue + ", " + show.location}
          <Button variant="outline-danger" size="sm" onClick={()=>this.handleClick()}>Remove Show</Button>
        </h4>
        <div>{parse(show.setlist)}</div>
        <ReviewsContainer user={this.props.user} show={show} reviews={this.showReviews(this.props.reviews.reviews, show)}/>
      </div>)
  }

}

export default Show;
