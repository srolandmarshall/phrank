import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

class Review extends Component {
  render(){
    const {review, user} = this.props;
    return <div>
    <h6>{user.email} wrote:</h6>
    <p>{review.content}</p>
    <Button variant="outline-danger" size="sm" onClick={()=>this.handleClick()}>Remove Review</Button>
    </div>
  }
}

export default Review
