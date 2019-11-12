import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { deleteReview } from '../actions/reviewActions'
import { getUser } from '../actions/userActions'

class Review extends Component {

  componentDidMount(){
    this.props.getUser(this.props.review.user_id)
  }

  componentDidUpdate(prevProps){
  }

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

const mapStateToProps = (state) => ({
  user: state.users.reviewUser
})

const mapDispatchToProps = dispatch => ({
  deleteReview: (review, user) => dispatch(deleteReview(review, user)),
  getUser: (userId) => dispatch(getUser(userId))
})

export default connect(mapStateToProps,mapDispatchToProps)(Review)
