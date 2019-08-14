import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class SignInContainer extends Component {
  render() {
    return (
      <div>
        <h2>Sign in to Phrank</h2>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign In
          </Button>
        </Form>
      </div>
    )
  }
}

export default SignInContainer
