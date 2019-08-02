import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShowContainer from './containers/ShowContainer'
import {fetchShow} from './actions/showActions'
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

class App extends Component {
  componentDidMount(){
  }

  render() {
    return(
      <div className="App">
        <Navbar bg="dark" variant="dark" sticky="top">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/addshow">Add Show</Nav.Link>
            <Nav.Link href="/reviews">Reviews</Nav.Link>
          </Nav>
        </Navbar>
        <h1>Phrank!</h1>
        <h2>The application for tracking, ranking, and listening to your phavorite Phish shows.</h2>
        <ShowContainer shows={this.props.shows}       deleteShow={this.props.deleteShow}
        fetchShow={this.props.fetchShow} />
    </div>)
  };
}

const mapStateToProps = (state) => {
  return {shows: state.shows}
}

const mapDispatchToProps = dispatch => ({
  addShow: name => dispatch({ type: "ADD_SHOW", name }),
  deleteShow: id => dispatch({ type: "DELETE_SHOW", id}),
  fetchShow: showDate => dispatch(fetchShow(showDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
