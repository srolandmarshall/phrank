import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import {deleteReview} from '../actions/reviewActions'

class Review extends Component {

  handleClick = (event) => {
    event.preventDefault();
    this.props.deleteReview(this.props.review, this.props.user)
  }
  render(){
    const {review, user} = this.props;
    return <div>
    <h6>{user.email} wrote:</h6>
    <p>{review.content}</p>
    <Button variant="outline-danger" size="sm" onClick={this.handleClick.bind(this)}>Remove Review</Button>
    </div>
  }
}

const mapDispatchToProps = dispatch => ({
  deleteReview: (review, user) => dispatch(deleteReview(review, user))
})

export default connect(null,mapDispatchToProps)(Review)
