import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom';


class SignInContainer extends Component {

  state = {
    email: '',
    username: '',
    password: ''
  };

  signInProcess = () => {
    this.props.history.push('/shows')
  }

  handleUserChange = (event) => {
    event.preventDefault();
    this.setState({
      email: event.target.value,
      username: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.loginUser(this.state.email, this.state.password)
    this.signInProcess()
  }


  render() {
    return (
      <div>
        <h2>Sign in to Phrank</h2>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" value={this.state.email} onChange={this.handleUserChange} placeholder="Email" />
            </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={this.state.password} onChange={this.handlePasswordChange} type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Sign In
          </Button>
        </Form>
      </div>
    )
  }
}

export default withRouter(SignInContainer)
