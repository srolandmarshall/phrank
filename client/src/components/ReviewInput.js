import React, {Component} from 'react';
import { Form, Button } from 'react-bootstrap'


class ReviewInput extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return(<div>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label><em>Write a Review!</em></Form.Label>
          <Form.Control as="textarea" rows="2" placeholder="Enter Review Here"/>
        </Form.Group>
        <Button type="submit" size="sm" variant="outline-info">Submit</Button>
      </Form>
      </div>);
  }

}

export default ReviewInput
