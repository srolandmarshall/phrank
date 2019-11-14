import React, { Component } from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
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
      return <Container>
        <Row>
          <Col xl={6} xs md={10}>
          <h6>You wrote:</h6>
          <p>{review.content}</p>
        </Col>
        <Col xl={6} xs md={2} align="right"><Button variant="outline-danger" size="sm" onClick={this.handleClick.bind(this)}>Remove Review</Button></Col>
        </Row>
      </Container>
    }
    else{
      return <Container>
        <Row>
          <Col>
          <h6>{reviewUser.email} wrote:</h6>
          </Col>
        </Row>
        <Row>
          <Col md={"auto"}><p>{review.content}</p></Col>
        </Row>
      </Container>
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
