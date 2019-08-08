import React from 'react';
import { Provider, connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import App from './App'
import MyShows from './components/myShows'
import {fetchShow, fetchShows, addUserShow} from './actions/showActions'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

const Root = ({ store, shows, addShow, deleteShow, fetchShow, fetchShows, addUserShow }) => (
  <Provider store={store}>
    <Router>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Nav className="mr-auto">
          <Link className="topLink" to="/">Home</Link>
          <Link className="topLink" to="/shows">My Shows</Link>
          <Link className="topLink" to="/reviews">Reviews</Link>
        </Nav>
      </Navbar>
      <Route exact path="/" render={() => <App />}/>
      <Route path="/shows" render={() => <MyShows shows={shows} addShow={addShow} deleteShow={deleteShow} fetchShow={fetchShow} fetchShows={fetchShows} addUserShow={addUserShow}/>} />
    </Router>
  </Provider>
)

const mapStateToProps = (state, ownProps) => {
  return {shows: state.shows}
}

const mapDispatchToProps = dispatch => ({
  addShow: name => dispatch({ type: "ADD_SHOW", name }),
  deleteShow: id => dispatch({ type: "DELETE_SHOW", id}),
  fetchShow: showDate => dispatch(fetchShow(showDate)),
  fetchShows: userId => dispatch(fetchShows(userId)),
  addUserShow: (showId, userId) => dispatch(addUserShow(showId, userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Root)
