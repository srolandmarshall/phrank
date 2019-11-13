import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { deleteReview } from '../actions/reviewActions'

class Review extends Component {

  componentDidMount(){
  }

  componentDidUpdate(prevProps){
  }

  handleClick = (event) => {
    event.preventDefault();
      this.props.deleteReview(this.props.review, this.props.user)
  }

  render(){
    const {review, user, reviewUser} = this.props;
    if (review.user_id === user.userId) {
      return <div>
      <h6>You wrote:</h6>
      <p>{review.content}</p>
      <Button variant="outline-danger" size="sm" onClick={this.handleClick.bind(this)}>Remove Review</Button>
      </div>
    }
    else{
      return <div>
      <h6>{reviewUser.email} wrote:</h6>
      <p>{review.content}</p>
      </div>
    }
  }
}

const mapStateToProps = (state) => ({
  user: state.users
})

const mapDispatchToProps = dispatch => ({
  deleteReview: (review, user) => dispatch(deleteReview(review, user))
})

export default connect(mapStateToProps,mapDispatchToProps)(Review)
