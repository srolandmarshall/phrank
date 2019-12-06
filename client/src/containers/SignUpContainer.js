import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import { registerUser, loginUser } from '../actions/userActions'


class SignUpContainer extends Component {

  state = {
    email: '',
    username: '',
    password: '',
    passwordConfirm: '',
    registered: false
  };

  signUpProcess = (payload) => {
    this.setState({
      ...this.state,
      registered: true
    })
    debugger
    this.props.loginUser(payload.email, this.state.password)
    this.props.history.push('/shows')
  }

  resetState = () => {
    this.setState({
        email: '',
        username: '',
        password: '',
        passwordConfirm: '',
        registered: false
      })
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

  handlePasswordConfirmChange = (event) => {
    this.setState({
      passwordConfirm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.registerUser(this.state.email, this.state.password).then(
      (entry)=>{
        this.signUpProcess(entry.payload)
    })
  }

  render() {
    return (
      <div>
        <h2>Register phor Phrank</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" value={this.state.email} onChange={this.handleUserChange} placeholder="Email" />
            <Form.Text className="text-muted">
              I'll never share your email with anyone else, promise <span role="img" aria-label="kissy-face">😘</span>
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={this.state.password} onChange={this.handlePasswordChange} type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="formBasicPasswordConfirm">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control value={this.state.passwordConfirm} onChange={this.handlePasswordConfirmChange} type="password" placeholder="Re-enter Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  registerUser: (email, password) => dispatch(registerUser(email, password)),
  loginUser: (email, password) => dispatch(loginUser(email, password))
})


export default connect(null,mapDispatchToProps)(withRouter(SignUpContainer))
