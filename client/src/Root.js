import React from 'react';
import { Provider, connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import App from './App'
import MyShows from './components/myShows'
import SignUpContainer from './containers/SignUpContainer'
import SignInContainer from './containers/SignInContainer'
import {fetchShow, fetchShows, addUserShow, removeUserShow} from './actions/showActions'
import {registerUser} from './actions/userActions'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

const Root = ({ store, shows, addShow, deleteShow, fetchShow, fetchShows, addUserShow, removeUserShow, registerUser }) => (
  <Provider store={store}>
    <Router>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Nav className="mr-auto">
          <Link className="topLink" to="/">Home</Link>
          <Link className="topLink" to="/shows">My Shows</Link>
          <Link className="topLink" to="/reviews">Reviews</Link>
          <Link className="topLink" to="/users/sign_in">Sign In</Link>
          <Link className="topLink" to="/users/sign_up">Register</Link>

        </Nav>
      </Navbar>
      <Route exact path="/" render={() => <App />}/>
      <Route path="/users/sign_in" render={()=> <SignInContainer />}/>
      <Route path="/users/sign_up" render={()=> <SignUpContainer registerUser={registerUser} />}/>
      <Route path="/shows" render={() => <MyShows shows={shows} addShow={addShow} deleteShow={deleteShow} fetchShow={fetchShow} fetchShows={fetchShows} addUserShow={addUserShow} removeUserShow={removeUserShow}/>} />
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
  addUserShow: (showId, userId) => dispatch(addUserShow(showId, userId)),
  removeUserShow: (showId, userId) => dispatch(removeUserShow(showId, userId)),
  registerUser: (email, password) => dispatch(registerUser(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Root)
