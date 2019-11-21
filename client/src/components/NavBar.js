import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class NavBar extends React.Component {

  render(){
    if (this.props.user.userId === -1) {
      return (<Navbar bg="dark" variant="dark" sticky="top">
        <Nav className="mr-auto">
          <Link className="topLink" to="/">Home</Link>
          <Link className="topLink" to="/shows">Shows</Link>
          <Link className="topLink" to="/newest">New Reviews</Link>
          <Link className="topLink" to="/sign_in">Sign In</Link>
          <Link className="topLink" to="/sign_up">Register</Link>
        </Nav>
      </Navbar>
    )}
    else {
      return (<Navbar bg="dark" variant="dark" sticky="top">
        <Nav className="mr-auto">
          <Link className="topLink" to="/">Home</Link>
          <Link className="topLink" to="/myshows">My Shows</Link>
          <Link className="topLink" to="/shows">Shows</Link>
          <Link className="topLink" to="/newest">New Reviews</Link>
          <Link className="topLink" to="/logout">Log Out</Link>
        </Nav>
      </Navbar>)
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users
  }
}

export default connect(mapStateToProps, null)(NavBar);
