import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth0 } from "./react-auth0-wrapper";

const NavBar = (props) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0()
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Nav className="mr-auto">
        <Link className="topLink" to="/">Home</Link>
        <Link className="topLink" to="/shows">My Shows</Link>
        <Link className="topLink" to="/reviews">Reviews</Link>
        <Link className="topLink" to="/logout">Log Out</Link>
      </Nav>
    </Navbar>
  )
}

export default NavBar
