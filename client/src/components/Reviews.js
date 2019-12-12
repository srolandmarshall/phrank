import React from 'react'
import Review from '../components/Review'
// TODO: add remove review button
function Reviews(props) {
    return(
      props.reviews.map(review =>
        <Review key={review.id} show={props.show} review={review} reviewUser={review.user}/>)
    );
  }

export default Reviews
