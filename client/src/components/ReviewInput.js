import React, {Component} from 'react';
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { createReview } from '../actions/reviewActions'



class ReviewInput extends Component {

  state = {
    content: '',
    user: this.props.user,
    show: this.props.show
  };

  resetState = () => {
    this.setState({
      content: '',
      user: this.props.user,
      show: this.props.show
    })
  }

  handleSubmit = (event) => {
    const review = {
      content: this.state.content,
      rating: 5
    }
    event.preventDefault();
    this.props.createReview(this.state.user, this.state.show, review)
    this.resetState()
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      content: event.target.value
    })
  }

  render() {
    return(<div>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label><em>Write a Review!</em></Form.Label>
          <Form.Control as="textarea" value={this.state.content} onChange={this.handleChange} rows="2" placeholder="Enter Review Here"/>
        </Form.Group>
        <Button type="submit" size="sm" variant="outline-info">Submit</Button>
      </Form>
      </div>);
  }

}

const mapDispatchToProps = dispatch => ({
  createReview: (user, show, review) => dispatch(createReview(user, show, review))
})

export default connect(null, mapDispatchToProps)(ReviewInput)
