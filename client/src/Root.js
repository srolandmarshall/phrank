import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import App from './App'
import MyShows from './components/myShows'
import SignUpContainer from './containers/SignUpContainer'
import ShowContainer from './containers/ShowContainer'
import SignInContainer from './containers/SignInContainer'
import {fetchShow, fetchShows, removeShow} from './actions/showActions'
import {registerUser, loginUser, getCurrentUser} from './actions/userActions'
import {fetchUserReviews, createReview} from './actions/reviewActions'
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
              <Link className="topLink" to="/myshows">My Shows</Link>
              <Link className="topLink" to="/shows">Shows</Link>
              <Link className="topLink" to="/reviews">New Reviews</Link>
              <Link className="topLink" to="/sign_in">Sign In</Link>
              <Link className="topLink" to="/sign_up">Register</Link>

            </Nav>
          </Navbar>
          <Route exact path="/" render={() => <App />}/>
          <Route path="/sign_in" render={()=> <SignInContainer loginUser={this.props.loginUser} />}/>
          <Route path="/sign_up" render={()=> <SignUpContainer registerUser={this.props.registerUser} />}/>
          <Route path="/myshows" render={() => <MyShows createReview={this.props.createReview} fetchUserReviews={this.props.fetchUserReviews} getCurrentUser={this.props.getCurrentUser} user={this.props.user} shows={this.props.shows} addShow={this.props.addShow} deleteShow={this.props.deleteShow} fetchShow={this.props.fetchShow} fetchShows={this.props.fetchShows} removeShow={this.props.removeShow}/>} />
          <Route path="/shows" render={() => <ShowContainer createReview={this.props.createReview} fetchUserReviews={this.props.fetchUserReviews} getCurrentUser={this.props.getCurrentUser} user={this.props.user} shows={this.props.shows} addShow={this.props.addShow} deleteShow={this.props.deleteShow} fetchShow={this.props.fetchShow} fetchShows={this.props.fetchShows} removeShow={this.props.removeShow}/>} />
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
  removeShow: (showId, user) => dispatch(removeShow(showId, user)),
  registerUser: (email, password) => dispatch(registerUser(email, password)),
  loginUser: (email, password) => dispatch(loginUser(email, password)),
  getCurrentUser: () => dispatch(getCurrentUser()),
  fetchUserReviews: (userId) => dispatch(fetchUserReviews(userId)),
  createReview: (user, show, review) => dispatch(createReview(user, show, review))
})

export default connect(mapStateToProps, mapDispatchToProps)(Root)
