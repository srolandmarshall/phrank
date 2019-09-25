import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import App from './App'
import MyShows from './components/myShows'
import SignUpContainer from './containers/SignUpContainer'
import SignInContainer from './containers/SignInContainer'
import {fetchShow, fetchShows, addUserShow, removeUserShow} from './actions/showActions'
import {registerUser, loginUser, getCurrentUser} from './actions/userActions'
import {fetchUserReviews} from './actions/reviewActions'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

getCurrentUser()

class Root extends React.Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }

  render() {
    return (
        <Router>
          <Navbar bg="dark" variant="dark" sticky="top">
            <Nav className="mr-auto">
              <Link className="topLink" to="/">Home</Link>
              <Link className="topLink" to="/shows">My Shows</Link>
              <Link className="topLink" to="/reviews">Reviews</Link>
              <Link className="topLink" to="/sign_in">Sign In</Link>
              <Link className="topLink" to="/sign_up">Register</Link>

            </Nav>
          </Navbar>
          <Route exact path="/" render={() => <App />}/>
          <Route path="/sign_in" render={()=> <SignInContainer loginUser={this.props.loginUser} />}/>
          <Route path="/sign_up" render={()=> <SignUpContainer registerUser={this.props.registerUser} />}/>
          <Route path="/shows" render={() => <MyShows fetchUserReviews={this.props.fetchUserReviews} getCurrentUser={this.props.getCurrentUser} user={this.props.user} shows={this.props.shows} addShow={this.props.addShow} deleteShow={this.props.deleteShow} fetchShow={this.props.fetchShow} fetchShows={this.props.fetchShows} addUserShow={this.props.addUserShow} removeUserShow={this.props.removeUserShow}/>} />
        </Router>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    shows: state.shows,
    user: state.users,
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => ({
  addShow: name => dispatch({ type: "ADD_SHOW", name }),
  deleteShow: id => dispatch({ type: "DELETE_SHOW", id}),
  fetchShow: (showDate, user) => dispatch(fetchShow(showDate, user)),
  fetchShows: userId => dispatch(fetchShows(userId)),
  addUserShow: (showId, userId) => dispatch(addUserShow(showId, userId)),
  removeUserShow: (showId, user) => dispatch(removeUserShow(showId, user)),
  registerUser: (email, password) => dispatch(registerUser(email, password)),
  loginUser: (email, password) => dispatch(loginUser(email, password)),
  getCurrentUser: () => dispatch(getCurrentUser()),
  fetchUserReviews: (userId) => dispatch(fetchUserReviews(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Root)
