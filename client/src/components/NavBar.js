import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavBar (props) {
    if (props.userId < 0) {
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

  export default NavBar
