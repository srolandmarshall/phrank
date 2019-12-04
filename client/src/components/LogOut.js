import React from 'react';
import {Container, Row, Col, Button, Card} from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../actions/userActions'

class LogOut extends React.Component {
  handleLogOut(event) {
    event.preventDefault();
    console.log("Logging out")
    this.props.logOut(this.props.user.email);
    this.props.history.push('/')
  }

  handleCancel(event) {
    event.preventDefault();
    this.props.history.goBack()
  }

  render(){
    return (<Row>
          <Col align="center">
            <Card>
              <Card.Header>Logging out...</Card.Header>
              <Card.Body>
                <Card.Title>Confirm Log Out</Card.Title>
                <Card.Text>
                  Are you sure you want to log out?
                </Card.Text>
                <Row>
                  <Col xs={6}><Button variant="danger" onClick={this.handleCancel.bind(this)}>Cancel</Button></Col>
                  <Col xs={6}><Button variant="primary" onClick={this.handleLogOut.bind(this)}>Log Out</Button></Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>)
  }
}

const mapStateToProps = (state) => {
  return {
      user: state.users
    }
  }


const mapDispatchToProps = (dispatch) => {
  return {
    logOut: (email) => dispatch(logOut(email))
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(withRouter(LogOut))
